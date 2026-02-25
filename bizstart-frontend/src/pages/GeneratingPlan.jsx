import React from "react";
import { useNavigate } from "react-router-dom";

const PRIMARY = "#6E62B1";

export default function GeneratingPlan() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-6 text-center">

      <div className="max-w-sm w-full">

        {/* Spinner */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-[4px] rounded-full animate-spin"
            style={{ borderTopColor: PRIMARY }}
          />
        </div>

        <h2 className="text-lg font-semibold mb-2">
          Creating your Business Plan
        </h2>

        <p className="text-gray-500 mb-8">
          BizStart AI is analyzing your information and generating professional content.
        </p>

        <button
          onClick={() => navigate("/your-plan")}
          className="w-full py-3 rounded-xl text-white font-medium"
          style={{ backgroundColor: PRIMARY }}
        >
          Apply AI Enhancement
        </button>

        <button className="w-full py-3 rounded-xl border mt-3">
          Regenerate Section
        </button>

      </div>
    </div>
  );
}