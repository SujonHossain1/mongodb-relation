const express = require('express');
const mongoose = require('mongoose');


// App Config
const app = express();

// middleware
const middleware = [
    express.urlencoded({ limit: '15mb', extended: true }),
    express.json({ limit: '15mb' })
]
app.use(middleware);

// import routes
const categoryRoute = require('./routes/category');
const subCategoryRoute = require('./routes/subCategory');
const productRoutes = require('./routes/product');

// Application all routs --- 
app.use('/api/categories', categoryRoute,);
app.use('/api/sub-categories', subCategoryRoute);
app.use('/api/products', productRoutes);





app.get('/', (req, res) => {
    res.send({
        message: 'Success',
    })
})



// Database Connection
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
    const port = server.address().port;
    console.log(`SERVER IS RUNNING ON PORT ${port} AND SERVER MODE ON ${process.env.NODE_ENV}`);

    if (process.env.NODE_ENV === 'production') {
        console.log('Live Database Connection Successfully Done');
    } else {
        mongoose.connect('mongodb://localhost:27017/mongodb-relationship', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
            .then(() => console.log('Local Database Connection Successfully Done'))
            .catch(err => console.error(err))
    }
})