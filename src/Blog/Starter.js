import React from 'react'
import notes1 from "./notes1.png"
import notes3 from "./notes3.png"
import { useNavigate } from 'react-router-dom'
function Starter() {
    let navigate=useNavigate()
  
  return (
    <div style={{}}>
<div style={{marginTop:"150PX",display:"flex" ,justifyContent:"center",gap:"50px"}}>
<button style={{boxShadow:"2px 2px 2px 2px"}} onClick={()=>
    navigate("library")
}>
<img src={notes1} width="200px" height="200px" />
<p><b>LIBRARY</b></p>
</button>
    <button onClick={()=>{
        navigate("creation")
    }} style={{boxShadow:"2px 2px 2px 2px"}}>


        <img src='https://tse3.mm.bing.net/th?id=OIP.usK4y63ZkTbP2btf4c94EwHaHa&pid=Api&P=0&h=180' ></img>
    
    <p><b>CREATE NOTE</b> </p>
    
    
    </button>
<button style={{boxShadow:"2px 2px 2px 2px"}} onClick={()=>
    navigate("library")
}>
    <img src={notes3} width="200px" height="200px" />
    <p><b>LIBRARY</b></p>
    </button>
</div>

<div>


</div>


    </div>
  )
}

export default Starter