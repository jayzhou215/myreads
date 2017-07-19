import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import AddBook from './AddBook'
import './App.css'

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' component={BookShelf} />
        <Route path='/search' component={AddBook} />
      </div>
    )
  }
}

export default BooksApp
