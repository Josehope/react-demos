import { useState } from "react"
import "../style.css"



const Testimonials = () => {

  const [ currentIndex, setCurrentIndex ] = useState(0)

  
  const testimonials = [
    {
      quote: "This is the best product I have ever used",
      author: "Jane Doe"
    },

    {
      quote: "I highly recoomend this product to everyone",
      author: "John Smith"
    },

    {
      quote: "This product has completely changed my life",
      author: "Emily Johnson"
    }
  ]


  const handleNextClick = () => {

    setCurrentIndex((currentIndex + testimonials.length -1) % testimonials.length)
  }

  const handlePrevClick = () => {

    setCurrentIndex((currentIndex + 1) % testimonials.length )
  }


  return (
    
    <div className="testimonials" >
      <div className="testimonial-quote">
        {testimonials[currentIndex].quote}
      </div>

    
    <div className="testimonials-author">
      - {testimonials[currentIndex].author}
    </div>


    <div className="testimonials-nav">
      <button onClick={handlePrevClick}>Prev</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
        
    </div>
  )
}

export default Testimonials