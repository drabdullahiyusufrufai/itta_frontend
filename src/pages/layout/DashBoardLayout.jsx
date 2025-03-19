import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaBars, FaBook, FaChartBar, FaUsers, FaChalkboardTeacher, FaCogs, FaBell } from "react-icons/fa";
import logo from "../../assets/images/logo/logo.png"

const navItems = [
  { to: "/dashboard", icon: <FaChartBar />, label: "Dashboard" },
  { to: "/my-courses", icon: <FaBook />, label: "Courses" },
  { to: "/learning", icon: <FaChalkboardTeacher />, label: "Current Sessions" },
  { to: "/", icon: <FaUsers />, label: "Community" },
  { to: "/notifications", icon: <FaBell />, label: "Notifications" },
  { to: "/settings", icon: <FaCogs />, label: "Settings" },
];

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-white">

      {/* Mobile Nav Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-blue-900 text-white p-2 rounded"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar (Fixed Height & No Scrolling) */}
      <aside
        className={`${
          collapsed ? "w-20" : "w-64"
        } h-screen bg-primary text-white p-4 flex flex-col space-y-6 transition-all duration-300 
        lg:relative fixed inset-y-0 left-0 z-40 transform ${mobileOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 overflow-hidden`}
      >
        
        <div className="flex items-center justify-between px-4 py-2">
<Link to={"/"} >
  <img src={logo} alt="logo" width={100} className={` ${collapsed && "hidden"} object-contain`} />
</Link>

  <button
    className="text-white text-xl p-2 hidden lg:block"
    onClick={() => setCollapsed(!collapsed)}
  >
    <FaBars />
  </button>
</div>
        
        {/* Navigation */}
        <nav className="flex flex-col space-y-4">
          {navItems.map(({ to, icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `flex items-center gap-3 p-2 rounded-lg ${isActive ? "bg-bgHover" : "hover:bg-bgHover"}`}
              onClick={() => setMobileOpen(false)}
            >
              {icon} {!collapsed && label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content (Scrollable) */}
      <main className="w-full p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
