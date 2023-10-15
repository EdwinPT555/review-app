import express from 'express';
import { reviews } from '../reviewsData';

const reviewController = express.Router();

reviewController.post('/get-all', (req, res) => {
  try {
    res.json({
      message: 'Review fetched successfully',
      success: true,
      reviews: reviews
    })
  } catch (error) {
    res.json({
      message: 'Unable to fetch reviews',
      success: false,
    })
  }
});

reviewController.post('/save', (req, res) => {
  const { user_name, user_experience_rating, improvements_suggested,
    phone, app_usage_frequency, main_app_goal, birthday } = req.body;
  try {
    const newData = {
      user_name,
      user_experience_rating,
      improvements_suggested,
      phone,
      app_usage_frequency,
      main_app_goal,
      birthday,
      id: `${reviews.length + 1}`,
      posted_date: new Date().toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })
    };
    reviews.push(newData);
    res.json({
      message: 'Review saved successfully',
      success: true,
      review: newData
    })
  } catch (error) {
    res.json({
      message: 'Unable to save review',
      success: false,
    })
  }
});

export default reviewController;