export class INode<T> {
    value: T;
    left: INode<T> | null;
    right: INode<T> | null;
    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export default class BinarySearchTree<T> {
    private root: INode<T> | null;

    constructor() {
        this.root = null;
    }
    getRoot() {
        return this.root;
    }
    isRootNull() {
        return this.root === null;
    }
    insert(value: T) {
        const newNode = new INode(value);
        if (this.isRootNull()) {
            this.root = newNode;
            return this;
        }
        return this.insertIntoCurrentNode(newNode);
    }
    private insertIntoCurrentNode(newNode: INode<T>) {
        const recurInsert = (currentNode:INode<T>) => {
            if (currentNode.value > newNode.value) {
                if(currentNode.left === null) currentNode.left = newNode;
                else recurInsert(currentNode.left);
            }
            else if (currentNode.value < newNode.value) {
                if (currentNode.right === null) currentNode.right = newNode;
                else recurInsert(currentNode.right);
            }
        };
        recurInsert(this.root!);
        return this;
    }
    contain(value: T) {
        if(this.isRootNull()) return false;
        const recurContain = (currentNode: INode<T> | null): boolean => {
            if(currentNode === null) return false;
            if(currentNode.value>value) return recurContain(currentNode.left);
            else if(currentNode.value<value) return recurContain(currentNode.right);
            else return true;
        };
        return recurContain(this.root);
    }
    find(value: T) {
        if(this.isRootNull()) return null;
        const recurFind = (currentNode:INode<T>|null): INode<T> | null => {
            if (currentNode === null) return null;
            if (currentNode.value > value) return recurFind(currentNode.left);
            else if (currentNode.value < value) return recurFind(currentNode.right);
            else return currentNode; // currentNode.value === value
        };
        return recurFind(this.root);
    }
    findMin() {
        if(this.isRootNull()) return null;
        return this.findMinFromCurrent(this.root!.value);
    }
    findMinFromCurrent(value: T):INode<T> | null {
        const starter = this.find(value);
        if(starter===null)return null;
        const recurFindMinFromCurrent = (currentNode:INode<T>): INode<T> => {
            if (currentNode.left === null) return currentNode;
            return recurFindMinFromCurrent(currentNode.left);
        };
        return recurFindMinFromCurrent(starter);
    }
    findMax() {
        if(this.isRootNull()) return null;
        return this.findMaxFromCurrent(this.root!.value);
    }
    findMaxFromCurrent(value: T): INode<T> | null {
        const starter = this.find(value);
        if(starter === null) return null;
        const recurFindMaxFromCurrent = (currentNode: INode<T>):INode<T> => {
            if(currentNode.right === null) return currentNode;
            return recurFindMaxFromCurrent(currentNode.right);
        };
        return recurFindMaxFromCurrent(starter);
    }
    findParent(value: T) {
        if(this.isRootNull()) return null;
        const recurFindParent = (currentNode: INode<T>|null):INode<T> | null => {
            if(currentNode === null) return null;
            if(currentNode.value > value) {
                if(currentNode.left === null || currentNode.left.value !== value)
                    return recurFindParent(currentNode.left);
                else return currentNode;
            } else if (currentNode.value<value) {
                if(currentNode.right === null || currentNode.right.value !==value)
                    return recurFindParent(currentNode.right);
                else return currentNode;
            }
            // currentNode.value === value
            return null;
        };
        return recurFindParent(this.root);
    }
    delete(value: T): this {
        if (this.isRootNull()) return this;
    
        const target = this.find(value);
        if (target === null) return this;
    
        const parent = this.findParent(value);
    
        // ✅ Case 1: 삭제할 노드가 루트이고, 자식이 없음
        if (this.root!.value === value && !this.root!.left && !this.root!.right) {
            this.root = null;
            return this;
        }
    
        const replaceChild = (parent: INode<T> | null, target: INode<T>, newChild: INode<T> | null) => {
            if (parent === null) {
                this.root = newChild;
            } else if (parent.left === target) {
                parent.left = newChild;
            } else if (parent.right === target) {
                parent.right = newChild;
            }
        };
    
        // ✅ Case 2: 자식이 하나 또는 없음
        if (target.left === null || target.right === null) {
            const child = target.left ?? target.right;
            replaceChild(parent, target, child);
            return this; // ✅ 여기 빠져있었음
        }
    
        // ✅ Case 3: 자식이 둘 다 있는 경우
        const successor = this.findMinFromCurrent(target.right!.value);
        if (successor) {
            this.delete(successor.value); // 중복 제거 먼저
            target.value = successor.value;
        }
    
        return this;
    }
    inOrderTraversal() {
        const answer: T[] = [];
        const recur = (currentNode: INode<T> | null) => {
            if(currentNode === null) return;
            recur(currentNode.left);
            answer.push(currentNode.value);
            recur(currentNode.right);
        };
        recur(this.getRoot());
        return answer;
    }
    preOrderTraversal() {
        const answer: T[] = [];
        const recur = (currentNode: INode<T> | null) => {
            if(currentNode === null) return;
            answer.push(currentNode.value);
            recur(currentNode.left);
            recur(currentNode.right);
        };
        recur(this.getRoot());
        return answer;
    }
    postOrderTraversal() {
        const answer: T[] = [];
        const recur = (currentNode: INode<T>|null) => {
            if(currentNode === null) return;
            recur(currentNode.left);
            recur(currentNode.right);
            answer.push(currentNode.value);
        };
        recur(this.getRoot());
        return answer;
    }
}

const bst = new BinarySearchTree();
bst.insert(5);
const inputValues = [1, 2, 3, 4, 5, 6, 8, 9, 10]// 5 == root
inputValues.forEach((value)=> bst.insert(value));