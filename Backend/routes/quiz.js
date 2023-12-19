const express = require('express');
const quiz = express.Router();
const {Quiz} = require('../models/quiz_model');

// Create Quiz
quiz.post('/', async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).json({ message: 'Quiz created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Active Quiz
quiz.get('/active', async (req, res) => {
  try {
    const now = new Date();
    const activeQuiz = await Quiz.findOne({ startDate: { $lte: now }, endDate: { $gte: now } });
    res.json(activeQuiz);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Quiz Result
quiz.get('/:id/result', async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    // Implement logic to calculate and return quiz result
    res.json({ correctAnswer: quiz.rightAnswer, additionalInfo: '...' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Quizzes
quiz.get('/all', async (req, res) => {
  try {
    const allQuizzes = await Quiz.find();
    res.json(allQuizzes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = {quiz};
