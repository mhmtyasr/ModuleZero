import { action, observable } from 'mobx';


import LoginModel from '../models/Login/loginModel';
import tokenAuthService from '../services/tokenAuth/tokenAuthService';
import { AsyncStorage } from 'react-native';




class AuthenticationStore {
 @observable data:string="test";
  
  public  async isAuthenticated(): Promise<boolean> {
    return await AsyncStorage.getItem("userId") ? true :false;
  }

  @action 
  public setData(param:string){
    this.data=param;
  }
  @action
  public async login(model: LoginModel) {
   
       await tokenAuthService.authenticate({
      userNameOrEmailAddress: model.userNameOrEmailAddress,
      password: model.password,
      rememberClient:false
    }).then(async (result)=>await AsyncStorage.setItem("userId",result.accessToken)).catch();

  }

  @action
  logout() {
   
  }
}
export default AuthenticationStore;
