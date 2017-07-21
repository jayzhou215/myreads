import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

function ListBooks (props) {
  const updateBook = (id, shelf) => {
    props.updateBook(id, shelf)
  }
  const {books} = props
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
              <BookShelf title='Currently Reading' books={currentlyReading} updateBook={updateBook}/>
              <BookShelf title='Want to Read' books={wantToRead} updateBook={updateBook} />
              <BookShelf title='Read' books={read} updateBook={updateBook} />
            </div>
          </div>
          <div className="open-search">
            <Link to='/search' />
          </div>
        </div>
  )

}

export default ListBooks
