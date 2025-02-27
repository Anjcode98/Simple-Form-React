import React, { useState } from "react";

function App() {

  const [input, setInput] = useState("")
  const [headingText, setHeadingText] = useState()
  const [isMouseOver, setMouseOver] = useState(false)

  //handle the click event and add the input value to h1 tag
  function handleClick(event){
    setInput(headingText)

    //to prevent auto refresh the form
    event.preventDefault()
  }

  function handleMouseOver(){
    setMouseOver(true)
  }

  function handleMouseOut(){
    setMouseOver(false)
  }

  //catch the input value and add ot to headingtext variable
  function handleChange(event){
    console.log(event.target.value)
    setHeadingText(event.target.value)
  }

 

  return (
    <div className="container">
      <h1>Hello {input}</h1>

      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text" 
          placeholder="What's your name?"
          value={headingText} />

        <button 
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style = {{backgroundColor: isMouseOver ? "black" : "white"}}>

          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
