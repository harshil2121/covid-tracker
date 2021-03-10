import React,{useState} from "react"
import axios from "axios"
import{
     Link,useHistory
} from "react-router-dom"

    function Login() {
       let history =  useHistory()
        const [username, setUsername]=useState("")
        const [password, setPassword]=useState("")
        

        const handleChange=(event)=>{
            if (event.target.name === "username"){
                setUsername(event.target.value)
            }
            if (event.target.name === "password"){
                setPassword(event.target.value)
            }
        }    

        const handleSubmit = (e) => {
            e.preventDefault();
            let payload = {
                username: username,
                password: password
            }
            
            axios.post("http://localhost:8081/Login",payload).then((result)=>{
                if(result.data.status === true){
                    //redirect dashboard
                    alert(result.data.message)
                    history.push("/desh")

                }else {
                    alert(result.data.message)
                }
            })
        }
        
        return(
            <div>
               Username: <input type = "text" id = "userName" name ="username" onChange={event=>handleChange(event)} /><br />
               Password: <input type = "password" id = "password" name="password" onChange={event=>handleChange(event)}/><br />

              <button type = "button" id ="login"  onClick={handleSubmit} >Login</button>
            <Link to ="/Signup"> Signup</Link>
                    
           </div>
        )                  
    }
export default Login;    