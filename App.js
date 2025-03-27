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
    backgroundColor: '#A55',     
    flexGrow: 1,   
    justifyContent: 'center',  
    alignItems: "center",  
    padding: 20    

  },
  buttons: {
    flexDirection: 'row',
  }
});