import React from 'react'
import { Link } from 'react-router-dom';
import GetText from './GetText';

const Homepage = (props) => {
  console.log(props)
  return (
    <div>

      <h1>This is home page</h1>
      <h1>{props.value}</h1>

      <GetText text=" home page" />

    </div>
  )
}

export default Homepage
