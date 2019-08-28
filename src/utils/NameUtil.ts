export default class NameUtil {
  static CSCK (componentKey: string) {
    return componentKey.split('_')[0].replace('-', '_') + '/' + componentKey
  }
}
