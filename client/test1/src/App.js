import logo from './logo.svg';
import './App.css';
import Login from "./Login"
import Signup from "./Signup"
import Deshboard from "./Deshboard"
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import Temprature from "./Temprature"
import Fect from "./Fect"
import covid from "./component/Covid"
import Covid from './component/Covid';

function App() {
  return (<>
    <div>
      {/* <Router> */}
        {/* <Link to="/">Home</Link>
        <Link to="/Signup">Signup</Link>
        <Link to="/desh">Deshboard</Link> */}

          {/* <Switch>
            <Route exact path="/">
                <Login />
            </Route>
                         
            <Route path="/Signup">
              <Signup />
            </Route>
                        
            <Route path="/desh">
              <Deshboard />
            </Route>
          </Switch> */}
    {/* </Router>             */}
    </div>
   <Covid />
   </>
  );
}
export default App;


// weather code 


// import React, { useState } from "react";
// import keys from "./Key";

// // import haze from "./haze.jpeg"
// // import coludy from "./coludy.jpeg"
// // import clear from "./clear.jpeg"
// // import rainy from "./rainy.jpeg"

// const api = {
//   key: keys.API_KEY,
//   base: keys.BASE_URL,
// };

// const dictonary={
//   Haze : <i class="fas fa-smog"></i>,
//   Cloudy :<i class="fas fa-cloud"></i>,
//   Rainy : <i class="fas fa-cloud-rain"></i>,
//   Clear : <i class="fas fa-cloud-sun"></i>
// }


// function App() {
//   const dateBuild = (d) => {
//     let date = String(new window.Date());
//     date = date.slice(3, 15);
//     return date;
//   };

//   const getImage=(weather)=>{
//    return dictonary[weather] || "not found"
//        }

//   const [query, setQuery] = useState("");
//   const [weather, setWeather] = useState({});
//   const search = (e) => {
//     if (e.key === "Enter") {
//       fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//         .then((res) => res.json())
//         .then((result) => {
//           setQuery("");
//           setWeather(result);
          
//           // if(result && result.weather && result.weather.length > 0){
//           //   setType(result.weather[0].main)
//           // }
          
//           console.log(result);
//         });
//     }
//   };

//   return (
//     <>
//       <div>
//         <div className="weather-temp">
//                 {weather.weather?
//               <>{Math.round(weather.main.temp)}°C &ensp;
//                 {
//                   getImage(weather.weather[0].main)
//                 }
//                 {
//                   weather.weather[0].main
//                 }
//                 </>  :null
//                 }
//         </div>                     
//         {/* if condition start */}
//         <div className="weather-input">
//           <input type="text" placeholder="Search..." className="search-bar" onChange={(e) => setQuery(e.target.value)}
//           value={query} onKeyPress={search} />
//         {typeof weather.main != "undefined" ? (
//         <div>
//               <div className="country-date">
//                 {weather.name}, {weather.sys.country}<br />
//                 {dateBuild(new Date())}
//               </div>
//         </div>
//         )
//         // else condition start 
//         : 
//         <div>
//         Data not Found
//         </div>
//       }
//         </div>
              
//       <footer> Harshil</footer>
//      </div>
//      </>
//   );
// }
// export default App;