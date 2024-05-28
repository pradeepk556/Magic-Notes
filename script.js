
function addNote(){
    let title = document.getElementById('title');
    let text = document.getElementById('note');
    let newObj = [
         title.value,
        text.value
    ]
    let myNotes = localStorage.getItem('notes');
    if(myNotes == null){
        notesObj = []
    }
    else{
        notesObj = JSON.parse(myNotes);
    }
    notesObj.push(newObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    title.value = '';
    text.value = '';
    showNotes();
}

function showNotes(){
    let myNotes = localStorage.getItem('notes');
    if(myNotes == null){
        notesObj = []
    }
    else{
        notesObj = JSON.parse(myNotes);
    }
    let cards = "";
    notesObj.forEach((element, index) => {
            cards += `<div class="list-card">
                            <h1>${element[0]}</h1>
                            <p>${element[1]}</p>
                            <button class="deleteNote" onclick="deleteNote(${index})">Delete</button>
                    </div>
            `;
    });
    let mycards = document.getElementById('yourNotes');
    if(notesObj.length == 0){
        mycards.innerHTML = "To see your Notes you need to add First";
    }
    else{
        mycards.innerHTML = cards;
    }
}

let search = document.getElementById('search');
search.addEventListener('input', ()=>{
    let myNotes = document.getElementsByClassName('list-card');
    let searchText = search.value.toLowerCase();
    console.log(searchText, myNotes);
    Array.from(myNotes).forEach((element) => {
        let card = element.getElementsByTagName('h1')[0].innerText;
        if(card.toLowerCase().includes(searchText)){
            element.style.display  = 'block';
        }
        else{
            element.style.display  = 'none';
        }
    })
})

function clearNotes(){
    if(confirm("Are you sure you want to clear all your Notes")){
        localStorage.clear();
        showNotes();
    }
}

function deleteNote(index){
    let myNotes = localStorage.getItem('notes');
    notesObj = JSON.parse(myNotes);
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}


