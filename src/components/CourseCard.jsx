import React from 'react';
import "../styles/styles.scss";
import {Link} from 'react-router-dom';

//función JS ES6
//const mayorDeEdad = edad => edad >18;
//const persona = {"nombre": "daniel fragoso", "edad": 18};

const Curso = ({ id, titulo, img, precio, profesor}) => {

    return (
        <article className="card df-left container">
            <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <Link to={`/cursos/${id}`}>
                    <img src={img} alt={titulo}/>
                </Link>
            </div>
            <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2 df-card-bg">
                <h3 className="t6 s-mb-3 s-center">
                    {titulo}
                </h3>
                <div className="s-mb-2 s-main-center">
                    <div className="card__teacher s-cross-center">
                        <span className="small">{profesor}</span>
                    </div>
                </div>
                <div className="s-main-center">
                    <a className="button--ghost-alert button--tiny">{`$ ${precio}`}</a>
                </div>
            </div>
        </article>
    );
}

export default Curso;