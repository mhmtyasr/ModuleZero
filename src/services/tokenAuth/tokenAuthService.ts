import { AuthenticationModel } from './dto/authenticationModel';
import { AuthenticationResultModel } from './dto/authenticationResultModel';
import http from '../httpService';

class TokenAuthService {
  public async authenticate(authenticationInput: AuthenticationModel): Promise<AuthenticationResultModel> {
   debugger;
    let result = await http.post('api/TokenAuth/Authenticate', authenticationInput);
    debugger;
    return result.data.result;
  }
}

export default new TokenAuthService();
