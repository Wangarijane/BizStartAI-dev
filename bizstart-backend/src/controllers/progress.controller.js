const UserProgress = require('../models/userProgress.model');
const Course = require('../models/course.model');
const Conversation = require('../models/conversation.model');

exports.getUserDashboard = async (req, res, next) => {
  try {
    const userId = req.user.id;

    // Fetch user's enrolled courses and progress
    const progressRecords = await UserProgress.findAll({
      where: { user_id: userId },
      include: [{ model: Course }]
    });

    // Count their AI chat sessions
    const aiSessionsCount = await Conversation.count({
      where: { user_id: userId }
    });

    let totalLessonsCompleted = 0;
    let coursesData = [];

    progressRecords.forEach(record => {
      totalLessonsCompleted += record.completed_lessons;
      
      coursesData.push({
        title: record.Course.title,
        description: record.Course.description,
        completedLessons: record.completed_lessons,
        totalLessons: record.Course.total_lessons,
        duration: record.Course.duration
      });
    });

    // Calculate overall metrics
    const completedModules = coursesData.length;
    const totalModules = 8; // Assuming 8 core modules in your app
    const progressPercent = Math.min(Math.round((completedModules / totalModules) * 100), 100);

    const responseData = {
      name: req.user.name.split(' ')[0], // Get first name
      completedModules,
      totalModules,
      progressPercent,
      summary: [
        { value: "45%", icon: "📝", label: "Business Plan" }, // Hardcoded until you build a Business Plan model
        { value: totalLessonsCompleted, icon: "📚", label: "Lessons Done" },
        { value: aiSessionsCount, icon: "🤖", label: "AI Sessions" },
      ],
      courses: coursesData
    };

    res.status(200).json({ success: true, data: responseData });
  } catch (error) {
    next(error);
  }
};