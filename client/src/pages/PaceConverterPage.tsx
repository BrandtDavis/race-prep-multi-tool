import PaceCalculatorCard from "../components/cards/PaceCalculatorCard";
import SpeedCalculatorCard from "../components/cards/SpeedCalculatorCard";

import { act, useState } from "react";

function PaceConverterPage() {
  const [activeTab, setActiveTab] = useState("tab1")

  const tabs = [
    {id: "tab1", label: "Pace"},
    {id: "tab2", label: "Speed"}
  ];

  const tabContent = {
    tab1: (
      <div>
        <h2 className="mb-3 text-2xl font-bold">Pace</h2>
          <PaceCalculatorCard />
      </div>
    ),
    tab2: (
      <div>
        <h2 className="mb-3 text-2xl font-bold">Speed</h2>
          <SpeedCalculatorCard />
      </div>
    )
  }

  return (
    <div className="min h-screen w-full flex items-center justify-center
      bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200">
        <div className="max-w-[500px] rounded-3xl border bg-gray-300 p-8 mx-10 shadow-xl space-y-5">
        
        {/* Tabs */}
        <div className="flex flex-wrap border-b">
          {tabs.map((tab) => (
            <button 
              key={tab.id}
              className={`px-4 py-2 font-semibold ${
                activeTab == tab.id 
                  ? "border-b-2 border-purple-5 text-purple-500" 
                  : "text-gray-500 hover:text-purple-500"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div>
          {tabContent[activeTab]}
        </div>
        </div>

      {/* <div className="flex h-screen"> */}
        {/* <div className="m-auto w-1/2 bg-gray-300 rounded overflow-hidden shadow-lg flex-wrap"> */}
          {/* <div className="px-6 py-4"> */}
            {/* <div className="text-gray-700 text-basefont-bold text-xl mb-2"> */}
              {/* Treadmill Pace Converter */}
            {/* </div> */}
            {/* <hr className="border-gray-600 mt-2"></hr> */}

            {/* <form method="" className="w-full"> */}
            {/* </form> */}
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
    </div>
  );
}

export default PaceConverterPage;
