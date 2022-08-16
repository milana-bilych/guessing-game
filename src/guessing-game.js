class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.total = Math.ceil((this.max + this.min) / 2);
        return this.total
    }

    lower() {
        this.max = this.total
    }

    greater() {
        this.min = this.total
    }
}

module.exports = GuessingGame;
