import React from 'react'
import './Hero.css'
import arrowBtn from '../../assets/arrow_btn.png'
import pauseIcon from '../../assets/pause_icon.png'
import playIcon from '../../assets/play_icon.png'

const Hero = ({ heroData, heroCount, setHeroCount, playStatus, setPlayStatus }) => {


  return (
    <div className='hero'>

      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explorer">
        <p>Explore the fetures</p>
        <img src={arrowBtn} alt="arrow button" />
      </div>
      <div className="hero-dot-play">
        <ul className='hero-dots'>
          <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? 'hero-dot orange' : 'hero-dot'}></li>
          <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? 'hero-dot orange' : 'hero-dot'}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? 'hero-dot orange' : 'hero-dot'}></li>
        </ul>
        <div className="hero-play">
          <img src={playStatus ? pauseIcon : playIcon} alt="play button" onClick={() => setPlayStatus(!playStatus)} />
          <p>See the video</p>
        </div>

      </div>
    </div>
  )
}

export default Hero
