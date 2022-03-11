import React, { Component } from 'react';
import Hero from '../component/Hero';
import Content from '../component/Content';


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
