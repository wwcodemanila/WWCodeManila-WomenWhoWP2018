import React from 'react';
import Banner from '../assets/images/banner.png';
import {
   } from 'reactstrap';

export default class Example extends React.Component {
  
  render() {
    return (
      <div>
        <img src={Banner} width="100%"/>
      </div>
    );
  }
}