import { useState } from "react";
import { FaPlayCircle, FaCheckCircle } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import CurrentCourseTab from "../../components/CurrentCourseTab";

const LearningPage = () => {
  const [activeTab, setActiveTab] = useState("transcript");
  const [notes, setNotes] = useState('');
  const [completedUnits, setCompletedUnits] = useState(2);
  const [savedNotes, setSavedNotes] = useState([]);
  const totalUnits = 8;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSaveNotes = () => {
    setSavedNotes([...savedNotes, notes]);
    setNotes(''); // Clear the editor after saving
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 p-6 gap-6">
      {/* Main Content */}
      <main className="flex-1">
        <h1 className="text-3xl font-bold">Artificial Intelligence & Machine Learning</h1>
        <p className="text-gray-600">By Simon Shaw, Illustrator and 3D designer</p>

        {/* Video Section */}
        <div className="mt-6 rounded-lg overflow-hidden shadow-lg relative">
          <img src="/placeholder-video.jpg" alt="Course Video" className="w-full h-[50vh] object-cover" />
          <button className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
            <FaPlayCircle size={64} />
          </button>
        </div>

        {/* Tabs */}
        <CurrentCourseTab />
      </main>

      {/* Sidebar */}
      <aside className="lg:w-1/3 w-full bg-white p-6 rounded-lg shadow-md">
        {/* Progress */}
        <div className="mb-6">
          <p className="text-gray-700 font-medium">Course Progress</p>
          <div className="w-full bg-gray-300 rounded-full h-2.5">
            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${(completedUnits / totalUnits) * 100}%` }}></div>
          </div>
        </div>

        {/* Course Outline */}
        <div>
          <h2 className="text-lg font-semibold">Course 1 - Introduction</h2>
          <ul className="mt-2 space-y-2">
            {["Presentation", "Job opportunities", "How to get the most out of this course"].map((unit, index) => (
              <li key={index} className="flex items-center space-x-2 text-gray-700">
                <FaCheckCircle size={20} className="text-green-500" />
                <span>{unit}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default LearningPage;
