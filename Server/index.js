require('dotenv').config({ path: './Server/.env' });
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');
const User = require('./models/user.js');
const balKand = require('./models/balKand.js');
const verifyToken = require('./authMiddleware');

const app = express();

app.use(cors({
    origin: 'https://digital-ramayana-frontend.onrender.com',
    methods: 'GET, POST, OPTIONS',
    allowedHeaders: 'Content-Type, Authorization'
}));

app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://digital-ramayana-frontend.onrender.com');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.sendStatus(200);
});

app.use(bodyParser.json());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected successfully!"))
.catch(err => console.error("MongoDB connection error:", err));

app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token, userId: user._id });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/balKand/:id/:subId', verifyToken, async (req, res) => {
  try {
    const info = `1.${req.params.id}`;
    const subInfo = req.params.subId;

    if (subInfo.length === 2) {
      const slokas = await balKand.findOne({ id: `${info}.${subInfo}` });
      res.json(slokas);
    } else if (subInfo.length < 2) {
      return res.status(400).json({ error: 'Invalid subId' });
    } else {
      const [a, b] = subInfo.split("-");
      const slokas = await balKand.find({
        id: {
          $gte: `${info}.${a}`,
          $lte: `${info}.${b}`
        }
      });
      res.json(slokas);
    }
  } catch (error) {
    console.error('Error fetching slokas:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/balKand/:id', verifyToken, async (req, res) => {
  try {
    const info = Number(req.params.id);
    const slokas = await balKand.find({ sarga: info }).limit(5);
    res.json(slokas);
  } catch (error) {
    console.error('Error fetching slokas:', error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
