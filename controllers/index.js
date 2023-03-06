const router = require('express').Router();
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const apiRoutes = require('./api');

const loginRoutes = require('./login-routes');
const signupRoutes = require('./signup-routes');

router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);


module.exports = router;
