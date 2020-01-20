import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import { inject, observer } from 'mobx-react'
import { Button, Container, Toast, Root, Spinner } from "native-base"

import { grid } from "../../style/gridStyle"
import AuthenticationStore from '../../stores/authenticationStore';
import { NavigationStackProp } from 'react-navigation-stack';
import Stores from '../../stores/storeIdentifier';
import LoadingStore from '../../stores/loadingStore';

export interface Props {
  authenticationStore?: AuthenticationStore;
  // loadingStore?:LoadingStore;
  navigation?: NavigationStackProp;
}

export interface State {
  email: string;
  password: string;
}



@inject(Stores.AuthenticationStore)
@observer
export class Login extends React.Component<Props, State> {
  static navigationOptions({ navigation }: { navigation: any }) {
    return {
      headerShown: false,
      title: navigation.getParam('itemId'),
      visible: false
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      email: "", password: ""
    }
  }

  login = () => {
    this.props.authenticationStore!
      .login({ userNameOrEmailAddress: this.state.email, password: this.state.password, rememberClient: false })
      .then(() => this.props.navigation.navigate('Auth'));
  }

  render() {

    return (
      <Root>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
        >
          <View style={[grid.center, styles.logoContainer]}>
            <Image source={require('../../image/abp-logo-long.png')} style={styles.logo} />
          </View>
          <View style={styles.card}>
            <TextInput style={styles.inputs}
              placeholder="Email Adress"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({ email })} />

            <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({ password })} />
            <Button style={styles.button} onPress={() => this.login()}>
              <Text style={styles.buttonText} >Login</Text>
            </Button>
            <TouchableOpacity onPress={() => { }} style={styles.textButton}>
              <Text> Forget Password</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView> 
        </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "space-around",
    backgroundColor: '#DCDCDC',
  },
  card: {
    backgroundColor: "white",
    marginLeft: 30,
    marginRight: 30,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    borderRadius: 12,
    width: Math.round(Dimensions.get('window').width - 60),

  },
  logo: {
    resizeMode: 'contain',
    width: Math.round(Dimensions.get('window').width - 50),
    marginLeft: 25
  },
  logoContainer: {
    marginVertical: 50
  },
  inputs: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#DCDCDC',
    borderRadius: 12,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    height: 40,
    paddingLeft: 10,

  },
  button: {
    height: 40,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor: "#00b5ec"
  },
  buttonText: {
    color: "white",
    fontSize: 14
  },
  textButton: {
    alignItems: "center",
    height: 40
  }

});


export default Login;