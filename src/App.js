import React from "react";
import './App.css';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Starter from "./Blog/Starter";
import Creation from "./Blog/Creation";
import { Provider } from "react-redux";
import { Store } from "./Blog/Store";
import Library from "./Blog/Library";
function App() {
  return (
    <div >
<Provider store={Store}>
<Router>
  <Routes>
    <Route path="/" element={<Starter/>}/>
    <Route path="creation" element={<Creation/>}/>
    <Route path="library" element={<Library/>}/>
  </Routes>
</Router>

</Provider>


    </div>
  );
}

export default App;
