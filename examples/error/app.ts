import axios, {AxiosError} from '../../src/index'

axios({
    method: 'get',
    url: '/error/get1'
}).then((res) => {
    console.log(res)
}).catch((e: AxiosError) => {
    console.log(e.message)
    console.log(e.code);
})

axios({
    method: 'get',
    url: '/error/get'
}).then((res) => {
    console.log(res)
}).catch((e) => {
    console.log(e)
})

setTimeout(() => {
    axios({
        method: 'get',
        url: '/error/get'
    }).then((res) => {
        console.log(res)
    }).catch((e) => {
        console.log(e)
    })
}, 5000)

axios({
    method: 'get',
    url: '/error/timeout',
    timeout: 2000
}).then((res) => {
    console.log(res)
}).catch((e:AxiosError) => {
    console.log('message:',e.message)
    console.log('code',e.code);
    console.log('config',e.config);
    console.log('request',e.request);
    console.log('isAxiosError',e.isAxiosError)
})
