import React, { Component } from 'react';
import KataButton from './Button';

export default class App extends Component {

  constructor(props){
    super(); //manda llamar este mismo metodo pero en el padre , más las cosas que haré a continuación
    this.state= {
      count: 1
    }
  }

  incrementarContador= () => {
    if (this.state.count < 10){  
      this.setState({
        count: this.state.count + 1
      })
    }else{
      this.setState({
        count: 0
      })
    }
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
        
        <hr></hr>
        <KataButton tituloBoton={"pararriba"} accionBoton={this.incrementarContador} colorBoton={"#08AEEA"}></KataButton>
        <KataButton tituloBoton={"pabajo"} accionBoton={this.disminuirContador} colorBoton={"#2AF598"}></KataButton>
        
        
      </div>  
    );
  }

}