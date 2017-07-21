import React from 'react'
import {Switch, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import AddBook from './AddBook'
import Error from './Error'
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
    BooksAPI.getAll().then(books=>{
      this.setState({
        books: books
      })

    })
  }

  componentDidMount() {
    this.refreshFromServer()
  }

  render() {
    return (
      <div className="app">
        <Switch >
          <Route exact path='/' render={()=>(
              <ListBooks books={this.state.books} updateBook={this.updateBook}/>
            )} />
          <Route path='/search' render={()=>(
              <AddBook books={this.state.books} updateBook={this.updateBook}/>
            )} />
          <Route component={Error} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
