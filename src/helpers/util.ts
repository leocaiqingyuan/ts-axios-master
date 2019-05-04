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
