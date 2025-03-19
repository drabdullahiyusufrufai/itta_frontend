import React, { useState } from 'react';
import ReactQuill from 'react-quill'; // Import ReactQuill
import 'react-quill/dist/quill.snow.css'; // Import Quill's default styling
import { coursesOffered } from '../constants/courses';

const CoursePage = () => {
  const [activeTab, setActiveTab] = useState('transcript');
  const [notes, setNotes] = useState('');
  const [savedNotes, setSavedNotes] = useState([]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSaveNotes = () => {
    setSavedNotes([...savedNotes, notes]);
    setNotes(''); // Clear the editor after saving
  };

  return (
    <div className="flex min-h-screen bg-orange-100">
      {/* Sidebar */}
     

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6">
          <a href="#" className="hover:text-orange-600">Home</a> /
          <a href="#" className="hover:text-orange-600"> Courses</a> /
          <span className="text-gray-800"> Course Details</span>
        </nav>

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search...."
              className="w-full p-2 pl-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button>🔔</button>
            <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">G</div>
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {coursesOffered.map((course) => (
            <div key={course.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-40 object-cover"/>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">{course.title}</h2>
                <p className="text-gray-700 mb-4">{course.description}</p>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{course.instructor}</span>
                  <span>{course.duration}</span>
                </div>
                <div className="mt-4">
                  <button className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600">
                    View Course
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="mb-6">
          <button
            onClick={() => handleTabChange('transcript')}
            className={`mr-4 p-2 rounded ${activeTab === 'transcript' ? 'bg-orange-600 text-white' : 'bg-gray-200'}`}
          >
            Transcript
          </button>
          <button
            onClick={() => handleTabChange('resources')}
            className={`mr-4 p-2 rounded ${activeTab === 'resources' ? 'bg-orange-600 text-white' : 'bg-gray-200'}`}
          >
            Resources
          </button>
          <button
            onClick={() => handleTabChange('quiz')}
            className={`mr-4 p-2 rounded ${activeTab === 'quiz' ? 'bg-orange-600 text-white' : 'bg-gray-200'}`}
          >
            Quiz
          </button>
          <button
            onClick={() => handleTabChange('notes')}
            className={`p-2 rounded ${activeTab === 'notes' ? 'bg-orange-600 text-white' : 'bg-gray-200'}`}
          >
            Notes
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-4 border rounded-lg bg-white shadow h-96 overflow-y-auto">
          {activeTab === 'transcript' && (
            <div>
              <h3 className="text-xl">Transcript Content</h3>
              <p>This is the transcript section content...</p>
            </div>
          )}
          {activeTab === 'resources' && (
            <div>
              <h3 className="text-xl">Resources Content</h3>
              <p>This is the resources section content...</p>
            </div>
          )}
          {activeTab === 'quiz' && (
            <div>
              <h3 className="text-xl">Quiz Content</h3>
              <p>This is the quiz section content...</p>
            </div>
          )}
          {activeTab === 'notes' && (
            <div>
              <h3 className="text-xl">Notes</h3>

              {/* React Quill Text Editor for Notes */}
              <ReactQuill
                value={notes}
                onChange={setNotes} // Automatically updates `notes` when text is edited
                modules={{
                  toolbar: [
                    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    ['bold', 'italic', 'underline'],
                    [{ 'align': [] }],
                    ['link'],
                    ['blockquote'],
                    ['image'],
                  ],
                }}
                formats={[
                  'header', 'font', 'list', 'bold', 'italic', 'underline', 'align', 'link', 'blockquote', 'image',
                ]}
              />

              {/* Save Button */}
              <button
                onClick={handleSaveNotes}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Save Notes
              </button>

              {/* Display Saved Notes */}
              <div className="mt-6">
                <h4 className="font-semibold text-lg">Saved Notes:</h4>
                <div className="mt-4 space-y-4">
                  {savedNotes.map((note, index) => (
                    <div key={index} className="p-4 border rounded-lg bg-gray-100">
                      <div dangerouslySetInnerHTML={{ __html: note }}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Sidebar (Module Navigation) */}
      <aside className="w-1/5 bg-white p-4 shadow-lg overflow-y-auto">
        <h3 className="font-semibold text-gray-700 mb-4">MODULE 1: COURSE INTRODUCTION</h3>
        <nav className="space-y-4 text-gray-600">
          <a
            href="#"
            className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md"
          >
            <span className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">1</div>
              <span>What is Machine Learning?</span>
            </span>
            <span>➔</span>
          </a>
          <a
            href="#"
            className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md"
          >
            <span className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">2</div>
              <span>Jupyter Notebook</span>
            </span>
            <span>➔</span>
          </a>
          <a
            href="#"
            className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md"
          >
            <span className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">3</div>
              <span>Data Preprocessing</span>
            </span>
            <span>➔</span>
          </a>
        </nav>
      </aside>
    </div>
  );
};

export default CoursePage;
