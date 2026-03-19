import React, { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import Logo from "../assets/bizstart-ai.png";
import BottomNav from "../components/BottomNav";
import api from "../api"; // IMPORT API INSTANCE

// Components
const Header = () => (
  <div className="flex items-center justify-between sticky top-0 bg-white z-10 py-3 px-4 shadow-md">
    <img src={Logo} alt="BizStart AI" className="h-10 object-contain" />
    <Bell stroke="black" size={22} />
  </div>
);

const ProgressCard = ({ completedModules, totalModules, progressPercent }) => (
  <div className="rounded-2xl p-4 mb-6 bg-primary">
    <p className="text-white font-semibold mb-2 text-sm">Learning Progress</p>
    <div className="w-full bg-gray-300 rounded-full h-3">
      <div
        className="h-3 rounded-full bg-dark transition-all duration-1000"
        style={{ width: `${progressPercent}%` }}
      ></div>
    </div>
    <p className="text-xs text-gray-300 mt-2">
      {completedModules} of {totalModules} modules finished
    </p>
  </div>
);

const SummaryCard = ({ value, icon, label }) => (
  <div className="bg-gray-100 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm">
    <div className="text-2xl mb-2 text-primary">{icon}</div>
    <p className="font-semibold text-gray-800 text-lg">{value}</p>
    <p className="text-xs text-gray-500 mt-1">{label}</p>
  </div>
);

const InProgressCourseCard = ({ title, description, completedLessons, totalLessons, duration }) => {
  const progressPercent = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
  return (
    <div className="bg-gray-50 rounded-2xl p-4 shadow-sm">
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
      <div className="mt-3 bg-gray-200 rounded-full h-2 w-full">
        <div
          className="h-2 rounded-full bg-primary transition-all duration-1000"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>Lessons: {completedLessons}/{totalLessons}</span>
        <span>⏱ {duration} mins</span>
      </div>
    </div>
  );
};

const ProgressDashboard = () => {
  // 🔗 1. Create State to hold backend data
  const [userDashboard, setUserDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔗 2. Fetch data when component loads
  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const res = await api.get('/progress');
        if (res.data.success) {
          setUserDashboard(res.data.data);
        }
      } catch (error) {
        console.error("Failed to load dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, []);

  // 🔗 3. Show loading state while fetching
  if (loading) {
    return (
      <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-primary animate-pulse font-medium">Loading your progress...</p>
        </div>
        <BottomNav />
      </div>
    );
  }

  //  4. Fallback if user has no data yet
  if (!userDashboard) {
    return (
      <div className="w-full min-h-screen bg-white flex flex-col">
        <Header />
        <div className="flex-1 p-4 flex items-center justify-center text-gray-500 text-center">
          Oops! Could not load your dashboard. Ensure you are logged in.
        </div>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <Header />

      <div className="flex-1 overflow-auto p-4 space-y-6 max-w-300 w-full mx-auto pb-24">
        <div>
          <p className="font-semibold text-gray-800 text-lg">
            Welcome back {userDashboard.name}!
          </p>
          <p className="text-gray-500 text-sm mt-1">
            You are making great progress on your journey!
          </p>
        </div>

        <ProgressCard
          completedModules={userDashboard.completedModules}
          totalModules={userDashboard.totalModules}
          progressPercent={userDashboard.progressPercent}
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {userDashboard.summary.map((item, idx) => (
            <SummaryCard key={idx} {...item} />
          ))}
        </div>

        <div>
          <h2 className="font-semibold text-gray-800 mb-3">Continue Learning</h2>
          {userDashboard.courses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {userDashboard.courses.map((course, idx) => (
                <InProgressCourseCard key={idx} {...course} />
              ))}
            </div>
          ) : (
             <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-sm">
                <p className="text-gray-500 text-sm">You haven't started any courses yet.</p>
                <button className="mt-3 text-primary text-sm font-semibold hover:underline cursor-pointer">
                  Explore Library
                </button>
             </div>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default ProgressDashboard;