import React, { Component } from 'react'
import Book from './Book'
class BookShelf extends Component {


  updateBook = (id, shelf) => {
    this.props.updateBook(id, shelf)
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.props.books.map(bk=>(
                <li key={bk.id}>
                  <Book book={bk} updateBook={this.updateBook}/>
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    )
  }

}

export default BookShelf
