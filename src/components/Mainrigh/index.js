import React from 'react'
import Siderecent from '../Siderecent'
import Sidetop from '../Sidetoppost'
import Title from '../Title'
import "./index.css";
function Mainright() {
  return (
    <div>
      <aside class="sidebar">
        <Sidetop />
        <div class="sidebar-widget">
          <Title />
          <Siderecent />
          <Siderecent />
          <Siderecent />
        </div>
      </aside>
    </div>
  )
}

export default Mainright
