function removeChild(parentId){
    let parentElement = document.getElementById(`${parentId}`);
    while(parentElement.firstChild){
        parentElement.removeChild(parentElement.firstChild);
    };
};