import React from 'react';
import {NavLink, Link} from "react-router-dom";
import logo from '../styles/logo.svg';

const MainMenu = ()=>
{
    return(
        <header>
            <div className="ed-grid s-grid-5 lg-grid-4">
                <div className="s-cols-4 lg-cols-2 s-cross-center">
                    <Link to="/">
                        {/*<img className="main-logo" src="https://ed.team/static/images/logo.svg"/>*/}
                        <img className="main-logo" src={logo}/>
                    </Link>
                </div>
                <div className="s-grid-1 lg-cols-4 s-cross-center s-main-end">
                    <nav className="main-menu" id="main-menu">
                        <ul>
                            <li>
                                <NavLink exact to="/" activeClassName="activo">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cursos">Cursos</NavLink>
                            </li>
                            <li>
                                <NavLink to="/formulario">Formulario</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
                </div>
            </div>
        </header>
    );
}

export default MainMenu
