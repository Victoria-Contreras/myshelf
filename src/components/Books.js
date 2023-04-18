import Dropdown from "react-bootstrap/Dropdown"

const Books = ({ books }) => {
    return ( 
        <div id="books-container">
            {books ? books.map((book, index) =>
                <div key={index} className="book">
                    <Dropdown className="book-dropdown">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Add
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1" id={book.id} >Want to Read</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" id={book.id} >Read</Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>
                    {book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks.thumbnail} /> : <img src="https://cdn.bookauthority.org/dist/images/book-cover-not-available.6b5a104fa66be4eec4fd16aebd34fe04.png" />}

                    <h1><a>{book.volumeInfo.title}</a></h1>
                    <h2>by {book.volumeInfo.authors}</h2>

                </div>
            ) : null}
        </div>
     );
}
 
export default Books;