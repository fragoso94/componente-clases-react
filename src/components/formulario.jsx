import React, {Component} from 'react'

class Formulario extends Component {
    constructor(props){
        super(props)
    //objeto para mi componente dinamico    
        this.state = {
            nombre : "",
            correo : ""
        }
        //se hace un bind() para poder utilizar el this
        this.cambiarNombre = this.cambiarNombre.bind(this);
        this.cambiarCorreo = this.cambiarCorreo.bind(this);
    }
    // método cambiar nombre
    cambiarNombre(e) {
        this.setState({
            nombre: e.target.value
        })
    }

    cambiarCorreo(e){
        this.setState({
            correo: e.target.value
        })
    }

    render(){
        return(
            <div className="ed-grid">
                <form id="elementoForm">
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label>Nombre completo</label>
                            <input type="text" 
                                onChange={ this.cambiarNombre }
                            />
                        </div>
                        <div className="form__item">
                            <label>Correo electrónico</label>
                            <input type="email" 
                                onChange={ 
                                    this.cambiarCorreo
                                    /*e => this.setState({
                                        correo: e.target.value
                                    })*/
                                }
                            />
                        </div>
                        <div className="form__item">
                            <input className="button full" type="submit" value="Enviar"/>
                        </div>
                    </div>                  
                </form>
                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es ${this.state.correo}`}</span>
                </div>
            </div>
        )
    }

    // método que valida que el componente esta completamente renderizado(montado)
    componentDidMount(){
        let elemento = document.getElementById('elementoForm');
        console.log(elemento);
    }
}

export default Formulario;