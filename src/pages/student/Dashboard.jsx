import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import SearchBar from "../../components/SearchBar";
import { dashboardNavs } from "../../constants/Navs";
import { useDarkMode } from "../../context/DarkModeContext";
import CoursePage from "../../components/TakeCourse";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const {isDarkMode, toggleDarkMode} = useDarkMode()

  return (
    <main className="w-full min-h-screen transition-all">
      <SideBar
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        title={"Dashboard"}
        navs={dashboardNavs}
      />

      <div className="md:ml-64">
        <SearchBar />

            </div>


            <section>
              <CoursePage />
            </section>
    </main>
  );
}

export default Dashboard;
