import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import Container from "../components/layout/Container";
import { BsGridFill, BsRocketTakeoffFill } from "react-icons/bs";
import { BiSolidBriefcaseAlt } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGear } from "react-icons/fa6";
import { HiLockClosed } from "react-icons/hi";
import { roadmapData } from "../components/data/roadmapData";
import {
  PiBatteryVerticalEmpty,
  PiBatteryVerticalFullFill,
  PiBatteryVerticalMediumFill,
} from "react-icons/pi";
import { CgCalendar } from "react-icons/cg";
import moment from "moment";

export default function Roadmap() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("auth");

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

  // Set active tab based on URL hash on initial load and when URL changes
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      setActiveTab(hash);
    } else {
      navigate("/roadmap#auth", { replace: true });
    }
  }, [location.hash, navigate]);

  // Handle swipe functionality
  const handleSwipe = (direction) => {
    const currentIndex = tabsData.findIndex((tab) => tab.id === activeTab);
    let newIndex;

    if (direction === "left") {
      // Swipe left = go to next tab
      newIndex = currentIndex < tabsData.length - 1 ? currentIndex + 1 : 0;
    } else {
      // Swipe right = go to previous tab
      newIndex = currentIndex > 0 ? currentIndex - 1 : tabsData.length - 1;
    }

    const newTab = tabsData[newIndex];
    navigate(`/roadmap${newTab.href}`);
    setActiveTab(newTab.id);
  };

  // Configure swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    trackMouse: true, // Enable mouse dragging for desktop testing
    preventScrollOnSwipe: true,
    delta: 50, // Minimum distance for swipe detection
  });

  // Function to determine the status color
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-c-color text-white";
      case "in-progress":
        return "bg-yellow-500";
      case "upcoming":
        return "bg-gray-100";
      default:
        return "bg-gray-100";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <PiBatteryVerticalFullFill size={14} />;
      case "pending":
        return <PiBatteryVerticalMediumFill size={14} />;
      case "upcoming":
        return <PiBatteryVerticalEmpty size={14} />;
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
    <div className="w-full mx-auto" {...swipeHandlers}>
      <Container>
        <div className="max-w-[560px] mx-auto w-full py-10 space-y-5">
          {/* Tabs Navigation */}
          <div className="w-full flex flex-col items-center gap-3">
            <img src="gloc-logo.svg" alt="" className="w-10" />
            <div className="flex w-full md:w-fit gap-1 bg-white border border-gray-200 p-1 rounded-full justify-start items-center overflow-x-auto">
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
          <div className="space-y-4">
            {currentRoadmapItems.map((item, index) => (
              <div key={item.id} className="relative">
                {/* Timeline connector */}
                {index < currentRoadmapItems.length - 1 && (
                  <div className="absolute left-[15px] top-[10px] w-[2px] bg-gray-200 -z-1 h-[calc(100%+32px-8px)]"></div>
                )}

                {/* Roadmap item */}
                <div className="flex items-start gap-4">
                  {/* Status indicator */}
                  <div
                    className={`w-8 h-8 p-1 rounded-lg flex items-center justify-center shrink-0 ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {getStatusIcon(item.status)}
                  </div>

                  {/* Roadmap content */}
                  <div className="w-full flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium">{item.task}</h3>
                        <p className="text-xs font-light text-gray-600">
                          {formatStatus(item.status)}
                        </p>
                      </div>
                      {item.date && (
                        <div className="flex flex-col items-end gap-1 text-gray-500">
                          <CgCalendar />
                          <span className="text-xs font-light">
                            {moment(item.date).format("LL")}
                          </span>
                        </div>
                      )}
                    </div>
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
