import React, { Component } from 'react'
class Book extends Component {

  handleChanged = (event) => {
    const book = this.props.book
    if (book.shelf !== event.target.value) {
      this.props.updateBook(book.id, event.target.value)
    }
  }

  render(){
    const {book} = this.props
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})` }}></div>
          <div className="book-shelf-changer">
            <select value={book.shelf} onChange={this.handleChanged}>
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
        <div className="book-authors">{book.authors}</div>
      </div>

    )
  }

}

export default Book
