const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./user.model");
const Course = require("./course.model");

const UserProgress = sequelize.define("UserProgress", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  completed_lessons: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  }
}, {
  tableName: "user_progress",
  timestamps: true,
});

// 🔗 Relationships
User.hasMany(UserProgress, { foreignKey: "user_id", onDelete: "CASCADE" });
UserProgress.belongsTo(User, { foreignKey: "user_id" });

Course.hasMany(UserProgress, { foreignKey: "course_id", onDelete: "CASCADE" });
UserProgress.belongsTo(Course, { foreignKey: "course_id" });

module.exports = UserProgress;