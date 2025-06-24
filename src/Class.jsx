// import React from 'react'
// import { useState } from 'react'



// const App = () => {

//   const [ movie, setMovie] =useState({
//     title: "Equalizer 3",
//     ratings: 7,
//   })

//   const handleClick = () => setMovie({ ...movie, ratings: 5})
  

//   return (
//     <section>
//       <h1>Title: {movie.title}</h1>
//       <p>Ratings: {movie.ratings}</p>
//       <button onClick={handleClick}>Change Rating</button>
//     </section>
//   )
// }

// export default App




// import { useState } from "react"

// const App = () => {

//   const [ movies, setMovies] = useState([
//     { id: 1, title: "Spider Man", ratings: 3},
//     { id: 2, title: "Superman", ratings: 6}
//   ])


//   const handleClick = () => {
//     setMovies (
//     movies.map((m) => (m.id === 1 ? { ...movies, title: 'John Wick 5'} : m))
//     )
//   }


//   return (
//     <section>
//       {movies.map(m => (
//         <li key={Math.random()}>{m.title}</li>
//       ))}

//       <button onClick={handleClick}>Change Name</button>

//     </section>
//   )
// }

// export default App


