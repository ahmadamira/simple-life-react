import React from 'react'
import Contreading from '../Contreading'
import Dateandcomm from '../Dateandcomm'
import Para from '../Paragraph'
import Title from '../Title'
import "./index.css";
function Post() {
  return (
    <div>
      <article class="article-recent">
        <div class="article-recent-main">
          <Title />
          <Para />
          <Contreading />
        </div>
        <div class="article-recent-secondary">
          <img src="img/food.jpg" alt="" class="article-image" />
          <Dateandcomm />
        </div>
      </article>
    </div>
  )
}

export default Post
