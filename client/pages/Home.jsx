import React, { Component } from 'react';
import Hero from '../src/component/Hero';
import Content from '../src/component/Content';


export default class Home extends Component {
  render() {
    return (
        <section className='home'>
            <Hero />
            <Content />
        </section>
    )
  }
}
