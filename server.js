const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


// WORKING ON THSE TWO
const routes = require('./controllers');
const helpers = require('./utils/helpers');

// PORT 3001
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });


// Session middleware
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Import routes
const homeRoutes = require('./controllers/home-routes');
const dashboardRoutes = require('./controllers/dashboard-routes');
const apiRoutes = require('./controllers/api');
// Use imported routes
app.use('/', homeRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/api', apiRoutes);

// Handlebars middleware
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// set up Routes
app.use(routes);

// Connect to database and start server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
