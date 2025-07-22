import React from "react";
import Container from "../components/layout/Container";
import { BsGridFill, BsRocketTakeoffFill } from "react-icons/bs";
import { BiSolidBriefcaseAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Roadmap() {
  const tabsData = [
    {
      name: "Dashboard",
      icon: <BsGridFill />,
      href: "#dashboard",
      current: true,
    },
    {
      name: "Workspace",
      icon: <BsRocketTakeoffFill />,
      href: "#workspace",
      current: false,
    },
    {
      name: "Jobs",
      icon: <BiSolidBriefcaseAlt />,
      href: "#jobs",
      current: false,
    },
  ];
  // Sample roadmap data - you can replace with your actual data
  const roadmapItems = [
    {
      id: 1,
      task: "Research & Planning",
      status: "completed",
      date: "Q1 2025",
    },
    { id: 2, task: "UI/UX Design", status: "completed", date: "Q2 2025" },
    {
      id: 3,
      task: "Frontend Development",
      status: "in-progress",
      date: "Q2-Q3 2025",
    },
    {
      id: 4,
      task: "Backend Integration",
      status: "in-progress",
      date: "Q3 2025",
    },
    { id: 5, task: "Beta Testing", status: "upcoming", date: "Q3 2025" },
    { id: 6, task: "Public Launch", status: "upcoming", date: "Q4 2025" },
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

  return (
    <div className="w-full mx-auto">
      <Container>
        <div className="max-w-[560px] mx-auto w-full py-10 space-y-10">
          {/* Tabs Navigation */}
          <div className="w-full flex flex-col items-center gap-3">
            <div className="flex w-fit gap-2 bg-white border border-gray-200 p-1 rounded-full justify-center items-center">
              {tabsData.map((tab) => (
                <Link
                  key={tab.name}
                  to={tab.href}
                  className={`
                      whitespace-nowrap font-medium text-xs px-4 py-2.5 rounded-full transition-colors duration-200
                      ${
                        tab.current
                          ? "bg-c-color text-white"
                          : "hover:bg-gray-100"
                      }
                    `}
                  aria-current={tab.current ? "page" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    tab.current = true;
                  }}
                >
                  {tab.name}
                </Link>
              ))}
            </div>
            <h1 className="text-xl font-bold">Product Roadmap</h1>
            <p className="text-gray-600">
              Our development timeline and progress
            </p>
          </div>
          {/* Roadmap items */}
          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <div key={item.id} className="relative">
                {/* Timeline connector */}
                {index < roadmapItems.length - 1 && (
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
