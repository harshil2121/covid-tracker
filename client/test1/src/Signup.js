import React,{useState} from "react"
import axios from "axios"
import{
    Link, 
} from "react-router-dom";


    function Signup() {
       
        const [username, setUsername]=useState("")
        const [password, setPassword]=useState("")
        const [email, setEmail]=useState("")

        const handleChange=(event)=>{
            if (event.target.name === "username"){
                setUsername(event.target.value)
            }
            if (event.target.name === "Password"){
                setPassword(event.target.value)
            }
            if (event.target.name === "email"){
                setEmail(event.target.value)
            }
            
        }    

        const handleSunbmit = (e) => {
            e.preventDefault();
            let payload = {
                username: username,
                Password: password,
                email: email

            }
            
            axios.post("http://localhost:8081/Signup",payload).then((result)=>{
                if(result.data.status === true){
                    alert(result.data.message)
                    
                }
                else{
                    alert(result.data.message)
                }
            })
        }
        
        return(<>
           <form>
               Email: <input type = "text" id ="email " name ="email" onChange={event=>handleChange(event)} /><br />
               Username: <input type = "text" id = "userName" name ="username" onChange={event=>handleChange(event)} /><br />
               Password: <input type = "Password" name="password" onChange={event=>handleChange(event)}/><br />

               <button type = "button" id ="submit" value = "Signup" onClick={e=>handleSunbmit(e)}>Signup</button>
                <Link to ="/"> Login</Link>
               
           </form>
           </>
        )          
    }
export default Signup;    