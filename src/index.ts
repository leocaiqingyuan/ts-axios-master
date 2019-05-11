import { AxiosPromise, AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest } from './helpers/data'
import { processHeaders } from './helpers/header'

function axios(config: AxiosRequestConfig): AxiosPromise {
  // 发送请求前对config进行处理
  processConfig(config)
  return xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  // 处理config中的url
  config.url = transformUrl(config)
  // 处理请求header
  config.headers = transformHeaders(config)
  // 处理config中的data
  config.data = transformRequestData(config)
}

// 处理config中的url，params
function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

// 处理请求header
function transformHeaders(config: AxiosRequestConfig) {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

// 处理请求body中的数据
function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

export default axios
