var express = require('express');
var router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const restaurantPath = require('path').join(__dirname, '../data/data.json');

// GET route for list of review
router.get('/', (req, res) => {
  // reads the JSON file and returns the data
  fs.readFile(restaurantPath, 'utf8', (err, data) => {
    const reviewData = JSON.parse(data);
    console.log(reviewData);
    return res.json(reviewData);
  });
});

// GET route for a review with a specific ID
router.get('/:id', (res, req) => {
  fs.readFile(restaurantPath, 'utf8', (err, data) => {
    const reviewData = JSON.parse(data);
    // look for the review with the id
    const foundReview = reviewData.find(
      (review) => review.id === req.params.id
    );
    // checks if review with id exists
    if (foundReview) {
      res.json(foundReview);
    } else {
      res.send('no such review with this id');
    }
  });
});

// POST route for a submitting a review
router.post('/', (req, res) => {
  // reads the JSON file
  fs.readFile(restaurantPath, 'utf8', (err, data) => {
    const reviewData = JSON.parse(data);
    const newReview = {
      id: uuidv4(),
      author: req.body.author,
      comment: req.body.comment,
    };
  });
  reviewData.push(newReview);
  // writes to the JSON file to add the newly uploaded video
  fs.writeFile(restaurantPath, JSON.stringify(reviewData), () => {
    res.json({
      message: 'data written to file successfully',
      data: reviewData,
    });
  });
});

module.exports = router;