// app correto

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Cabecalho from './src/components/Cabecalho';

import Post from './src/components/Post';

//import Comments from './src/components/Comments';

export default class App extends Component {
  render() {


    // const comments = [{
    //   comment:'A Ferrari é sinônimo de luxo e performance, criando veículos que iunem design sofisticado e tecnologia de ponta.'
    //   },
      //{
        // comment: '10M revenue in one year.',
        // icon: require('./assets/imgs/frame2.png'),
        // },
        // ]
      


    return (
      <View style={{ flex: 1 }}>
        <Cabecalho />
        <Post image={require('./assets/imgs/carro.png')} 
        />
      </View>

    )

  }
}

const styles = StyleSheet.create({
  App: {
    backgroundColor: '#A55',     //cor fundo AZUL = '#0000FF
    flexGrow: 1,   // preferencia componente
    justifyContent: 'center',   // deixar centro
    alignItems: "center",   // deixar no meio da tela
    padding: 20    // espaçamentos nas laterias DA TELA TODA(detalhe está sem  aspas)

  },
  buttons: {
    flexDirection: 'row',
  }
});