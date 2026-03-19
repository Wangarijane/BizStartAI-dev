const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progress.controller');
const authenticate = require('../middleware/auth.middleware');

// Protect route with auth middleware
router.get('/', authenticate, progressController.getUserDashboard);

module.exports = router;