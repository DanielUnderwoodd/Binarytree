

class Node {
    constructor(value){
        this.value = value
        this.leftChild = null
        this.rightChild = null
    }
    setLeftChild(leftChild){
        this.leftChild = leftChild
    }
    setRightChild(rightChild){
        this.rightChild = rightChild
    }
}

class Tree {
    constructor(){
        this.root = null
    }

    insert(value){

        const newNode = new Node(value)
        if(!this.root){
            this.root = newNode
        }else {
            this.insertNode(newNode,this.root)
        }
       

    }
    insertNode(newNode,node){
        if(newNode.value > node.value){
            if(node.rightChild){
                this.insertNode(newNode,node.rightChild)
            }else {
                node.setRightChild(newNode)
            }
        }
        if(newNode.value < node.value){
            if(node.leftChild){
                this.insertNode(newNode,node.leftChild)
            }else {
                node.setLeftChild(newNode)
            }
        }

    }
 

      search(value,node = this.root){
     if (node === null){
        return null
     }
     else if (value > node.value){
        return this.search(value,node.rightChild)
     }
     else if (value < node.value){
        return this.search(value,node.leftChild)
     }else {
        return node
     }
      }


}

