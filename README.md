## My Reads
This is Jay's my reads project based on [reactnd-project-myreads-starter](https://github.com/udacity/reactnd-project-myreads-starter)

## ProjectSetup
* clone the Project - `git@github.com:jayzhou215/myreads.git`
* install the dependencies - `npm install`

## Run
`yarn start` or `npm start`

## About project
* App.js contains ListBooks and AddBook component, shows the shelfs page and search page.
* ListBooks.js contains multi BookShelf component, show currentlyReading, wantToRead and read shelfs.
* AddBook.js search page, with an input and a shelf to show the search result books.
* BookShelf.js shelf component, contains multi Book component
* Book.js base book component

```mermaid
graphTD;
  App-->ListBooks;
  App-->AddBook;
  ListBooks-->BookShelf;
  AddBook-->BookShelf;
  BookShelf-->Book;
```

## Search term
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERM.md](SEARCH_TERM.md). That list of terms are the only terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Contributing
This is only an homework project, please don't pull requests.

## Licences
Do not copy this project if you are a student of udacity in this class. And you can feel free to use it for any other usage.
