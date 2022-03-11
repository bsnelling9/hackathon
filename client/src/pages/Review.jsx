import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
    <div className="review">
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
              placeholder="author name"
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
      </form>
    </div>
  );
};
export default Review;
