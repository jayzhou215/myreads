import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component{

  componentDidMount() {

  }

  updateBook = (id, shelf) => {
    this.props.updateBook(id, shelf)
  }

  render(){
    const {books} = this.props
    const currentlyReading = books.filter(book=>book.shelf === 'currentlyReading')
    const wantToRead = books.filter(book=>book.shelf === 'wantToRead')
    const read = books.filter(book=>book.shelf === 'read')
    return (
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf title='Currently Reading' books={currentlyReading} updateBook={this.updateBook}/>
                <BookShelf title='Want to Read' books={wantToRead} updateBook={this.updateBook}/>
                <BookShelf title='Read' books={read} updateBook={this.updateBook}/>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search' />
            </div>
          </div>
    )
  }

}

export default ListBooks
