import React, {useState} from "react"

    function Temptature(){
    
        const [input, setInput]=useState(0)
        const [type,setType] = useState("Fahrenheit")
        const [result,setResult] = useState(0)

        // function Fahrenheit(celcius){
        //     return(Fahrenheit - 32)* 5 / 9
        // }
        function Fahrenheit(celcius){
            return(celcius - 32)* 5 / 9
        }

        // function Celcius(fahrenhiet){
        //     return(Celcius * 9 / 5) + 32
        // }
        function Celcius(fahrenhiet){
            return(fahrenhiet * 9 / 5) + 32
        }

        function Convert(){
            let calculate = 0
            if(type === "Fahrenheit")
            calculate = Fahrenheit(input)
            else
            calculate = Celcius(input)

            setResult(calculate)
        }

        const handleChange=(ev)=>{
            setInput(ev.target.value)
        }
    
        const handleSubmit=(ev)=>{
            setType(ev.target.value)
        }
           
        return(<>
                <input type="number" name="input" onChange={(event)=>handleChange(event)}/>
                    <select onClick={(ev)=>handleSubmit(ev)} >
                        <option value="Fahrenheit">Fahrenheit</option>
                        <option value="celcius">celcius</option>     
                    </select><br /><br />  
                <button name="calculate" onClick={Convert}>Calculate</button>
            
            {result}
        </>)    
    }    
export default Temptature;    
