import LogoImage from '../../assets/images/test.jpg';
import './Content.scss';

const Content = ({ restaurantList }) => {
  const list = [
    { name: 'Restaurant 1', image: null },
    { name: 'Restaurant 2', image: null },
    { name: 'Restaurant 3', image: null },
    { name: 'Restaurant 4', image: null },
    { name: 'Restaurant 5', image: null },
    { name: 'Restaurant 6', image: null },
  ];
  return (
    <section className="content">
      <div className="content__container">
        <h2 className="content__title">Restaurants</h2>
        <ul className="content__list">
          {list.map((restaurant, i) => {
            return (
              <li className="content__item" key={i}>
                <img
                  className="content__image"
                  alt={restaurant.name}
                  src={LogoImage}
                ></img>
                <p className="content__name">{restaurant.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Content;
