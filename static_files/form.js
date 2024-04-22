
// get form element (outside any function to be able to handle the event listener that we add at the last few lines of this code)
const form = document.getElementById('form')

//addCard() function is called when event is handled when user submits form
const addCard = () =>{

    // get form values
    // card_container is the top parent node
    let card_container = document.getElementById('food-card-container');
    let foodname= document.getElementById('foodname').value
    let image = document.getElementById('foodimage').value;
    let description = document.getElementById('fooddescription').value
    let rank = document.getElementById('foodrank').value

    //check first if user inputs are valid
    if((foodname.length == 0 || description.length == 0 || image.length == 0 || rank.length == 0))
    {
        alert('All fields are required.')
    }else if(isNaN(rank)){
        alert('Rank should be a number.')
    }
    else{

        //if valid, create a new div that will contain the food card
        //assign order to the div depending on the rank entered by the user
        let newCard= document.createElement("div")
        //add an id to be able to identify the card
        newCard.id = foodname
        newCard.style.order = rank;
        newCard.className = 'food-card'
        
        //add image based on the url input of the user
        let cardImage = document.createElement("img")
        cardImage.src = image
        
        //add food name based on user input
        let cardTitle = document.createElement("h1")
        cardTitle.innerText = foodname

        //add food description based on user input
        let cardDescription = document.createElement("p")
        cardDescription.innerText = description

        //add a delete button 
        let deleteButton = document.createElement("button")
        
        //some styling
        let makeIcon = document.createElement("i")
        makeIcon.className = "fa fa-trash"
        
        //append created elements to the parent node(for img, h1, p: parent node is newCard)
        newCard.appendChild(cardImage)
        newCard.appendChild(cardTitle)
        newCard.appendChild(cardDescription)
        newCard.appendChild(deleteButton)
        deleteButton.appendChild(makeIcon)
        //card_container is the parent node of newCard
        card_container.appendChild(newCard)

        //handle event when user clicks the delete button
        //we add an event listener that calls deleteCard function
        //we pass the id and container where the delete button is located
        //this means that every delete button, we pass a different foodname
        deleteButton.addEventListener('click',
       () => {deleteCard(card_container,foodname)})
    }
}

//deleteForm handles card deletion we remove the div based on the id passed
const deleteCard = (container, id) =>{
    let remove = document.getElementById(id);
    console.log(id)
    container.removeChild(remove);
}

//we handle the form submission here and call the addCard() function
const handleFormSubmit = (event) =>{
    event.preventDefault();
    addCard();
    form.reset();
}

//add an event listener that handles form submission when the user submits the form
form.addEventListener('submit', handleFormSubmit);







