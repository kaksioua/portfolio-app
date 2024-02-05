import React from 'react'
import './works.css'
import porfolio1 from '../../assets/portfolio-1.png'
import porfolio2 from '../../assets/portfolio-2.png'
import porfolio3 from '../../assets/portfolio-3.png'
import porfolio4 from '../../assets/portfolio-4.png'
import porfolio5 from '../../assets/portfolio-5.png'
import porfolio6 from '../../assets/portfolio-6.png'
const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">Porfolio</h2>
      <span className="workDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        consequuntur impedit atque minus, iste voluptas dolorum corrupti,
        tenetur quos aliquam laboriosam fugit nisi rerum architecto
        exercitationem at, illo id odio.
      </span>
      <div className="worksImgs">
        <img src={porfolio1} alt="" className="worksimg" />
        <img src={porfolio2} alt="" className="worksimg" />
        <img src={porfolio3} alt="" className="worksimg" />
        <img src={porfolio4} alt="" className="worksimg" />
        <img src={porfolio5} alt="" className="worksimg" />
        <img src={porfolio6} alt="" className="worksimg" />
      </div>
      <button className="worksbtn">See More</button>
    </section>
  )
}

export default Works
