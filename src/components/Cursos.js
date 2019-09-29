import React from 'react';
import "../styles/styles.scss";
import style from '../styles/style.css';

//función JS ES6
//const mayorDeEdad = edad => edad >18;
//const persona = {"nombre": "daniel fragoso", "edad": 18};

const Curso = ({key, titulo, img, precio, profesor}) =>  (
    <article className="card df-left container" >
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={img} alt={titulo} />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2 df-card-bg">
            <h3 className="t6 s-mb-3 s-center">
                {titulo}
            </h3>
            {/*<h3 className="t5 s-mb-2 s-center">
              {`Autor ${persona.nombre}`}
            </h3>
            <h4>
                { mayorDeEdad(persona.edad) ? "Soy mayor de edad!" : "No soy mayor de edad."}
            </h4>*/}
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

export default Curso;