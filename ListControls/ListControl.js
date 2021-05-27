let i = 0;

let arr = "";


function store(sel) {

    //let list1 = document.getElementById("List1");
    arr = sel.options[sel.selectedIndex].text;
    console.log(arr);
}

function add() {
    
    let list2 = document.createElement("option");
    list2.text = arr;
    list2.value = ++i;
    let select = document.getElementById("List2");
    select.appendChild(list2);
    console.log(list2.text);

}