// @ts-check
function createTitle(title) {
  return `The ${title}`
};

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns,
  }
};

function saveReview(newReview, reviews) {
  if (reviews.indexOf(newReview) > -1) {
  } else {
    return reviews.push(newReview)
    }
  }; 

function calculatePageCount(title) {
  return title.length * 20
};

function writeBook(title, bookCharacter, genre) {
  var book = {}
  book.title = title
  book.mainCharacter = bookCharacter
  book.pageCount = calculatePageCount(book.title)
  book.genre = genre
  return book
};

function editBook(bookObj) {
  bookObj.pageCount = bookObj.pageCount * .75
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}