putInList = function() {
    let inp = document.getElementById("inp").value;//get input text
    let ul = document.getElementById("lis");//get list
    let entry = document.createElement('li');
    entry.appendChild(document.createTextNode(inp));
    ul.appendChild(entry);
}