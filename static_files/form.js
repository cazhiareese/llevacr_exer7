

const form = document.getElementById('form')



const addCard = () =>{
    let card_container = document.getElementById('food-card-container');
    let foodname= document.getElementById('foodname').value
    let image = document.getElementById('foodimage').value;
    let description = document.getElementById('fooddescription').value
    let rank = document.getElementById('foodrank').value

    if((foodname.length == 0 || description.length == 0 || image.length == 0 || rank.length == 0))
    {
        alert('All fields are required.')
    }else if(isNaN(rank)){
        alert('Rank should be a number.')
    }
    else{

        let newCard= document.createElement("div")
        newCard.id = foodname
        newCard.style.order = rank;

        newCard.className = 'food-card'
        

        let cardImage = document.createElement("img")
        cardImage.src = image

        let cardTitle = document.createElement("h1")
        cardTitle.innerText = foodname

        let cardDescription = document.createElement("p")
        cardDescription.innerText = description


        let deleteButton = document.createElement("button")

        let makeIcon = document.createElement("i")
        makeIcon.className = "fa fa-trash"

        newCard.appendChild(cardImage)
        newCard.appendChild(cardTitle)
        newCard.appendChild(cardDescription)
        newCard.appendChild(deleteButton)
        deleteButton.appendChild(makeIcon)
        card_container.appendChild(newCard)

        deleteButton.addEventListener('click',
       () => {deleteForm(card_container,foodname)})
    }
}

const deleteForm = (container, id) =>{
    let remove = document.getElementById(id);

    container.removeChild(remove);

}

const handleFormSubmit = (event) =>{
    event.preventDefault();
    addCard();
    form.reset();
}


form.addEventListener('submit', handleFormSubmit);







