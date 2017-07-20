import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class AddBook extends Component {

  state = {
    books : []
  }

  // timeout = null

  componentDidMount() {

  }

  updateBook = (id, shelf) => {
    this.props.updateBook(id, shelf)
  }

  handleChange = (event) => {
    const value = event.target.value
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      BooksAPI.search(value, 20).then(books=>{
        console.log(books)
        this.setState({books:books})
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
          <BookShelf title='' books={this.state.books} updateBook={this.updateBook}/>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
    </div>
    )
  }

}

export default AddBook
