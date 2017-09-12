import fetch from '../utils/fetch'

export function getNewsList() {
    // const params = {
    //     rows,
    //     page,
    //     userId
    // };
    return fetch({
        url: '/newsList',
        method: 'get',
        //params
    })

}