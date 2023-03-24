

function createLibrary(name) {
  library = {};
  library.name = name
  library.shelves =  {
    fantasy: [],
    fiction: [],
    nonFiction: [],
  }
  return library
}

function addBook(library, book) {
  library.shelves[book.genre].push(book)
}

function checkoutBook(library, book, genre) {
  titles = []
  for (i = 0; i < library.shelves[genre].length; i++) {
    titles.push(library.shelves[genre][i].title)
  }
  if (titles.includes(book)) {
    library.shelves[genre].splice(titles.indexOf(book), 1)
    return `You have now checked out ${book} from the ${library.name}.`
  } else {
    return `Sorry, there are currently no copies of ${book} available at the ${library.name}.`
  }
}

function takeStock(library, genre) {
  if (genre !== undefined){
    return `There are a total of ${library.shelves[genre].length} ${genre} books at the ${library.name}.`
  } else {
    var bookCount = 0
    shelfNames = Object.keys(library.shelves)
    for (i = 0; i < Object.keys(library.shelves).length; i++) {
      bookCount = bookCount + library.shelves[shelfNames[i]].length
    }
    return `There are a total of ${bookCount} books at the ${library.name}.`
  }
}




module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};