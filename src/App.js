import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import AddBook from './AddBook'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books:[]
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(shelfs =>{
      this.refreshFromServer()
    })
  }

  refreshFromServer(){
    BooksAPI.getAll().then(books=>(
      this.setState({
        books: books
      })
    ))
  }

  componentDidMount() {
    this.refreshFromServer()
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={()=>(
            <ListBooks books={this.state.books} updateBook={this.updateBook}/>
          )} />
        <Route path='/search' render={()=>(
            <AddBook updateBook={this.updateBook}/>
          )} />
      </div>
    )
  }
}

export default BooksApp
