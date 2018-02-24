import fetch from '../utils/fetch'
import axios from 'axios';

// 获取所有新闻列表
export function getNewsList() {
    // const params = {
    //     rows,
    //     page,
    //     userId
    // };
    return fetch({
        url: '/newList',
        method: 'post',
        //params
    })
}

// export function getNewsList() {
//     axios.get('https://www.easy-mock.com/mock/59acdaa3e0dc6633419ad3bc/example/newsList')
//         .then(response => {
//             console.log(response);
//             console.log('response2', response.status);
//             if (response.data.status !== 200) {
//                 return Promise.reject(response.errorMsg);
//             } else {
//                 return Promise.resolve(response.list)
//             }
//         })
//         .catch(err => {
//             console.log(err);
//         })
// }