import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class MeuComponente extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.propriedade1}</Text>
        <Text>{this.props.propriedade2}</Text>
      </View>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MeuComponente propriedade1='Banana' propriedade2='Maça'></MeuComponente>
    );
  }
};


export default App;
