// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // == Main Methods ==

    // return true or false if value exists
    exists(value){
        if (this.head == null){
            return false;
        }
        var runner = this.head;
        while (runner){
            if (runner.data == value){
                return true;
            }
            runner = runner.next;
    }}
  // push to head
  addHead(node) {
    if (!this.head) { // empty list
        this.head = node;
        this.tail = node;
    } else {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    }
    this.length++;
}

reverse() {
    if (this.head === null || this.length == 1) {
        return null;
    }
    var front = this.head;
    var back = this.tail;
    var runner = this.head;
    var nextRunner = this.head.next;
    while (runner) {
        if (runner == this.head) {
            runner.prev = runner.next;
            runner.next = null;
            runner = runner.prev;
            if (nextRunner) {
                nextRunner = nextRunner.next;
            }
        }
        else if (runner == this.tail) {
            runner.next = runner.prev;
            runner.prev = null;
            break;
        }
        else {
            nextRunner.next = runner.prev;
            runner.prev = nextRunner;
            runner = nextRunner;
            nextRunner = nextRunner.next;
        }
    }
    this.head = back;
    this.tail = front;
}

}
var list = new DLList();
var node1 = new DLLNode(10);
var node2 = new DLLNode(20);
var node3 = new DLLNode(30);
var node4 = new DLLNode(40);
var node5 = new DLLNode(50);
list.addHead(node5);
list.addHead(node4);
list.addHead(node3);
list.addHead(node2);
list.addHead(node1);
console.log(list);
console.log("list.exists(30): ", list.exists(30));
list.reverse();
console.log(list);

