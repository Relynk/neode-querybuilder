export default class Unwind {
  private key: string

  private as: string

  constructor(key: string, as: string) {
    this.key = key
    this.as = as
  }

  toString() {
    return `${this.key} AS ${this.as}`
  }
}
