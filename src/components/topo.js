import React, {Component} from 'react';
import {View, Image} from 'react-native';

const imagem = require('../../imgs/jokenpo.png');

class Topo extends Component {
  render() {
    return (
      <View style={Estilos.topo}>
        <Image source={imagem} />
      </View>
    );
  }
}

const Estilos = {
  topo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
};

export default Topo;
