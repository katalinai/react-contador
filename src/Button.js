import React, { Component } from 'react'

export default class KataButton extends Component{
    
    render() {
        let {tituloBoton, accionBoton} = this.props;

        return (
            <button onClick={accionBoton}>{tituloBoton}</button>
        )
    }
        
}