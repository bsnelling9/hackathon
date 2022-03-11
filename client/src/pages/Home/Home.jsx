import React, { Component } from 'react';
import Hero from '../../component/Hero/Hero';
import Content from '../../component/Content/Content';

export default class Home extends Component {
  render() {
    return (
      <section className="home">
        <Hero />
        <Content />
      </section>
    );
  }
}
