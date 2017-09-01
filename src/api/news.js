import fetch from '../utils/fetch'

export function getNewsList(rows,page,userId){
	const params={
		rows,
		page,
		userId
	};
	return fetch({
		url:'/news/getNewsList',
		method:'get',
		params
	})
	
}
