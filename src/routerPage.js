import React from 'react'
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import CreateButton from './Note Taker/createPage';
import Details from './Note Taker/Details';
function RouterPage() {
  return (
    
<Router>

<Routes>
{/* <Route path='/' element={<CreateButton/>}/> */}
<Route path='details' element={<Details/>}/>
</Routes>


</Router>


    
  )
}

export default RouterPage;