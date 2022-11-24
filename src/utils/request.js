import axios from 'axios'  //引入axios
let $axios = axios.create({
  headers: {
    'content-type': 'application/json'
  }
})

$axios.interceptors.request.use(
  config => {
    const cookieToken = getCookie('docpal-token');
    if (cookieToken ) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = 'Bearer ' + cookieToken  //请求头加上token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

$axios.interceptors.response.use(
  response => {
    const code = parseInt(response.data.status)
    if (code === 401 || code === 403){
      
      if(code === 403){
          Message.error('服务器异常')
      }
    }else {
      // Message.error('服务器异常')
    }
    return response.data
  },
  //接口错误状态处理，也就是说无响应时的处理
  error => {
    return Promise.reject(error) // 返回接口返回的错误信息
  }
)
var getCookie = function (name) {
  var strCookies = document.cookie;
  var array = strCookies.split(';');
  for (var i = 0; i < array.length; i++) {
    var item = array[i].split("=");
    if (item[0].replace(' ', '') === name) {
        return item[1];
    }
  }
  return null;
}
export default $axios
