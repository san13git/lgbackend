const User = require('../models/User');

const registerUser = async (req, res, next) => {
  const { name, email, password, mobile } = req.body;

  console.log('Received request:', req.body); // Log the received request body

  if (mobile.length !== 10) {
    return res.status(400).json({ error: 'Mobile number must be 10 digits.' });
  }

  const user = new User({ name, email, password, mobile });
  try {
    const savedUser = await user.save();
    console.log('User saved successfully:', savedUser); // Log the saved user details
    res.status(201).json({ message: 'User registered successfully', user: savedUser });
  } catch (error) {
    console.error('Failed to save user:', error); // Log any errors encountered
    next(error);
  }
};

module.exports = {
  registerUser,
};
