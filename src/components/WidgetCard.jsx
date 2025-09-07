import { useDashboard } from "../context/DashboardContext";

const WidgetCard = ({ widget, categoryId }) => {
  const { dispatch } = useDashboard();

  const removeWidget = () => {
    dispatch({
      type: "REMOVE_WIDGET",
      payload: { categoryId, widgetId: widget.id },
    });
  };

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg p-4 relative">
      <div className="flex items-start justify-between mb-2">
        <h4 className="text-lg font-semibold text-gray-800">{widget.name}</h4>
        <button
          onClick={removeWidget}
          className="text-gray-400 hover:text-red-500 transition"
        >
          ✕
        </button>
      </div>
      <p className="text-gray-600 text-sm">{widget.text}</p>
    </div>
  );
};

export default WidgetCard;
