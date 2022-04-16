import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E']}
            idx={15}
          />
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s
        </p>
        <p>
          , when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>
        <p>
          It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1"></div>
          <div className="face2"></div>
          <div className="face3"></div>
          <div className="face4"></div>
          <div className="face5"></div>
          <div className="face6"></div>
        </div>
      </div>
    </div>
  )
}

export default About
