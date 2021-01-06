import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

const imgPedra = require('../../imgs/pedra.png');
const imgPapel = require('../../imgs/papel.png');
const imgTesoura = require('../../imgs/tesoura.png');

class Icone extends Component {
  render() {
    if (this.props.escolha === 'pedra') {
      return (
        <View style={Estilos.txtJogador}>
          <Text>{this.props.jogador}</Text>
          <Image source={imgPedra} />
        </View>
      );
    } else if (this.props.escolha === 'papel') {
      return (
        <View style={Estilos.txtJogador}>
          <Text>{this.props.jogador}</Text>
          <Image source={imgPapel} />
        </View>
      );
    } else if (this.props.escolha === 'tesoura') {
      return (
        <View style={Estilos.txtJogador}>
          <Text>{this.props.jogador}</Text>
          <Image source={imgTesoura} />
        </View>
      );
    }
    return false;
  }
}

const Estilos = {
  txtJogador: {
    alignItems: 'center',
    marginBottom: 20,
  },
};

export default Icone;
