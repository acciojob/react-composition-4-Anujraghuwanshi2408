
import React from "react";
import './../styles/App.css';
import Form from "./Form";

const Fields = [
    {name: "name" , type: "text", label: "Name" },
    {name: "email" , type: "email", label: "Email" },
    {name: "password" , type: "password", label: "Password" }
]

const App = () => {

  function handleSubmit(value){
    console.log(value)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <Form Fields = {Fields} handleSubmit={handleSubmit} ></Form>
    </div>
  )
}

export default App
