import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Message from './function';
import Name from './class';
import My from './myweb';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
 

  

ReactDOM.render(
   
      <div>
        <Router>
           <Link to="/">Message</Link>
           <Link to="/Name">Name</Link>
           <Link to="/My">My</Link>
           <Route exact path="/" component={Message} />
           <Route path="/Name" component={Name} />
           <Route path="/My" component={My} />
          
       </Router>
       
     </div>,
  document.getElementById('root')
);


reportWebVitals();
