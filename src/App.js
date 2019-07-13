import React, { Component } from 'react'
import {BrowserRouter as Router,Route, Link} from "react-router-dom";
import PostFrontToBack from './Component/postWithUpload_frontToBack';
import ListTous from './Component/ListTous'
import AfficheProfil from './Component/AfficheProfil'
import 'bootstrap/dist/css/bootstrap.css';
 class App extends Component {
  render() {
    return (
      <div>
        <Router>
      <div>
<ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" href="k"><Link to="/">Formulaire</Link></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="l"><Link to="/profil">List</Link></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="l"><Link to="//profil/:profilId">ListId</Link></a>
  </li>
</ul>
    

        <hr />
        <div><Route path="/" exact component={PostFrontToBack} /></div>
        <Route path="/profil" component={ListTous} />
        <Route path="/profil/:profilId" component={AfficheProfil} />
        <hr/>

      </div>
    </Router>
    </div>    
    )
  }
}
export default App;