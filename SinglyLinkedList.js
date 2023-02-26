
//Linked List

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;

    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;

        while (current.next) {
            var newTail = current;
            var current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;

        var currentHead = this.head;
        this.head = currentHead.next;
        
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;

    }

    unshift(val) {
        var newNode = new Node(val);
        if (!head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        var counter = 0;
        var current = this.head;

        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        //Double Bang converts value to Boolean

        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return null;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();

        var perviousNode = this.get(index - 1);
        var removed = perviousNode.next;
        this.length--;
        perviousNode.next = removed.next;
    }

    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var prev = null;
        var next;

        for (var i = o; i < this.length; i++) {
            node = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }
}