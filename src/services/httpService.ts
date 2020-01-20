
import axios from 'axios';
import { Toast } from 'native-base';


const qs = require('qs');



const http = axios.create({
  baseURL: "http://api.eventcloud.aspnetboilerplate.com/",
  timeout: 30000,
  paramsSerializer: function(params) {
    return qs.stringify(params);
  },
});

http.interceptors.request.use(
  function(config) {
    
    
    // if (!!abp.auth.getToken()) {
    //   config.headers.common['Authorization'] = 'Bearer ' + abp.auth.getToken();
    // }

    // config.headers.common['.AspNetCore.Culture'] = abp.utils.getCookieValue('Abp.Localization.CultureName');
     config.headers.common['Abp.TenantId'] = 1;

    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (!!error.response && !!error.response.data.error && !!error.response.data.error.message && error.response.data.error.details) {
      _toast(error.response.data.error.details);
    } else if (!!error.response && !!error.response.data.error && !!error.response.data.error.message) {
      _toast(error.response.data.error.message);
    } else if (!error.response) {
      _toast(error.response);
    }
    return Promise.reject(error);
  }
);


function _toast(message:string){
  Toast.show({
    text: message,
    duration: 2000,
    type:"danger"
  })
}



export default http;
