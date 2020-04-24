class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    
    //print all data in Linked List

    printData() {
        let current = this.head

        while (current) {
            console.log(current)
            current = current.next
        }
    }

    // insert data as the first node

        // insertFirst(data) {
        //     if (this.head === null) {
        //         this.head = data
        //         this.size ++
        //     } else {
        //         const newHead = new Node(data, this.head)
        //         this.head = newHead
        //         this.size ++ 
        //     }
        // }

    //more simplified version

    insertFirst(data) {
        this.head = new Node(data, this.head)
    }

    // insert data as the last node



    // insert data at a given index

    // get a node at a given index

    // remove node at a given index

    // remove all nodes
}

let n1 = new Node(3)
let n2 = new Node(4)
let list1 = new LinkedList()
list1.insertFirst(n1)
list1.insertFirst(n2)
console.log(list1)