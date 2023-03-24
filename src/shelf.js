function shelfBook(bookName, shelfArray) {
  if (shelfArray.length < 3){
  shelfArray.unshift(bookName)
  }
}

function unshelfBook(bookName, shelfArray) {
 for (i = 0; i < shelfArray.length; i++) {
  if (shelfArray[i].title === bookName) {
    shelfArray.splice([i], 1)
  }
 }
}


function listTitles(shelf) {
  var titles = []
  for (i = 0; i < shelf.length; i++){
    titles.push(shelf[i].title)
  }
  return titles.join(", ")
}

function searchShelf(shelf, bookTitle) {
  var titles = []
  for (i = 0; i < shelf.length; i++){
    titles.push(shelf[i].title)
  }
    if (titles.includes(bookTitle)){
      return true
    } else {
      return false
    }
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};