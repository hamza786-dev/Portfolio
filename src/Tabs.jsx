import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    {
      label: "Education",
      time:"BSIT",
      content: "University of Agriculture",
      time1:"ICS",
      content1: "Laboratory College",
      time2:"Science",
      content2: "Govt. MC High School",

    },
    {
      label: "Skills",
      time:"Full-Stack Web Development",
      content: "The Skills Institute of IT & Development ",
      time1:"Spreadsheet",
      content1: "The Skills Institute of IT & Development "
    },
    {
      label: "Language",
      time:"English & Urdu",
      // content: "This is the content of Tab 3",
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="">
      {/* Tab Buttons */}
      <div className="flex lg:flex-nowrap flex-wrap space-x-8 mb-6">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            className={`tab-button w-full text-lg font-medium transition-colors duration-300 ${
              activeTab === index
                ? "border-b-2 border-b-red-500 w-16 text-white"
                : "text-white"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-full">
      <p className=" text-red-500 text-lg">{tabsData[activeTab].time}</p>
      <p className="text-left text-white text-lg">{tabsData[activeTab].content}</p>
      <p className=" text-red-500 text-lg">{tabsData[activeTab].time1}</p>
      <p className="text-left text-white text-lg">{tabsData[activeTab].content1}</p>
      <p className=" text-red-500 text-lg">{tabsData[activeTab].time2}</p>       
        <p className="text-left text-white text-lg">{tabsData[activeTab].content2}</p>
      </div>
    </div>
  );
};

export default Tabs;