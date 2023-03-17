import React from 'react'
import Contreading from '../Contreading'
import Dateandcomm from '../Dateandcomm'
import Para from '../Paragraph'
import Title from '../Title'
import "./index.css";
function Mainpost() {
  return (
    <div>
      <article class="article-featured">
        <Title />
        <img
          src="img/life.jpg"
          alt="simple white desk on a white wall with a
            plant on the far right side"
          class="article-image"
        />
        <Dateandcomm />
        <Para />
        <Contreading />
      </article>
    </div>
  )
}

export default Mainpost
