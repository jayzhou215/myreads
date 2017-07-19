import React from 'react'

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' Component={BookShelf} />
        <Route path='/search' Component={AddBook} />
      </div>
    )
  }
}

export default BooksApp
