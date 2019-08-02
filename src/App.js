import React, { Component } from 'react';

export default class App extends Component {

  constructor(props){
    super(); //manda llamar este mismo metodo pero en el padre , más las cosas que haré a continuación
    this.state= {
      saludo: "hola mundo desde el estado"
    }
  }

  render() {
    
    let { saludo } = this.state
    return (
        <h1>{saludo}</h1>
    );
  }

}