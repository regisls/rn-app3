import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

class MeuComponente extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.teste}</Text>
      </View>
    );
  }
}

class App extends Component {
  // no construtor da classe podem ser difinidas as variáveis em state
  // state é um objeto literal
  constructor(props) {
    super(props);

    this.state = {
      texto: 'Texto teste 2',
      outraVariavel: 123
    };
  }

  // Para alterar o valor de uma variável no state tem que ser usado o método setState
  // herdado da classe Component
  alteraTexto() {
    this.setState({texto: 'Outra mensagem'});
  }

  render() {
    return (
      <View>
        <MeuComponente teste={this.state.texto}></MeuComponente>
        <Button
          title="Botão"
          onPress={() => {this.alteraTexto()}} />
      </View>
    );
  }
};


export default App;
