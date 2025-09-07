import { useState } from "react";
import CategorySection from "./components/CategorySection";
import { useDashboard } from "./context/DashboardContext";
import AddWidgetModal from "./components/AddWidgetModal";

const App = () => {
  const { state } = useDashboard();
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    state.categories[0]?.id || ""
  );

  const filteredCategories = state.categories.map((category) => ({
    ...category,
    widgets: category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md px-6 py-4 flex flex-col sm:flex-row justify-between items-center sticky top-0 z-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full sm:w-auto">
          <h1 className="text-xl font-bold text-indigo-600">CNAPP Dashboard</h1>

          <input
            type="text"
            placeholder="Search widgets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mt-3 sm:mt-0 w-full sm:w-80 border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="mt-3 sm:mt-0 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow"
        >
          + Add Widget
        </button>
      </nav>

      <main className="p-6 space-y-10">
        {filteredCategories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
      </main>

      {showModal && (
        <AddWidgetModal
          categoryId={selectedCategory}
          close={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default App;
