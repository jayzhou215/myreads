import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class AddBook extends Component {

  state = {
    books : []
  }

  componentDidMount() {

  }

  updateBook = (book, shelf) => {
    book.shelf = shelf
    this.setState(state=>({books:state.books}))
    this.props.updateBook(book, shelf)
  }

  handleChange = (event) => {
    const value = event.target.value
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      BooksAPI.search(value, 20).then(result=>{
        console.log(result)
        this.setState({books: ((result === undefined || result.error) ? []: result)})
      })
    }, 500);
  }

  render(){

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className='close-search'/>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={this.handleChange}/>

          </div>
        </div>
        <div className="search-books-results">
          <BookShelf title='' books={this.state.books} updateBook={this.updateBook}/>
        </div>
    </div>
    )
  }

}

export default AddBook
