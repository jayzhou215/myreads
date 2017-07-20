import React, { Component } from 'react'
import Book from './Book'
class BookShelf extends Component {


  updateBook = (book, shelf) => {
    this.props.updateBook(book, shelf)
  }

  componentWillMount() {

  }

  render() {
    return (
      <div className="bookshelf">
        { this.props.title && (
          <h2 className="bookshelf-title">{this.props.title}</h2>
        )}
        <div className="bookshelf-books">
          <ol className="books-grid">
            {

              this.props.books && this.props.books.map(bk=>(
                <li key={bk.id + '-' + bk.title}>
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
