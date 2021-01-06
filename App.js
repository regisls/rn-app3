import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Topo from './src/components/topo';
import Icone from './src/components/icone';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: '',
    };
  }

  jokenpo(escolhaUsuario) {
    let numeroAleatorio = Math.floor(Math.random() * 3);
    let escolhaComputador = '';

    switch (numeroAleatorio) {
      case 0:
        escolhaComputador = 'pedra';
        break;
      case 1:
        escolhaComputador = 'papel';
        break;
      case 2:
        escolhaComputador = 'tesoura';
        break;
    }

    let resultado = '';

    if (escolhaUsuario === escolhaComputador) {
      resultado = 'Empate';
    } else {
      if (escolhaComputador === 'pedra') {
        if (escolhaUsuario === 'papel') {
          resultado = 'Você ganhou';
        } else {
          resultado = 'Você perdeu';
        }
      }
      if (escolhaComputador === 'papel') {
        if (escolhaUsuario === 'tesoura') {
          resultado = 'Você ganhou';
        } else {
          resultado = 'Você perdeu';
        }
      }
      if (escolhaComputador === 'tesoura') {
        if (escolhaUsuario === 'pedra') {
          resultado = 'Você ganhou';
        } else {
          resultado = 'Você perdeu';
        }
      }
    }

    this.setState({
      escolhaUsuario: escolhaUsuario,
      escolhaComputador: escolhaComputador,
      resultado: resultado,
    });
  }

  render() {
    return (
      <View>
        <Topo style={Estilos.topo} />

        <View style={Estilos.painelAcoes}>
          <View style={Estilos.botao}>
            <Button
              title="pedra"
              onPress={() => {
                this.jokenpo('pedra');
              }}
            />
          </View>
          <View style={Estilos.botao}>
            <Button
              title="papel"
              onPress={() => {
                this.jokenpo('papel');
              }}
            />
          </View>
          <View style={Estilos.botao}>
            <Button
              title="tesoura"
              onPress={() => {
                this.jokenpo('tesoura');
              }}
            />
          </View>
        </View>
        <View style={Estilos.palco}>
          <Text style={Estilos.txtResultado}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaComputador} jogador="Computador" />
          <Icone escolha={this.state.escolhaUsuario} jogador="Você" />
        </View>
      </View>
    );
  }
}

const Estilos = {
  botao: {
    width: 90,
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  palco: {
    alignItems: 'center',
    marginTop: 10,
  },
  txtResultado: {
    fontSize: 25,
    color: 'red',
    height: 60,
  },
};

export default App;
