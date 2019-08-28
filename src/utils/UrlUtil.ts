export default class UrlUtil {
  public static getParam(name: string) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    let r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2])
    return null
  }

  public static removeUrlSearchToken(url: string) {
    let ms = url.split('#')
    let ss = ms[0].split('?')
    let tokenStr = ''
    if (ss.length > 1) {
      let ps = ss[1].split('&')
      ps.forEach((item, index) => {
        if (item.startsWith('token=')) {
          tokenStr = item
          if (index < ps.length - 1) {
            tokenStr += '&'
          }
        }
      })
      let newUrl = ss[0] + '?' + ss[1].replace(tokenStr, '')
      if (ms.length > 1) {
        newUrl += '#' + ms[1]
      }
      return newUrl
    }
    return url
  }
}
