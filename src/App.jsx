import Accordion from "./component/Accordion"
import Calculator from "./component/Calculator"
import Form from "./component/Form"
import HiddenSearchBar from "./component/HiddenSearchBar"
import Meals from "./component/Meals"
import Testimonials from "./component/Testimonials"
import Todo from "./component/Todo"
import ToggleBackgroundColor from "./component/ToggleBackgroundColor"
// import { accordionData } from "./utils/content"


const App = () => {


  return (

    <div>
      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <Meals /> */}
      {/* <Calculator /> */}
      {/* <ToggleBackgroundColor /> */}
      {/* < HiddenSearchBar /> */}
      {/* <Testimonials /> */}
      
      {/* <div className="accordion">
        { accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content}/>
        ))} */}
      <Form />
      
    </div>
  )
}

export default App