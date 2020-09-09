const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs'); //Set/Register the view engine
app.set('views', 'views'); //Set the view to /views in the path that has the HTML files. Not needed since by default it uses /views

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Pahina not found'});
});

app.listen(3000);
