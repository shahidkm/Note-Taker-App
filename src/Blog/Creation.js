import React, { useState } from 'react'
import { addblogs } from './Slice';
import {useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom';

function Creation() {
    let navigate=useNavigate()
    let dispatch=useDispatch()
    let [title,settitle]=useState("")
    let[color,setcolor]=useState("")

    console.log(title);
    let [content,setcontent]=useState("")
    console.log(content);
    let handleAdd=()=>{
      if(title,content!==""){
dispatch(addblogs({title,content,color}))
navigate("/library")}
else{
    alert("write title and content")
}

    }

    
    
    
  return (
    <div  style={{display:'flex',justifyContent:'center'}}>


       

<div style={{marginTop:"100px",alignItems:"center",borderRadius:"20px",alignItems:"center",width:"400px",height:"400px",backgroundColor: "#C5D3E8" ,textAlign:"center",boxShadow:"2px,2px,2px,2px"}}>
<h1>CREATE NOTE</h1>

<label>Title</label><br></br>
<input type='text' value={title} onChange={(e)=> settitle(e.target.value.trim())}/><br></br>

<label>Content</label><br></br>
<textarea cols={50}  rows={10} value={content} onChange={(e)=>setcontent(e.target.value.trim())}/><br></br>
<label>Colour</label><br></br>
<input type='color'  onChange={(e)=>{
setcolor(e.target.value)
}}/><br>
</br>

    <button onClick={handleAdd}>make</button>



</div>





    </div>
  )
}

export default Creation