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
            console.log(current.data)
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
        this.size ++
    }

    // insert data as the last node

    insertLast(data) {
        let node = new Node(data)
        let current

        // if head is null, node becomes the head
        if (this.head === null) {
            this.head = node;
            return
        } else {
        // if head is not null, use current to point to the head
            current = this.head
        }

        // traverse to last node in the linked list 
        while (current.next) {
            current = current.next
        }

        // make the last node point to the node with our new data
        // console.log("\ncurrent:", current, "\n")
        current.next = node
        this.size ++

    }


    // insert data at a given index

    // get a node at a given index

    // remove node at a given index

    // remove all nodes
}

let n1 = new Node(3)
let n2 = new Node(4)
let list1 = new LinkedList()
list1.insertFirst(1)
list1.insertFirst(2)
list1.insertLast(32)
list1.printData()