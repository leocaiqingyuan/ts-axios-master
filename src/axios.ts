import { AxiosInstance } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'

function createInstance(): AxiosInstance {
  const context = new Axios()

  // 给 Axios 的原型绑定 request 方法
  const instance = Axios.prototype.request.bind(context)

  // 将Axios的原型属性和实例属性，拷贝到instance中
  extend(instance, context)

  return instance as AxiosInstance
}

const axios = createInstance()

export default axios
