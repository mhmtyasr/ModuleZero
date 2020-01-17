
import axios from 'axios';





const http = axios.create({
  baseURL: "http://api.eventcloud.aspnetboilerplate.com/",
  timeout: 30000,
  paramsSerializer: function(params) {
    return qs.stringify(params, {
      encode: false,
    });
  },
});

http.interceptors.request.use(
  function(config) {
    // if (!!abp.auth.getToken()) {
    //   config.headers.common['Authorization'] = 'Bearer ' + abp.auth.getToken();
    // }

    // config.headers.common['.AspNetCore.Culture'] = abp.utils.getCookieValue('Abp.Localization.CultureName');
    // config.headers.common['Abp.TenantId'] = abp.multiTenancy.getTenantIdCookie();

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
     
    } else if (!!error.response && !!error.response.data.error && !!error.response.data.error.message) {
     
    } else if (!error.response) {
      
    }
    return Promise.reject(error);
  }
);

export default http;
