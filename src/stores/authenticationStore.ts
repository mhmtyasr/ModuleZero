import { action, observable } from 'mobx';


import LoginModel from '../models/Login/loginModel';
import tokenAuthService from '../services/tokenAuth/tokenAuthService';
import { AsyncStorage } from 'react-native';




class AuthenticationStore {
 
  
  public  async isAuthenticated(): Promise<boolean> {
    return await AsyncStorage.getItem("userId") ? true :false;
  }

  @action
  public async login(model: LoginModel) {
   
    let result = await tokenAuthService.authenticate({
      userNameOrEmailAddress: model.userNameOrEmailAddress,
      password: model.password,
      rememberClient:true
    });

    console.log("userId",result.accessToken);
   

  }

  @action
  logout() {
    // localStorage.clear();
    // sessionStorage.clear();
    // abp.auth.clearToken();
  }
}
export default AuthenticationStore;
