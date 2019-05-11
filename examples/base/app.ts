import axios from '../../src/index'

// 处理url请求参数 demo start
// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         foo: ['bar', 'baz']
//     }
// })
//
// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         foo: {
//             bar: 'baz'
//         }
//     }
// })
//
// const date = new Date()
//
// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         date
//     }
// })
//
// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         foo: '@:$, '
//     }
// })
//
// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         foo: 'bar',
//         baz: null
//     }
// })
//
// axios({
//     method: 'get',
//     url: '/base/get#hash',
//     params: {
//         foo: 'bar'
//     }
// })
//
// axios({
//     method: 'get',
//     url: '/base/get?foo=bar',
//     params: {
//         bar: 'baz'
//     }
// })
// 处理url请求参数 demo end

// 处理body中的数据 start
// axios({
//     method: 'post',
//     url: '/base/post',
//     data: {
//         a: 1,
//         b: 2
//     }
// })

// const arr = new Int32Array([21, 31])
//
// axios({
//     method: 'post',
//     url: '/base/buffer',
//     data: arr
// })
// 处理body中的数据 end

// 处理请求header start
// axios({
//     method: 'post',
//     url: '/base/post',
//     data: {
//         a: 1,
//         b: 3
//     }
// })
//
// axios({
//     method: 'post',
//     url: '/base/post',
//     headers: {
//         'content-type': 'application/json',
//         'Accept': 'application/json, text/plain, */*'
//     },
//     data: {
//         a: 1,
//         b: 2
//     }
// })
//
// const paramsString = 'q=URLUtils.searchParams&topic=api'
// const searchParams = new URLSearchParams(paramsString)
//
// axios({
//     method: 'post',
//     url: '/base/post',
//     data: searchParams
// })
// 处理请求header end

// 获取响应数据 start
axios({
    method: 'post',
    url: '/base/post',
    data: {
        a: 1,
        b: 2
    }
}).then((res) => {
    console.log(res)
})

axios({
    method: 'post',
    url: '/base/post',
    responseType: 'json',
    data: {
        a: 3,
        b: 4
    }
}).then((res) => {
    console.log(res)
})
// 获取响应数据 end
