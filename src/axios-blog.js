import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://lesson66hwhoc.firebaseio.com/'
});


instance.interceptors.request.use(req => {
   console.log('[In response interceptor', req);
   return req;
});

export default instance;