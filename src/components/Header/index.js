import React from 'react'
import Headerleft from '../Headerleft';
import Headerright from '../Headerright';
import "./index.css";

const Headercom = () => {
  return (
    <div>
      <header>
        <div class="container container-flex">
          <Headerleft />
          <Headerright />
        </div>
      </header>
    </div>
  )
}

export default Headercom;
