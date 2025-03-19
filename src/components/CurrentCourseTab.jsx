import React, { useState } from "react";
import ReactQuill from "react-quill";

function CurrentCourseTab() {
  const [activeTab, setActiveTab] = useState("transcript");
  const [notes, setNotes] = useState("");
  const [savedNotes, setSavedNotes] = useState([]);

  const handleTabChange = (tab) => setActiveTab(tab);

  const handleSaveNotes = () => {
    if (notes.trim() !== "") {
      setSavedNotes([...savedNotes, notes]);
      setNotes(""); // Clear editor after saving
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {["transcript", "resources", "quiz", "notes"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`p-2 rounded transition ${
              activeTab === tab
                ? "bg-bgHover text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 border rounded-lg bg-white shadow h-[400px] overflow-y-auto">
        {activeTab === "transcript" && (
          <div>
            <h3 className="text-xl font-semibold">Transcript</h3>
            <p>This is the transcript section content...</p>
          </div>
        )}
        {activeTab === "resources" && (
          <div>
            <h3 className="text-xl font-semibold">Resources</h3>
            <p>This is the resources section content...</p>
          </div>
        )}
        {activeTab === "quiz" && (
          <div>
            <h3 className="text-xl font-semibold">Quiz</h3>
            <p>This is the quiz section content...</p>
          </div>
        )}
        {activeTab === "notes" && (
          <div>
            <ReactQuill
              theme="snow"
              value={notes}
              onChange={setNotes}
              modules={{
                toolbar: [
                  [{ header: "1" }, { header: "2" }, { font: [] }],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["bold", "italic", "underline"],
                  [{ align: [] }],
                  ["link"],
                  ["blockquote"],
                  ["image"],
                ],
              }}
              formats={[
                "header",
                "font",
                "list",
                "bold",
                "italic",
                "underline",
                "align",
                "link",
                "blockquote",
                "image",
              ]}
              className="bg-white shadow-md rounded-lg"
            />

            {/* Save Button */}
            <button
              onClick={handleSaveNotes}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Save Notes
            </button>

            {/* Display Saved Notes */}
            {savedNotes.length > 0 && (
              <div className="mt-6">
                <h4 className="font-semibold text-lg">Saved Notes:</h4>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {savedNotes.map((note, index) => (
                    <div key={index} className="p-4 border rounded-lg bg-gray-100">
                      <div dangerouslySetInnerHTML={{ __html: note }}></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default CurrentCourseTab;
