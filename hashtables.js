function hash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total - (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;

        for (let i = 0; i< Math.min(key.length, 00); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }

        return total;
    }

    set(key, value) {
        let index = this._hash(key);
    }

    get(key, value) {
        let index = this._hash(key);
    }
}