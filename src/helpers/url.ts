import {isDate, isObject} from './util'

/**
 * 对字符进行encode转换，允许出现以下特殊字符：
 * @、:、$、,、、[、]
 * @param val
 */
function encode(val: string): string {
    return encodeURIComponent(val)
        .replace(/%40/g, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']')

}

/**
 * 处理请求 url、参数，将参数按规则拼接到url后面
 * @param url
 * @param params
 */
export function buildURL(url: string, params?: any) {
    if (!params) {
        return url
    }

    const parts: string[] = []

    // 将参数params转换成一个统一的数组
    Object.keys(params).forEach((key) => {
        let val = params[key]
        // 存放每个object[key]的数组
        let values: string[]

        if (val === null || typeof val === 'undefined') {
            // forEach 里面的return只会跳出当前循环，不会跳出整个forEach循环，
            return
        }
        if (Array.isArray(val)) {
            values = val
            key += '[]'
        } else {
            values = [val]
        }
        values.forEach((val) => {
            if (isDate(val)) {
                val = val.toISOString()
            } else if (isObject(val)) {
                val = JSON.stringify(val)
            }
            parts.push(`${encode(key)}=${encode(val)}`)
        })
    })

    let serializedParams = parts.join('&')

    if (serializedParams) {
        // 判断url中是否存在hash值
        const markIndex = url.indexOf('#')
        if (markIndex !== -1) {
            url = url.slice(0, markIndex)
        }
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
    }

    return url
}
