import React from 'react';
import Curso from "../components/CourseCard";

const cursos = [
    {
        "id": 1,
        "titulo": "Curso de react",
        "img": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20Rutas%20manejo%20de%20estados%20%281%29.png",
        "precio": "300 MXN",
        "profesor": "Alberto quiroga"
    },
    {
        "id": 2,
        "titulo": "Curso de Android",
        "img": "https://drupal.ed.team/sites/default/files/styles/medium/public/imagenes-cdn-edteam/2019-01/Android%20desde%20Cero.png?itok=ZxhXYEO2",
        "precio": "300 MXN",
        "profesor": "Jose dimás lujan"
    },
    {
        "id": 3,
        "titulo": "Curso de flutter",
        "img": "https://drupal.ed.team/sites/default/files/styles/medium/public/imagenes-cdn-edteam/2018-12/Flutter.png?itok=MpF412ML",
        "precio": "350 MXN",
        "profesor": "Ana code"
    },
    {
        "id": 4,
        "titulo": "Curso de Dart",
        "img": "https://drupal.ed.team/sites/default/files/styles/medium/public/imagenes-cdn-edteam/2018-12/Dart.png?itok=Ul2YVOuq",
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
