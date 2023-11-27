// pages/api/createUser.js
import connectDB from '../../lib/mongodb';
import User from '../../models/User';

export default async function handler(req, res) {
  await connectDB(); // Connect to MongoDB

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone } = req.body;

    // Create a new user
    const newUser = new User({
      name,
      email,
      phone,
    });

    // Save the user to the "users" collection
    const savedUser = await newUser.save();

    return res.status(201).json({ message: 'User created successfully', user: savedUser });
  } catch (error) {
    console.error('Error creating user:', error.message);
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}
