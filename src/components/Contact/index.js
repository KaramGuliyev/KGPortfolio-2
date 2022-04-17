import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_v5qq1p8', 'template_e30cw5r', refForm.current, '2U78o4LEDU9vRpGEX')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  }


  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', 'M', 'E']}
              idx={15}
            />
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input type="email" name="email" placeholder="E-Mail" required />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder="Message" type="text" name="message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
