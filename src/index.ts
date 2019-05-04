import {AxiosRequestConfig} from "./types";
import xhr from './xhr'
import {buildURL} from "./helpers/url";

function axios(config: AxiosRequestConfig) {
    // 发送请求前对config进行处理
    processConfig(config)
    xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
    // 处理config中的url，后续还会处理其它参数
    config.url = transformUrl(config)
}

// 处理config中的url，params
function transformUrl(config: AxiosRequestConfig): string {
    const {url, params} = config
    return buildURL(url, params)
}

export default axios
