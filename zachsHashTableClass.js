class hashTable {
    constructor(maxBuckets) {
        this.items = 0;
        this.maxBuckets = maxBuckets;
        this.storageArr = [];

        for (let x=0; x<maxBuckets; x++) {
            this.storageArr[x] = this.createSLL()
        }
    }

    createSLL() {
        return {head: null}
    }

    hashFunc(str) {
        let hash = 0;
        for (let x=0; x<str.length; x++) {
            hash += str.charCodeAt(x);
        }
        return hash % this.maxBuckets;
    }


    insert(key, val) {
        this.items++;

        let node = {
            key: key,
            val: val,
            next: null,
        };

        let index = this.hashFunc(String(key));
        if (!this.storageArr[index].head) {
            this.storageArr[index].head = node;
        }
        else {
            node.next = this.storageArr[index].head
            this.storageArr[index].head = node;
        }
    }
    // update func
    // delete func

}

// let words = ['strawberry', 'melon', 'watermelon', 'grapefruit'];
// maxBucket = 10;
// for (let x=0; x<words.length; x++) {
//     console.log(hashTable.hashFunc(words[x], maxBucket));
// }

// console.log(hashTable.node("firstNode", 31))

let dict = new hashTable(10);
// console.log(dict.storageArr[0])
dict.insert('nose', "goes")
dict.insert(12, 'pie')
console.log(dict.storageArr)
// console.log(dict.storageArr[9])