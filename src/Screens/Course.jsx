import React from 'react';

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

const Course = ({ match }) =>
{
    const cursoActual = cursos.filter( c => c.id === parseInt(match.params.id) )[0];
    console.log(cursoActual)
    const emtyView = <div className="ed-grid m-grid-3"> 404 - El curso no existe </div>;
    return(
        cursoActual //si curso actua existe imprime los cursos si no la vista vacía.
            ?
            <div className="ed-grid m-grid-3">
                <h1 className="m-cols-3">Nombre del curso: {cursoActual.id}</h1>
                <img className="m-cols-1" src={cursoActual.img} alt="Imagen" />
                <p className="m-cols-2">Profesor: {cursoActual.profesor}</p>
            </div>
            : emtyView
    );
};

export default Course;