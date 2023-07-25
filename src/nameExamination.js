export default class Validator {
  constructor(nameStr) {
    this.name = nameStr;
  }

  validateUsername() {
    if (/^[a-z][\w-]*[a-z]$/i.test(this.name) && /\d{3,}/.test(this.name) !== true) {
      return true;
    }
    return false;
  }
}
