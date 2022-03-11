import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Review.scss';
import Form from '../../component/Form/Form';
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

  console.log(currentRestaurant);

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
        <Form
          currentRestaurant={currentRestaurant}
          setCurrentRestaurant={setCurrentRestaurant}
        />
        <ul className="review__comments">
          {currentRestaurant &&
            currentRestaurant.reviews.map((review, i) => {
              return (
                <li className="review__box" key={i}>
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
