import React, { Component } from 'react'

export default class KataButton extends Component{
    
    render() {
        let {tituloBoton, accionBoton, colorBoton} = this.props;

        return (
            <button onClick={accionBoton} style={{backgroundColor: colorBoton }}>{tituloBoton}</button>
        )
    }
        
}