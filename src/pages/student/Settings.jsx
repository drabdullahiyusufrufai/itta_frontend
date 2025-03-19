import { useState } from "react";

export default function Settings() {
  const [settings, setSettings] = useState({
    username: "JohnDoe",
    email: "johndoe@example.com",
    darkMode: false,
    notifications: true,
  });

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">User Settings</h2>
      <div className="p-4 border rounded-lg shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Username</label>
            <input
              className="w-full p-2 border rounded"
              name="username"
              value={settings.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              className="w-full p-2 border rounded"
              name="email"
              type="email"
              value={settings.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <span>Dark Mode</span>
            <input
              type="checkbox"
              checked={settings.darkMode}
              onChange={() => toggleSetting("darkMode")}
            />
          </div>
          <div className="flex items-center justify-between">
            <span>Email Notifications</span>
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={() => toggleSetting("notifications")}
            />
          </div>
          <button className="w-full p-2 bg-blue-500 text-white rounded">Save Changes</button>
        </div>
      </div>
    </div>
  );
}
