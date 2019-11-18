import React from "react";

const Historial = ({match, location, history}) =>
    //parametro que se puede obtener a travéz de react router (al momento de navegar)
    <div>
        <h4>propiedad match:
            {
                JSON.stringify(match)
            }
            {
                console.log(match.params) //obteniendo los parametros
            }
        </h4>
        <h4>propiedad location:
            {
                JSON.stringify(location)
            }
        </h4>
        <h4>propiedad history:
            {
                JSON.stringify(history)
            }
        </h4>

    </div>

export default Historial;
