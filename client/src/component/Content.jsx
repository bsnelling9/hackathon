import { Link } from 'react-router-dom';

function Content(props) {
  return (
    <div className='contentList'>
      <h2 className='contentList__title'>Reviews</h2>
      {/* <div>
        {props.reviews
        .filter((review) => review.id !== props.selectedReview.id)
        .map((review) => (
          <div className='reviewCard'>
            <Link className="reviewCard__link">
              <div className="reviewCard__img-box">
                <img
                  className="reviewCard__image"
                  src={review.image}
                  alt={review.name}
                ></img>
              </div>
              <div className="reviewCard__info">
                <p className="reviewCard__name">{review.name}</p>
                <p className="reviewCard__genre">{review.genre}</p>
              </div>
            </Link>
          </div>
        ))}
      </div> */}
    </div>
  )
}

 export default Content;