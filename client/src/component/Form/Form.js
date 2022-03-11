import './Form.scss';
import { useState } from 'react';
import axios from 'axios';

const Form = ({ currentRestaurant, setCurrentRestaurant }) => {
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const postNewComment = async () => {
      const { data } = await axios.post(
        `http://localhost:8000/${currentRestaurant.id}`,
        {
          author,
          comment,
          id: currentRestaurant.id,
        }
      );
      console.log(data.data);
      setCurrentRestaurant({ ...data.data });
    };
    postNewComment();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__info">
        <label className="form__label">
          Author
          <input
            className="form__input form__input--author"
            type="text"
            name="author"
            placeholder="Author name"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          ></input>
        </label>
        <label className="form__label">
          Review
          <textarea
            className="form__comment"
            type="text"
            name="comment"
            placeholder="Add a review here"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          ></textarea>
        </label>
      </div>
      <button className="form__submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
