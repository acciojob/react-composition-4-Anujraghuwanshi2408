import React , {useState} from "react";


const Form = ({Fields , handleSubmit}) => {
  const [formValue ,  setFormValue] = useState({})
   
//  function handleInputChanges(e){
//     console.log(e.target)
//     const { name, value } = e.target;
//     console.log(name)
//     console.log(value)
//     // (e)=>setFormValue(...formValue , element.label = e.target.value)
//  }

function handleInput(e , key){
    setFormValue({...formValue ,  [key] :   e.target.value})
}
  function handleForm(e){
   e.preventDefault();
   handleSubmit(formValue)
  }
    return(
        <form onSubmit={handleForm}>
           {
           Fields.map(element =>(
                  <div>

                        <label for = {element.name}>{element.label}</label>  
                         <input type={element.type} onChange={e => handleInput(e , element.name)}  /> 
                  </div>
                        
              
           )
           )}
           <button type="submit">Submit</button>
        </form>
    )

}

export default Form 