import { useState } from "react";
import { LuTrash2, LuEye, LuCheckCircle } from "react-icons/lu";

const initialNotifications = [
  { id: 1, text: "New message from John", read: false },
  { id: 2, text: "System update available", read: false },
  { id: 3, text: "Reminder: Meeting at 3 PM", read: true },
];

export default function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
      {notifications.length === 0 ? (
        <p className="text-gray-500">No notifications</p>
      ) : (
        notifications.map((notification) => (
          <div
            key={notification.id}
            className={`mb-3 p-4 flex items-center justify-between border rounded-lg shadow-md transition-all ${
              notification.read ? "bg-gray-100" : "bg-white"
            }`}
          >
            <div className="flex-grow">
              <p className={`text-sm ${notification.read ? "text-gray-500" : "text-black"}`}>
                {notification.text}
              </p>
            </div>
            <div className="flex space-x-2">
              {!notification.read && (
                <button onClick={() => markAsRead(notification.id)}>
                  <LuCheckCircle className="w-5 h-5 text-green-500" />
                </button>
              )}
              <button>
                <LuEye className="w-5 h-5 text-blue-500" />
              </button>
              <button onClick={() => deleteNotification(notification.id)}>
                <LuTrash2 className="w-5 h-5 text-red-500" />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
