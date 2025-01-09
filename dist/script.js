"use strict";
class LinkedList {
    constructor() {
        this.headNode = null;
    }
    append(value) {
        const newNode = new LinkedNode(value);
        if (this.headNode !== null) {
            let currentNode = this.headNode;
            while (currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = newNode;
        }
        else {
            this.headNode = newNode;
        }
    }
    prepend(value) {
        const newNode = new LinkedNode(value);
        newNode.nextNode = this.headNode;
        this.headNode = newNode;
    }
    head() {
        return this.headNode;
    }
    last() {
        if (this.headNode !== null) {
            let currentNode = this.headNode;
            while ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.nextNode) !== null) {
                currentNode = currentNode.nextNode;
            }
            return currentNode;
        }
        return;
    }
    size() {
        if (this.headNode !== null) {
            let currentNode = this.headNode;
            let counter = 1;
            while ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.nextNode) !== null) {
                currentNode = currentNode.nextNode;
                counter += 1;
            }
            return counter;
        }
        return 0;
    }
    at(number) {
        if (this.headNode !== null) {
            let currentNode = this.headNode;
            let index = 0;
            while (index !== number) {
                if ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.nextNode) == null) {
                    return "not existed";
                }
                currentNode = currentNode.nextNode;
                index += 1;
            }
            return currentNode;
        }
    }
    pop() {
        var _a;
        if (this.headNode !== null) {
            let currentNode = this.headNode;
            while (((_a = currentNode === null || currentNode === void 0 ? void 0 : currentNode.nextNode) === null || _a === void 0 ? void 0 : _a.nextNode) !== null) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = null;
        }
        return;
    }
    contains(value) {
        if (this.headNode !== null) {
            let currentNode = this.headNode;
            while (currentNode.value !== value) {
                if ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.nextNode) == null && (currentNode === null || currentNode === void 0 ? void 0 : currentNode.value) !== value) {
                    return false;
                }
                currentNode = currentNode.nextNode;
            }
            return true;
        }
    }
    find(value) {
        if (this.headNode !== null) {
            let currentNode = this.headNode;
            let index = 0;
            while (currentNode.value !== value) {
                if ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.nextNode) == null) {
                    return "not existed";
                }
                currentNode = currentNode.nextNode;
                index += 1;
            }
            return index;
        }
    }
    toString() {
        if (this.headNode !== null) {
            let currentNode = this.headNode;
            let result = "(" + currentNode.value + ")";
            while ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.nextNode) !== null) {
                currentNode = currentNode.nextNode;
                result += "-> (" + currentNode.value + ")";
            }
            return result += "-> null";
        }
        return;
    }
    insertAt(value, index) {
        if (this.headNode !== null) {
            const newNode = new LinkedNode(value);
            let currentNode = this.headNode;
            let counter = 1;
            while (counter !== index) {
                currentNode = currentNode.nextNode;
                counter += 1;
            }
            newNode.nextNode = currentNode.nextNode;
            currentNode.nextNode = newNode;
            return;
        }
        return;
    }
    removeAt(index) {
        var _a;
        if (this.headNode !== null) {
            let currentNode = this.headNode;
            let counter = 1;
            while (counter !== index) {
                if ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.nextNode) == null) {
                    return "not existed";
                }
                currentNode = currentNode.nextNode;
                counter += 1;
            }
            currentNode.nextNode = (_a = currentNode.nextNode) === null || _a === void 0 ? void 0 : _a.nextNode;
        }
        return;
    }
}
class LinkedNode {
    constructor(value) {
        this.value = null;
        this.nextNode = null;
        this.value = value;
    }
}

export {LinkedList}