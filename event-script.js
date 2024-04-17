const removeButton = document.getElementById("remove-game")
const removeGame = () => {
  alert('Removing one game')

  //const gamesList = document.getElementById("games-list")
  //gamesList.removeChild(games[0])
}

removeButton.addEventListener("click", removeGame)

// we can also remove event listeners
//removeButton.removeEventListener("click", removeGame)