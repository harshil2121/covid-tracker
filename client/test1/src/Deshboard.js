import React,{useState} from "react"
import axios from "axios"
import{
    Link, useHistory
} from "react-router-dom";

    function Deshboard(){
        let history = useHistory()
        
        const [input,setInput]=useState()
        
        const handleSubmit= (e)=>{
            e.preventDefault()
        history.push("/")
        }    

        return (
            <div> 
                <form>
                    <h3>Hello... Wellcome to Deshboard</h3>
                     <button value = "Logout" onClick= {e=>handleSubmit(e)}>Logout</button>

                    {/* <Link to ="/Login">Logout </Link> */}
                </form>
            </div>
        )
    }
export default Deshboard;
