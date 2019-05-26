import { AxiosTransformer } from '../types'

/**
 * transform 函数：处理转换函数的调用逻辑
 * fns 代表一个或多个转换函数，内部逻辑：
 * 遍历fns，把data和headers传入，每个转换函数返回的data会作为
 * 下一个转换函数的参数data传入
 */
export default function transform(
  data: any,
  headers: any,
  fns?: AxiosTransformer | AxiosTransformer[]
): any {
  if (!fns) {
    return data
  }
  if (!Array.isArray(fns)) {
    fns = [fns]
  }
  fns.forEach(fn => {
    data = fn(data, headers)
  })
  return data
}
