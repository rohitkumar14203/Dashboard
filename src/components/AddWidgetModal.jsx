import { useState } from "react";
import { useDashboard } from "../context/DashboardContext";

const AddWidgetModal = ({ categoryId, close }) => {
  const { dispatch } = useDashboard();
  const [activeTab, setActiveTab] = useState("CSPM");
  const [newWidget, setNewWidget] = useState({ name: "", text: "" });

  const handleAdd = () => {
    if (!newWidget.name) return;
    const widget = {
      id: Date.now().toString(),
      name: newWidget.name,
      text: newWidget.text || "Random widget text",
    };
    dispatch({ type: "ADD_WIDGET", payload: { categoryId, widget } });
    close();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg">
        <div className="bg-indigo-900 text-white px-6 py-3 rounded-t-xl flex justify-between items-center">
          <h2 className="text-lg font-semibold">Add Widget</h2>
          <button onClick={close} className="text-white hover:text-red-400">
            ✕
          </button>
        </div>

        <div className="flex border-b px-6">
          {["CSPM", "CWPP"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === tab
                  ? "border-b-2 border-indigo-600 text-indigo-600"
                  : "text-gray-500 hover:text-indigo-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-6 space-y-4">
          <h4 className="font-medium text-gray-700">{activeTab} Widget</h4>
          <input
            type="text"
            placeholder="Widget Name"
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            value={newWidget.name}
            onChange={(e) =>
              setNewWidget({ ...newWidget, name: e.target.value })
            }
          />
          <textarea
            placeholder="Widget Text"
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            value={newWidget.text}
            onChange={(e) =>
              setNewWidget({ ...newWidget, text: e.target.value })
            }
          />
        </div>

        <div className="flex justify-end gap-3 border-t px-6 py-4">
          <button
            onClick={close}
            className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;
