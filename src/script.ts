class LinkedList{
    headNode : LinkedNode|null = null

    append(value: string | number){
        const newNode = new LinkedNode(value)
        if (this.headNode !== null){
            let currentNode : LinkedNode = this.headNode
            while(currentNode.nextNode !== null){
                currentNode = currentNode.nextNode
            }
            currentNode.nextNode = newNode
        }
        else{this.headNode = newNode}
        
    }
    
    prepend(value: string | number){
        const newNode = new LinkedNode(value);
        newNode.nextNode = this.headNode;
        this.headNode = newNode;
    }

    head(){
        return this.headNode
    }

    last(){
        if(this.headNode !== null){
            let currentNode : LinkedNode | null = this.headNode
            while(currentNode?.nextNode !== null){
                currentNode = currentNode.nextNode
            }
            return currentNode
        }
        return 
    }
    
    size(){
        if(this.headNode !== null){
            let currentNode : LinkedNode | null = this.headNode
            let counter : number = 1
            while(currentNode?.nextNode !== null){
                currentNode = currentNode.nextNode
                counter += 1
            }
            return counter
        }
        return 0
    }
    
    at(number : number){
        if(this.headNode !== null){
            let currentNode : LinkedNode | null = this.headNode
            let index : number = 0
            while(index !== number){
                if(currentNode?.nextNode == null){
                    return "not existed"
                }
                currentNode = currentNode.nextNode
                index += 1
            }
            return currentNode
        }
    }
    
    pop(){
        if(this.headNode !== null){
            let currentNode : any = this.headNode
            while(currentNode?.nextNode?.nextNode !== null){
                currentNode = currentNode.nextNode
            }
            currentNode.nextNode = null
        }
        return
    }
    
    contains(value : string | number){
        if(this.headNode !== null){
            let currentNode : any = this.headNode
            while(currentNode.value !== value){
                if(currentNode?.nextNode == null && currentNode?.value !== value){
                    return false
                }
                currentNode = currentNode.nextNode
            }
            return true
        }
        
    }
    
    find(value : string | number){
        if(this.headNode !== null){
            let currentNode : LinkedNode | null = this.headNode
            let index : number = 0
            while(currentNode.value !== value){
                if(currentNode?.nextNode == null){
                    return "not existed"
                }
                currentNode = currentNode.nextNode
                index += 1
            }
            return index
        }
    }
    
    toString(){
        if(this.headNode !== null){
            let currentNode : LinkedNode | null = this.headNode
            let result : string = "(" + currentNode.value +")"
            while(currentNode?.nextNode !== null){
                currentNode = currentNode.nextNode
                result += "-> (" + currentNode.value +")"
            }
            return result += "-> null"
        }
        return 
    }
    
    insertAt(value : string | number, index : number){
        if(this.headNode !== null){
            const newNode = new LinkedNode(value)
            let currentNode : any = this.headNode
            let counter : number = 1
            while(counter !== index){
                currentNode = currentNode.nextNode
                counter += 1
            }
            newNode.nextNode = currentNode.nextNode
            currentNode.nextNode = newNode
            return 
        }
        return 
        
    }

    removeAt(index : number){
        if(this.headNode !== null){
            let currentNode : any = this.headNode
            let counter : number = 1
            while(counter !== index){
                if(currentNode?.nextNode == null){
                    return "not existed"
                }
                currentNode = currentNode.nextNode
                counter += 1
            }
            currentNode.nextNode = currentNode.nextNode?.nextNode
        }
        return
    }
    
    
}


class LinkedNode{
    value : any = null;
    nextNode : LinkedNode|null = null
    
    constructor(value : string | number){
        this.value = value
    }
}

