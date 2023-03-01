import './App.css';
import axios from 'axios'


function App() {
 
   
   const datacall=async()=>{
    const {data}=await axios.post("/token");
    localStorage.setItem("token",data.token)

   }


   const getToken=async()=>{
    const token=localStorage.getItem("token");
    
    // const tok=JSON.stringify(token);
    // console.log(tok);
    const {data}=await axios.post("/getToken",{token});
    console.log(data);
   }

  return (
    <div className="App">
      hello
      <button onClick={()=>datacall()}>token</button>
      <button onClick={()=>getToken()}>getToken</button>
    </div>
  );
}

export default App;
