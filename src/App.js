import React from "react"
import "./App.css"

class App extends React.Component {
  state = {
    books: [],
    comments: []
  }

  fetchcomments = async () =>{
    const apiUrl = process.env.REACT_APP_API_URL
    const resp = await fetch(`${apiUrl}/books/asin/comments`)
    const comments = await resp.json()
    
    this.setState({
      comments : comments
    })
   }
  render() {
    console.log(this.state.comments)
    return (
      <div className="App">
        <header className="App-header">
          <h1>Books in the catalogue</h1>
          {this.state.books.map((book, index) => (
            <div key={index}>
              <img src={book.img} style={{ width: "200px" }}></img>
              <span>{book.title}</span>
              <p>{this.state.comments.Text}</p>
            </div>
          ))}
        </header>
      </div>
    )
  }

  componentDidMount = async () => {
    const apiUrl = process.env.REACT_APP_API_URL
    const resp = await fetch(`${apiUrl}/books`)
    const jsonBooks = await resp.json()

    this.setState({
      books: jsonBooks.data,
    })
  }
}

export default App
