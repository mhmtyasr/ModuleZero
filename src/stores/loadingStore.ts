import { action, observable } from 'mobx';



class LoadingStore {
 @observable static loading:boolean=false;

  @action
 static setLoading(param:boolean) {
    this.loading=param;
   
  }
}
export default LoadingStore;
