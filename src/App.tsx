/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Login } from './scenes/Login/login';
import { View } from 'native-base';
import {Provider} from 'mobx-react';
import initializeStores from './stores/storeInitializer';

const stores =initializeStores();

export  class App extends React.Component {

  render() {
    return (
      <Provider {...stores}>
    <View style={{flex:1}}>
     <Login/>
     </View>
     </Provider>
  );
}
}



export default App;
