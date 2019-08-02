import React, { Component } from 'react';

export default class App extends Component {

  constructor(props){
    super(); //manda llamar este mismo metodo pero en el padre , más las cosas que haré a continuación
    this.state= {
      count: 5
    }
  }

  incrementarContador= () => {
    this.setState({
      count: this.state.count + 1
    })

  }

   disminuirContador= () => {
    this.setState({
      count: this.state.count - 1 
    })
  }

  render() { 
    
    let {count} = this.state //hacemos un  destructuring
    return (
      <div>
        <h1>Valor: {count} </h1>
        <button onClick=  {this.incrementarContador}>Incrementar</button>
        <button onClick= {this.disminuirContador}>Disminuir</button>
      </div>  
    );
  }

}