import { useState } from "react";
import { Card } from "./components/Card";
import { ProfileSideBar } from "./components/ProfileSideBar";
import data from "../data.json";
import "./style.css";

export default function App() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("daily");

  return (
    <>
      <main>
        <div className="dashboard-grid | container">
          <ProfileSideBar
            selectedTimeframe={selectedTimeframe}
            setSelectedTimeframe={setSelectedTimeframe}
          />

          {data.map((item, index) => (
            <Card
              key={index}
              item={item}
              index={index}
              selectedTimeframe={selectedTimeframe}
            />
          ))}
        </div>
      </main>
    </>
  );
}
