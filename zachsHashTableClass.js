class hashTable {
    constructor() {
        this.items = 0;
        this.maxBuckets = 10;
        this.storageArr = this.createStorage();
    }

    createStorage() {
        let storage = [];
        for (let x=0; x<this.maxBuckets; x++) {
            storage[x] = {head: null};
        }
        return storage;
    }

    hashFunc(str) {
        let hash = 0;
        let strLen = str.length;
        for (let x=0; x<strLen; x++) {
            hash += str.charCodeAt(x);
        }
        return hash % this.maxBuckets;
    }

    insert(key, val, table=this.storageArr) {
        this.items++;
        if (this.items === this.maxBuckets) {
            console.log('expanding table')
            this.items = 0;
            this.expandTable();
            this.insert(key, val);
        }

        let node = {
            key: key,
            val: val,
            next: null,
        };

        let index = this.hashFunc(String(key));
        if (!table[index].head) {
            table[index].head = node;
        }
        else {
            node.next = table[index].head
            table[index].head = node;
        }
    }

    expandTable() {
        this.maxBuckets *= 2;
        let newTable = this.createStorage();
        for (let x=0; x<this.storageArr.length; x++) {
            let runner = this.storageArr[x].head;
            while(runner) {
                this.insert(runner.key, runner.val, newTable);
                runner = runner.next;
            }
        }
        this.storageArr = newTable;
        return;
    }

    update(key, newVal) {
        let index = this.hashFunc(String(key));
        let runner = this.storageArr[index].head;
        if (!runner) {
            throw new Error(`The key '${key}' does not exist`);
        }
        while (runner) {
            if (runner.key === key) {
                runner.val = newVal;
                return true;
            }
            runner = runner.next;
        }
        throw new Error(`The key '${key}' does not exist`);
    }
    
    delete(key) {
        let index = this.hashFunc(String(key));
        let runner = this.storageArr[index].head;
        if (!runner) {
            throw new Error(`The key '${key}' does not exist`);
        }
        else if (runner.key === key) {
            this.storageArr[index].head = null;
            return true;
        }

        let previous = runner;
        runner = runner.next;
        
        while (runner) {
            if (runner.key === key) {
                previous.next = runner.next;
                return true;
            }
            runner = runner.next;
        }
        throw new Error(`The key '${key}' does not exist`);
    }

}


// console.log(hashTable.node("firstNode", 31))

let dict = new hashTable();
// console.log(dict.storageArr[0])
dict.insert('nose', "goes")
dict.insert(12, 'pie')
dict.update(12, 'ron')
console.log(dict.delete(12))
console.log(dict.delete("nose"))


let keys = ['key1', 'key2', 'key3', 'key4', 'key5', 'key6', 'key7', 'key8', 'key9', 'key10'];
let words = ['strawberry', 'melon', 'watermelon', 'grapefruit', 'grapes', 'pizza', 'onions', 'steak', 'gummy bears', 'rock candy'];
for (let x=0; x<words.length; x++) {
    dict.insert(keys[x], words[x])
}


dict.insert('nose', "goes")
dict.insert(12, 'pie')

// console.log(dict.storageArr)
console.log(dict.storageArr)
// console.log(dict.storageArr[15])