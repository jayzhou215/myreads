import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class AddBook extends Component {

  state = {
    books : []
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
        if (result === undefined || result.error) {
          this.setState({books:[]})
          return
        }
        this.updateSearchResultBooksWithShelfBooks(result, this.props.books)
        if (result !== this.state.books) {
          this.setState({books : result})
        }
      })
    }, 500);
  }

  updateSearchResultBooksWithShelfBooks = (searchBooks, shelfBooks) => {
    searchBooks.map(searchBook => {
      shelfBooks.map(shelfBook => {
        if (shelfBook.id === searchBook.id) {
          searchBook.shelf = shelfBook.shelf
          return true
        }
        return false
      })
      return true
    })
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

AddBook.propTypes = {
  books:React.PropTypes.object.isRequired,
  updateBook:React.PropTypes.func.isRequired
}

export default AddBook
