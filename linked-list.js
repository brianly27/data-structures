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
            this.insertFirst(data);
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
        current.next = node
        this.size ++

    }

    // insert data at a given index
    insertAtIndex(data, index) {
        let current

        // check to see if there is a head
        if (index === 0) {
            this.insertFirst(data)
            return
        }

        // check if placing data at the desired index would also mean making it the last node in the linked list
        if (index === this.size) {
            this.insertLast(data)
            return
        }


        //check if index is valid
        if (index < 0 || index > this.size -1) {
            return null
        } else {
            current = this.head
            let node = new Node(data)
            let i = 0
            //stop at the index before the index where you want insert your data
            while (i < index -1) {
                current = current.next
                i ++
            }

            node.next = current.next
            current.next = node
            this.size ++
        }
        



    }

    // get a data at a given index
    getDataAtIndex(index) {
        let current
        let i = 0

        if (index < 0 || index > this.size - 1 || this.head === null) {
            return null
        }
        
        current = this.head
        while (i < index) {
            current = current.next
            i ++
        }

        return current.data

    }
    // remove node at a given index
    removeNodeAtIndex(index) {
        let current
        let i = 0

        if (index < 0 || index > this.size - 1 || this.head === null) {
            return null
        }

        if (index === 0) {
            this.head = this.head.next
            return
        }

        current = this.head
        while (i < index - 1) {
            current = current.next
            i ++
        }

        let removeNode = current.next
        current.next = removeNode.next
        return removeNode
    }

    // remove all nodes
}

let n1 = new Node(3)
let n2 = new Node(4)
let list1 = new LinkedList()
let list2 = new LinkedList()
list1.insertFirst("b")
list1.insertFirst("a")
list1.insertLast("c")
list1.insertLast("d")
list1.insertAtIndex("j", 0)
list1.removeNodeAtIndex(0)
list1.printData()

// let a = list1.getDataAtIndex(2)
// console.log(a)

// list2.insertLast(23)
// list2.printData()