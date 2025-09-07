import { useState } from "react";
import WidgetCard from "./WidgetCard";
import AddWidgetModal from "./AddWidgetModal";

const CategorySection = ({ category }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-700">{category.name}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.widgets.map((w) => (
          <WidgetCard key={w.id} widget={w} categoryId={category.id} />
        ))}

        <div
          onClick={() => setShowModal(true)}
          className="flex items-center justify-center bg-white rounded-xl shadow hover:shadow-lg border border-gray-200 cursor-pointer p-6 transition"
        >
          <div className="flex items-center gap-2 px-4 py-2 border-2  border-gray-200 rounded-full cursor-pointer ">
            <span className="text-xl text-blue-600 font-bold">+</span>
            <span className="text-sm text-gray-700 font-medium">
              Add Widget
            </span>
          </div>
        </div>
      </div>

      {showModal && (
        <AddWidgetModal
          categoryId={category.id}
          close={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default CategorySection;
