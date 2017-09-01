import axios from 'axios';
import store from '../store'

var instance = axios.create({
	baseUrl:'https://127.0.0.1:8090/',
	timeout:5000,
})

//axios request拦截器
instance.interceptors.request.use(config =>{
	return config; 
}, error => {
	console.log(error);
	
})

//axios reponse拦截器
instance.interceptors.response.use(
	response => {
		const res=response.data;
		//状态不为200的时候
		if(res.status !== 200){
			console.log(res.errorMsg)
			
//			Message({
//				message:res.errorMsg,
//				type:'error',
//			})
			return Promise.reject(res.errorMsg);
		}
		else{
			return Promise.resolve(response.data)
		}
	},
	error => {
		console.log(error);
//		Message({
//			message:error.message,
//			type:'error'
//		});
		return Promise.reject(error)
	}
)
