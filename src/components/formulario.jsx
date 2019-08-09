import React, {Component} from 'react'

class Formulario extends Component {
    constructor(props){
        super(props)

        this.state = {
            nombre : "",
            correo : ""
        }

    }
    render(){
        return(
            <div className="ed-grid">
                <form >
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label>Nombre completo</label>
                            <input type="text" 
                                onChange={ e => this.setState({
                                    nombre : e.target.value
                                })
                            }
                            />
                        </div>
                        <div className="form__item">
                            <label>Correo electrónico</label>
                            <input type="email" />
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
}

export default Formulario;