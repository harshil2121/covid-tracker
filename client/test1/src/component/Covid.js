import React, {useState,useEffect} from "react"
import axios from "axios"
import Chart from "./Chart"
import Animation from "./Animation"
import Multiline from "./Multiline"


function Covid(){

    const [active, setActive]=useState(0)
    const [death, setDeath]=useState(0)
    const [recover, setRecover]=useState(0)
    const [total, setTotal]=useState(0)
    const [regionData, setRegionData]=useState([])
    const [last,setLast]=useState([])
    const [fully,setFully]=useState([])


    useEffect( ()=>{
        axios.get("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true")
        .then((result)=>{
            setActive(result.data.activeCases)
            setDeath(result.data.deaths)
            setRecover(result.data.recovered)
            setTotal(result.data.totalCases)
            setRegionData(result.data.regionData)
        })        
    },[])
    
    const handleChange=(ev)=>{
        setLast(ev.target.value)
        const filter=regionData.find(i=>i.region === ev.target.value)
         setFully(filter)
         console.log(fully)
    }
    
    return(
        <div>
            <div className="row">
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-div">
                            <h4> Active Cases</h4> 
                            {active} 
                        </div>
                    </div>     
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-div">
                            <h4> Death </h4>
                            {death}  
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-div">
                             <h4> Recovered </h4>
                             {recover}  
                        </div>
                    </div>
                </div> 
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-div">
                            <h4> Total Cases </h4>  
                            {total}
                        </div>
                    </div>         
                </div>
            </div>
            <div className="drop">
                <select onChange={(ev)=>handleChange(ev)}>
                    <option>select</option>
                        {regionData.length>  0 ? regionData.map((region,i)=>{
                        return <option key={i} value={region.region}>{region.region}</option>
                        })
                        :
                        null}
                </select>
            </div><br />

            {fully?

            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-div">
                            <h4> Total Infected</h4> 
                            {fully.totalInfected}  
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-div">
                            <h4> Recovered </h4>
                            {fully.recovered}   
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-div">
                            <h4> Deceased </h4>
                            {fully.deceased}   
                        </div> 
                    </div>
                </div>
            </div>
            :null
            
            }<br />
            {/* <Chart active={active} deceased={fully?fully.deceased:death} death={death}  recover={recover} recovered={fully.recovered} totalInfected={fully.totalInfected} /><br /> */}
            {/* <Animation active={active} deceased={fully?fully.deceased:death}  recovered={fully?fully.recovered:recover} totalInfected={fully?fully.totalInfected:total} /> */}
            <Multiline active={active} deceased={fully?fully.deceased:null} death={death} recover={recover} recovered={fully?fully.recovered:null} total={total} totalInfected={fully?fully.totalInfected:null}/>  
            </div>
    )
}
export default Covid;