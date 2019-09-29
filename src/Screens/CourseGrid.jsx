import React from 'react';
import Curso from "../components/Cursos";

const cursos = [
    {
        "id": 1,
        "titulo": "Curso de react",
        "img": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
        "precio": "300 MXN",
        "profesor": "Alberto quiroga"
    },
    {
        "id": 2,
        "titulo": "Curso de Android",
        "img": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
        "precio": "300 MXN",
        "profesor": "Jose dimás lujan"
    },
    {
        "id": 3,
        "titulo": "Curso de flutter",
        "img": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
        "precio": "350 MXN",
        "profesor": "Ana code"
    },
    {
        "id": 4,
        "titulo": "Curso de Dart",
        "img": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
        "precio": "250 MXN",
        "profesor": "Fernando Herrera"
    }
];

const CourseGrid = () =>{
    return(
        <div className="ed-grid m-grid-4">
            {
                cursos.map( (c) => <Curso key={c.id} id={c.id} titulo={c.titulo} img={c.img} precio={c.precio} profesor={c.profesor} /> )
            }
        </div>
    );
};

export default CourseGrid;
