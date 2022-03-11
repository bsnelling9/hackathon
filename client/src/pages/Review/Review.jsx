import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Review.scss';
const Review = () => {
  const { id } = useParams();
  const [currentRestaurant, setCurrentRestaurant] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000/${id}`);
        setCurrentRestaurant(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="review">
      <div className="review__container">
        <div className="review__card">
          <img
            className="review__img"
            src={currentRestaurant && currentRestaurant.image}
            alt="thumbnail"
          ></img>
          <div className="review__textbox">
            <h2 className="review__title">
              {currentRestaurant && currentRestaurant.name}
            </h2>
          </div>
        </div>
        <form className="form">
          <div className="form__info">
            <label className="form__label">
              Author
              <input
                className="form__input form__input--author"
                type="text"
                name="author"
                placeholder="Author name"
              ></input>
            </label>
            <label className="form__label">
              Review
              <textarea
                className="form__comment"
                type="text"
                name="comment"
                placeholder="Add a review here"
              ></textarea>
            </label>
          </div>
          <button className="form__submit" type="submit">
            Submit
          </button>
        </form>

        <ul className="review__comments">
          {currentRestaurant &&
            currentRestaurant.reviews.map((review) => {
              return (
                <li className="review__box">
                  <p className="review__comment">{review.comment}</p>
                  <p className="review__author"> - {review.author}</p>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};
export default Review;
