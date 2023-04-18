import { useState } from "react";
import Books from "./Books";

const BookSearch = () => {
    const [searchString, setSearchString] = useState('');
    const [books, setBooks] = useState([]);

    const getBook = async (e) => {
        e.preventDefault()
        await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchString)}`
        )
            .then((response) => response.json())
            .then((data) => setBooks(data.items), console.log(books))
            .catch((error) => console.log("Error fetching books: ", error));
            
    };
    return ( 
        <div>
            <form onSubmit={e => getBook(e)}>
                <input type="text" onChange={e => setSearchString(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
            <Books books={books}/>
        </div>
     );
}
 
export default BookSearch;