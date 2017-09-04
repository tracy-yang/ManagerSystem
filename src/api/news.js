import fetch from '../utils/fetch'

export function getNewsList() {
    // const params = {
    //     rows,
    //     page,
    //     userId
    // };
    return fetch({
        url: '/user',
        method: 'get',
        //params
    })

}