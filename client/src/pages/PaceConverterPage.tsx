import PaceCalculatorCard from "../components/cards/PaceCalculatorCard";
import SpeedCalculatorCard from "../components/cards/SpeedCalculatorCard";

import { useState } from "react";

function PaceConverterPage() {
  const [activeTab, setActiveTab] = useState("tab1")

  const tabs = [
    {
      id: "tab1", 
      label: "Pace",
    },
    {
      id: "tab2", 
      label: "Speed", 
    }
  ];

  const paceTab = (
    <div>
      <PaceCalculatorCard />
    </div>
  )

  const speedTab = (
    <div>
      <SpeedCalculatorCard />
    </div>
  )
  
  return (
    <div className="min pt-15 h-screen w-full flex items-center justify-center
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
          {activeTab === "tab1" ? paceTab : speedTab}
        </div>
      </div>
    </div>
  );
}

export default PaceConverterPage;
