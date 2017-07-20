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

  updateBook = (id, shelf) => {
    this.state.books.map(book=>{
      if (book.id === id) {
        BooksAPI.update(book, shelf).then(shelfs =>{
          // todo:how to know is the result is ok
          book.shelf = shelf
          this.setState({
            books:this.state.books
          })
        })
        return true
      }
      return false
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
        <Route path='/search' component={AddBook} />
      </div>
    )
  }
}

export default BooksApp
