import React from 'react'
import "./styles/styles.scss";
import Banner from './components/banner';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Formulario from './Screens/formulario';
import CourseGrid from "./Screens/CourseGrid";
import Course from './Screens/Course';
//import logo from './logo.svg';
//import './App.css';


const App = () => 
(
  <Router>
      <Switch>
        <Route path="/" exact component={ Banner }/>
        <Route path="/cursos/:id" exact component={ Course }/>
        <Route path="/cursos" exact component={ CourseGrid }/>
        <Route path="/formulario" exact component={
            ()=> <Formulario name="Página de contacto"/>
        }/>
        <Route component={()=> (
            <div className="ed-grid">
                <h1>Error 404</h1>
                <span>Página no en contrada</span>
            </div>
        )}/>
      </Switch>
  </Router>
);

export default App;
