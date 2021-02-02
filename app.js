const express = require('express');
const bodyParser = require("body-parser");
const db = require('./models');

const app = express();
const port = process.env.DB_HOST || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const authRouter = require('./routes/authRouter');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouoter');
const categoryRouter = require('./routes/categoryRouter');
const orderRouter = require('./routes/orderRouter')

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/products', productRouter);
app.use('/category', categoryRouter);
app.use('/order', orderRouter);

db.sequelize.sync().then(()=>{
    app.listen(port, () => {
        console.log(`listening on: http://localhost:${port}`);
    })
})