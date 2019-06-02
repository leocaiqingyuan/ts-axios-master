import { AxiosRequestConfig, AxiosStatic } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'
import defaults from './defaults'
import mergeConfig from './core/mergeConfig'

// axios 的工厂函数
function createInstance(config: AxiosRequestConfig): AxiosStatic {
  const context = new Axios(config)

  // 给 Axios 的原型绑定 request 方法
  const instance = Axios.prototype.request.bind(context)

  // 将Axios的原型属性和实例属性，拷贝到instance中
  extend(instance, context)

  return instance as AxiosStatic
}

const axios = createInstance(defaults)

axios.create = function(config) {
  return createInstance(mergeConfig(defaults, config))
}

export default axios
