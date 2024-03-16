import FullList from "../model/FullList";

interface DOMList{
    ul:HTMLUListElement,
    clear(): void,
    render(fullList:FullList): void
}

export default class ListTemplate implements DOMList{
    static instance = new ListTemplate()
    ul : HTMLUListElement 
    private constructor(){
        this.ul = document.getElementById("listItems") as HTMLUListElement
    }

    clear(): void {
        this.ul.innerHTML = ''
    }

    render(fullList: FullList): void {
        
    }
}