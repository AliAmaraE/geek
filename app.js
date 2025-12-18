// 1. Imports
const express = require('express');
const mongoose = require('mongoose');
const User = require('./user');
const path = require('path');

// 2. Create app
const app = express();

// 3. View Engine (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 4. Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// 5. MongoDB connection
mongoose.connect(
  "mongodb+srv://aliamaraa01_db_user:E1RsTQ8k5U3A2Vfa@cluster0.erixzwb.mongodb.net/?appName=Cluster0"
)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('MongoDB connection error:', err));

// 6. Routes

// 🔹 Show login page on start
app.get('/', (req, res) => {
  res.render('login'); // login.ejs
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Login attempt:', { email, password });

    // const user = await User.findOne({ email: email.toLowerCase() });
    // console.log('User found:', user ? 'Yes' : 'No');

    // if (!user) {
    //   return res.json({ success: false, message: 'User does not exist' });
    // }

    // if (user.password !== password) {
    //   console.log('Password mismatch:', { provided: password, stored: user.password });
    //   return res.json({ success: false, message: 'Incorrect password' });
    // }

    console.log('Login successful, redirecting to /products');
    // ✅ LOGIN SUCCESS → REDIRECT
    res.json({ success: true, message: 'Login successful', redirect: '/products' });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});


// 🔹 Create new user (register)
app.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// 🔹 Search users
app.get('/users', async (req, res) => {
  try {
    const { search } = req.query;

    const users = await User.find({
      name: { $regex: search || '', $options: 'i' }
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});


// ////////////////////////Products page
const Product = require('./product'); // import product model

// Products page (list)
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find(); // fetch all products from DB
    res.render('products', { products });
  } catch (error) {
    res.status(500).send('Error fetching products');
  }
});

// Product detail page
app.get('/products/:id', async (req, res) => {
  try {
    console.log('Fetching product with ID:', req.params.id);
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send('Product not found');
    res.render('productDetail', { product });
  } catch (error) {
    res.status(500).send('Error fetching product');
  }
});

app.post('/products', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({ message: 'Product created', product: newProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



/////////////////////////////////// 7. Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});
