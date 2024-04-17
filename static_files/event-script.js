const removeButton = document.getElementById("remove-game")
const removeGame = () => {
  
  const gamesList = document.getElementById("games-list")
  gamesList.removeChild(games[2])

}

removeButton.addEventListener("click", removeGame)

// we can also remove event listeners
// removeButton.removeEventListener("click", removeGame)