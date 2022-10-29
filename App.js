import React,{Component} from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import{MyContext} from './src/context';
import Home from './src/components/Home';
import Details from './src/components/Details';

class App extends Component {

  static contextType = MyContext;

  render()
{  return (
  <ScrollView>
    <View style={styles.container}>
      {
        this.context.state.stage === 1 ?
///one
    <Home/>
        :
///two
    <Details/>
      }
    </View>
  </ScrollView>
    
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:65
  },
});

export default App;