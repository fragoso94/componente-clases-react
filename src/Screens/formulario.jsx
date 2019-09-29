import React, {Component} from 'react'

class Formulario extends Component {
    constructor(props){
        super(props)
        console.log(props);
    //objeto para mi componente dinamico    
        this.state = {
            nombre : "",
            correo : "",
            fecha: new Date()
        }
        //se hace un bind() para poder utilizar el this
        this.cambiarNombre = this.cambiarNombre.bind(this);
        this.cambiarCorreo = this.cambiarCorreo.bind(this);
        this.cambiarFecha = this.cambiarFecha.bind(this);
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

    cambiarFecha(){
        //let fecha = new Date();
        this.setState({
            fecha: new Date()
        })

    }

    render(){
        return(
            <div className="ed-grid">
                <h1>{this.props.name}</h1>
                <h4>Fecha actual: {
                    Math.ceil(this.state.fecha/1000)
                }</h4>
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
        this.intervaloFecha = setInterval( () => {
            this.cambiarFecha();
        }, 1000)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    componentWillUnmount() {
        clearInterval(this.intervaloFecha)
    }
}

export default Formulario;