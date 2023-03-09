import { useState } from "react";
import { StandingPlayoff } from "../StandingPlayoff";
import { StandingTableGroup } from "../StandingTableGroup";
import styles from "./Tab.module.css";

export const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <div>
      <ul className="w-full flex items-center gap-4 uppercase my-8 mx-2">
        <li
          className={`hover:cursor-pointer py-2 px-6 ${
            activeTab === 1 ? styles.active : ""
          }`}
          onClick={() => handleTabClick(1)}
        >
          fase de grupos
        </li>
        <li
          className={`hover:cursor-pointer py-2 px-6 ${
            activeTab === 2 ? styles.active : ""
          }`}
          onClick={() => handleTabClick(2)}
        >
          playoffs
        </li>
      </ul>

      <div className="tab_content">
        {activeTab === 1 && (
          <div className="grid gap-4 md:grid-cols-3">
            {[...Array(8)].map((item) => (
              <StandingTableGroup />
            ))}
          </div>
        )}
        {activeTab === 2 && (
          <div className="grid gap-2 md:grid-cols-2">
            {[...Array(8)].map((item) => (
              <StandingPlayoff />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
