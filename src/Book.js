import React, { Component } from 'react'
function Book (props) {
  const {book} = props
  const handleChanged = (event) => {
    const book = props.book
    if (book.shelf !== event.target.value) {
      props.updateBook(book, event.target.value)
    }
  }
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})` }}></div>
        <div className="book-shelf-changer">
          <select value={book.shelf} onChange={handleChanged}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">
               to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors?book.authors.join('\n'):''}</div>
    </div>

  )
}

Book.propTypes = {
  book:React.PropTypes.object.isRequired,
  updateBook:React.PropTypes.func.isRequired
}


export default Book
