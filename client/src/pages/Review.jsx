import React, { Component } from 'react';

class Review extends Component {
  render() {
    return (
      <div className='review'>
        <h2 className='review__title'>Meesa Review</h2>
        <img className='review__img' src="" alt="thumbnail"></img>
        <form className='form'>
          <div className='form__info'>
            <label className='form__label'>Author
              <input className='form__input form__input--author' type="text" name="author" placeholder='author name'></input>
            </label>
            <label className='form__label'>Review
              <textarea
              className='form__comment' type="text" name="comment" placeholder='Add a review here'></textarea>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default Review;

/*
RESTAURANT INFO:
id,
image,
name,
author,
date, (of review)
location,
genre,
rating, (5 stars)
description,
*/