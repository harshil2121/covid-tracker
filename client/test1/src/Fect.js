import React, {useState} from "react"

    function Fect(){
        const [input,setInput]=useState(0)
        const [result,setResult]=useState(0)
        
        function factorial(input){
            if(input === 0){
                return 1  
            }
            else{
                return input * factorial(input-1)   
            } 
        }

        const handleChange=(e)=>{
            setInput(e.target.value)
        }
        const handleSubmit=(e)=>{
            setResult(factorial(input))
        }
        
        return(
            <>
            <input type="number" name="input" onChange={(e)=>handleChange(e)} />
            <button name="calculate"  value="factorial" onClick={(e)=>handleSubmit(e)}>Calculate</button>
            {result}
            
            </>
        )

    }
export default Fect;    