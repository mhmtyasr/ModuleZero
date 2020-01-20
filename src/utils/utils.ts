import { Toast } from "native-base";


enum toastType{
  "danger","success","warning"
}

export const _toast=(message:string)=>{
    Toast.show({
      text: message,
      duration: 2000,
      type:"danger"
    })
  }
  