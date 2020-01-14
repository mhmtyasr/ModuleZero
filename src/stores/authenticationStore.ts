import { action, observable } from 'mobx';


import LoginModel from '../models/Login/loginModel';
import tokenAuthService from '../services/tokenAuth/tokenAuthService';




class AuthenticationStore {
 
  
  public  isAuthenticated(): boolean {
    // if (!abp.session.userId) return false;

    return true;
  }

  @action
  public async login(model: LoginModel) {
    let result = await tokenAuthService.authenticate({
      userNameOrEmailAddress: model.userNameOrEmailAddress,
      password: model.password
    });

   

  }

  @action
  logout() {
    // localStorage.clear();
    // sessionStorage.clear();
    // abp.auth.clearToken();
  }
}
export default AuthenticationStore;
