import LogoImage from '../../assets/images/test.jpg';
import { Link } from 'react-router-dom';
import './Content.scss';
import axios from 'axios';

import React, { Component } from 'react';

export default class Content extends Component {
  state = {
    restaurantArray: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { data } = await axios.get('http://localhost:8000/');
    this.setState({ restaurantArray: data });
  };
  render() {
    return (
      <section className="content">
        <div className="content__container">
          <h2 className="content__title">Restaurants</h2>
          <ul className="content__list">
            {this.state.restaurantArray &&
              this.state.restaurantArray.map((restaurant, i) => {
                console.log(restaurant.image);
                return (
                  <li className="content__item" key={i}>
                    <img
                      className="content__image"
                      alt={restaurant.name}
                      src={restaurant.image ? restaurant.image : LogoImage}
                    ></img>
                    <p className="content__name">{restaurant.name}</p>
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
    );
  }
}
