import React, { Component } from 'react'
import Book from './Book'
import randomize from 'randomatic'

function BookShelf(props) {
  const updateBook = (book, shelf) => {
    props.updateBook(book, shelf)
  }

  return (
    <div className="bookshelf">
      { props.title && (
        <h2 className="bookshelf-title">{props.title}</h2>
      )}
      <div className="bookshelf-books">
        <ol className="books-grid">
          {

            props.books && props.books.map(bk=>(
              <li key={bk.id + '-' + randomize('*', 10)}>
                <Book book={bk} updateBook={updateBook}/>
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  )
}

export default BookShelf
