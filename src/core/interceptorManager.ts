import { ResolvedFn, RejectedFn } from '../types'

// 拦截器接口，resolved是必选参数，rejected可选
interface Interceptor<T> {
  resolved: ResolvedFn<T>
  rejected?: RejectedFn
}

export default class InterceptorManager<T> {
  // 私有属性，外部不可访问
  private interceptors: Array<Interceptor<T> | null>

  constructor() {
    this.interceptors = []
  }

  // 添加拦截器到 interceptor 中，返回 id 用于删除
  use(resolved: ResolvedFn, rejected: RejectedFn): number {
    this.interceptors.push({
      resolved,
      rejected
    })
    return this.interceptors.length - 1
  }

  // 提供给外部使用，因为interceptor是私有属性，外部不能访问
  // 遍历 interceptor用的，支持传入一个函数，遍历过程中会调用该函数，并把每一个interceptor作为参数传入
  forEach(fn: (interceptor: Interceptor<T>) => void): void {
    this.interceptors.forEach(interceptor => {
      if (interceptor !== null) {
        fn(interceptor)
      }
    })
  }

  // 删除拦截器，通过传入拦截器的id删除
  eject(id: number): void {
    if (this.interceptors[id]) {
      this.interceptors[id] = null
    }
  }
}
