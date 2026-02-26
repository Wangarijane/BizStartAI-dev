import React from "react";
import { ArrowLeft, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PRIMARY = "#6E62B1";

export default function YourPlan() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="w-full max-w-md bg-white flex flex-col h-screen">

        {/* Header */}
        <div className="sticky top-0 bg-white px-6 py-4 border-b flex items-center justify-center relative">
          <button onClick={() => navigate(-1)} className="absolute left-6 p-2 bg-gray-100 rounded-xl">
            <ArrowLeft size={20} />
          </button>
          <h1 className="font-semibold">Your Plan</h1>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">

          {/* Success Card */}
          <div className="rounded-2xl p-5 text-white mb-6"
            style={{ backgroundColor: PRIMARY }}
          >
            <Check className="mb-2" />
            <p className="font-semibold">Plan Generated!</p>
            <p className="text-sm opacity-90">
              Your AI-powered business plan is ready.
            </p>
          </div>

          {/* Progress */}
          <div className="bg-gray-100 p-4 rounded-xl mb-6">
            <p className="text-sm font-medium">Completion Status</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="h-2 rounded-full"
                style={{ width: "100%", backgroundColor: PRIMARY }}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mb-6">
            <button className="flex-1 py-3 rounded-xl text-white"
              style={{ backgroundColor: PRIMARY }}
            >
              Preview PDF
            </button>

            <button className="flex-1 py-3 rounded-xl border">
              Download PDF
            </button>
          </div>

          {/* Section Card */}
          <div
            onClick={() => navigate("/edit-section")}
            className="border rounded-xl p-4 cursor-pointer"
          >
            <div className="flex justify-between mb-2">
              <p className="font-medium">Executive Summary</p>
              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                Generated
              </span>
            </div>

            <p className="text-sm text-gray-500">
              Glow Path is a mobile platform that bridges the gap...
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}