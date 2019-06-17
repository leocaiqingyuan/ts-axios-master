const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

// export function isObject(val:any):val is Object {
//     return val !== null && typeof val === 'object'
// }

/**
 * 判断参数是否是普通对象
 * 不用isObject是因为，它对于 formData、ArrayBuffer 这些类型，判断都为true
 * 但是这些类型的数据我们是不需要做处理的
 * 而 isPlainObject 的判断方式，只有我们定义的普通 JSON 对象才能满足
 */
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

/**
 * 混合对象
 * 包含 Axios 类的所有原型属性和实例属性
 */
export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    // (to as any)[key] = from[key]
    ;(to as any)[key] = from[key] as any
  }
  return to as T & U
}

/**
 * 深拷贝
 */
export function deepMerge(...objs: any[]): any {
  const result = Object.create(null)

  objs.forEach(obj => {
    if (obj) {
      Object.keys(obj).forEach(key => {
        const val = obj[key]
        if (isPlainObject(val)) {
          // 递归
          if (isPlainObject(result[key])) {
            result[key] = deepMerge(result[key], val)
          } else {
            result[key] = deepMerge({}, val)
          }
        } else {
          result[key] = val
        }
      })
    }
  })

  return result
}

// 判断 formData 的方法
export function isFormData(val: any): boolean {
  return typeof val !== 'undefined' && val instanceof FormData
}

export function isURLSearchParams(val: any): val is URLSearchParams {
  return typeof val !== 'undefined' && val instanceof URLSearchParams
}
