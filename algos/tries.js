class node{
    constructor(char) {
        this.node = {
            char: char,
            isWord: false,
            children: [],
        }
        return this.node;
    }
    autocomplete(partial, results) {
        if (this.isWord) {
            results.push(partial)
        }
        for (let child of this.children) {
            child.autocomplete(partial+child.char, results)
        }
        return results;
    }
}

class tries {
    constructor() {
        this.root = new node("");
    }

    insert(word) {
        let runner = this.root;
        for (let char of word) {
            let found = false;
            for (let charObj of runner.children) {
                if (charObj.char === char) {
                    found = true;
                    runner = charObj;
                    break;
                }
            }
            if (!found) {
                let newChild = this.node(char);
                runner.children.push(newChild);
                runner = newChild;
            }
        }
        if (runner.isWord) {
            return false;
        }
        runner.isWord = true;
        return true;
    }

    contains(word) {
        let runner = this.root;
        for (let char of word) {
            let found = false;
            for (let child of runner.children) {
                if (char == child.char) {
                    runner = child;
                    found = true;
                    break
                }
            }
            if (!found) {
                return false;
            }
        }
       return runner.isWord; 
    }

    autocomplete(partial) {
        let runner = this.root;
        for (let char of partial) {
            let found = false;
            for (let child of runner.children) {
                if (char === child.char) {
                    runner = child;
                    found = true;
                    break;
                }
            }
            if (!found) {
                return [];
            }
        }
        return runner.autocomplete(partial, [])
    }

}



let angie = new tries();
console.log(angie.insert("Mineral"));
console.log(angie.root);