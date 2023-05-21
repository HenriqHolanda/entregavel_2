function ckChange(ckType){

    let ckName = document.getElementsByName(ckType.name);
    let checked = document.getElementById(ckType.id);

    if (checked.checked) for (let box of ckName){

        if (!box.checked) box.disabled = true;
        else box.disabled = false;
    } 

    else for (let box of ckName) box.disabled = false;  
}