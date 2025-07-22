import React, { useState, useEffect } from "react";
import Container from "../components/layout/Container";
import { BsGridFill, BsRocketTakeoffFill } from "react-icons/bs";
import { BiSolidBriefcaseAlt } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGear } from "react-icons/fa6";
import { HiLockClosed } from "react-icons/hi";
import { roadmapData } from "../components/data/roadmapData";

export default function Roadmap() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("auth");

  // Set active tab based on URL hash on initial load and when URL changes
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      setActiveTab(hash);
    } else {
      // Default to 'auth' if no hash is present
      navigate("/roadmap#auth", { replace: true });
    }
  }, [location.hash, navigate]);

  const tabsData = [
    {
      name: "Auth",
      icon: <HiLockClosed />,
      href: "#auth",
      id: "auth",
    },
    {
      name: "Dashboard",
      icon: <BsGridFill />,
      href: "#dashboard",
      id: "dashboard",
    },
    {
      name: "Workspace",
      icon: <BsRocketTakeoffFill />,
      href: "#workspace",
      id: "workspace",
    },
    {
      name: "Jobs",
      icon: <BiSolidBriefcaseAlt />,
      href: "#jobs",
      id: "jobs",
    },
    {
      name: "Settings",
      icon: <FaGear />,
      href: "#settings",
      id: "settings",
    },
  ];
  // Function to determine the status color
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "in-progress":
        return "bg-yellow-500";
      case "upcoming":
        return "bg-gray-300";
      default:
        return "bg-gray-300";
    }
  };

  // Function to format the status text
  const formatStatus = (status) => {
    return status
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Handle tab click
  const handleTabClick = (tabId) => {
    navigate(`/roadmap${tabsData.find((tab) => tab.id === tabId).href}`);
    setActiveTab(tabId);
  };

  // Get current roadmap items based on active tab
  const currentRoadmapItems = roadmapData[activeTab] || [];

  // Get tab title for display
  const getTabTitle = () => {
    const tab = tabsData.find((tab) => tab.id === activeTab);
    return tab ? tab.name : "Roadmap";
  };

  return (
    <div className="w-full mx-auto">
      <Container>
        <div className="max-w-[560px] mx-auto w-full py-10 space-y-5">
          {/* Tabs Navigation */}
          <div className="w-full flex flex-col items-center gap-3">
            <div className="flex w-fit gap-1 bg-white border border-gray-200 p-1 rounded-full justify-center items-center">
              {tabsData.map((tab) => (
                <Link
                  key={tab.id}
                  to={`/roadmap${tab.href}`}
                  className={`
                    whitespace-nowrap flex items-center gap-2 font-medium text-xs px-4 py-2.5 rounded-full transition-colors duration-200
                    ${
                      activeTab === tab.id
                        ? "bg-c-color text-white"
                        : "hover:bg-gray-100"
                    }
                  `}
                  aria-current={activeTab === tab.id ? "page" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabClick(tab.id);
                  }}
                >
                  {tab.icon}
                  {tab.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-lg font-bold">{getTabTitle()} Roadmap</h1>
            <p className="text-gray-600 text-xs font-light">
              Development timeline and progress for {getTabTitle()}
            </p>
          </div>

          {/* Roadmap items */}
          <div className="space-y-8">
            {currentRoadmapItems.map((item, index) => (
              <div key={item.id} className="relative">
                {/* Timeline connector */}
                {index < currentRoadmapItems.length - 1 && (
                  <div className="absolute left-[19px] top-[40px] w-1 bg-gray-200 h-[calc(100%+32px-8px)]"></div>
                )}

                {/* Roadmap item */}
                <div className="flex items-start gap-4">
                  {/* Status indicator */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status === "completed" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : item.status === "in-progress" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V7h2v2z" />
                      </svg>
                    ) : (
                      <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                    )}
                  </div>

                  {/* Roadmap content */}
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">{item.task}</h3>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {formatStatus(item.status)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
