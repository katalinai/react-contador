import React, { Component } from 'react';

export default class App extends Component {

  constructor(props){
    super(); //manda llamar este mismo metodo pero en el padre , más las cosas que haré a continuación
    this.state= {
      count: 5
    }
  }

  incrementarContador= () => {
    alert("incrementar")
  }

   disminuirContador= () => {
    alert("disminuir")
  }

  render() {
    
    let {count} = this.state
    return (
      <div>
        <h1>Valor: {count} </h1>
        <button onClick=  {this.incrementarContador}>Incrementar</button>
        <button onClick= {this.disminuirContador}>Disminuir</button>
      </div>  
    );
  }

}