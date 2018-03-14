class SmartCalculator {
  constructor(initialValue) {
    this.expression = initialValue.toString();
  }

  add(number) {
    this.expression += `+${number}`;
    return this;
  }

  subtract(number) {
    this.expression += `-${number}`;
    return this;
  }

  multiply(number) {
    this.expression += `*${number}`;
    return this;
  }

  devide(number) {
    this.expression += `/${number}`;
    return this;
  }

  pow(number) {
    this.expression += `**${number}`;
    return this;
  }

  valueOf() {
    return eval(this.expression);
  }
}

module.exports = SmartCalculator;
