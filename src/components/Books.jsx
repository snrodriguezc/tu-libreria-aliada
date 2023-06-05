import { Container, Row, Col, Card } from "react-bootstrap";
import React from 'react';
import Book from "./Book";

const { useEffect, useState } = require("react");

const Books = () => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState([]);

    useEffect(() => {
        const URL = "http://localhost:3000/books"
        fetch(URL).then(data => data.json()).then(data => {
            setBooks(data);
        })
    }, [selectedBook]);

    return(
        <Container>
            <Row>
                {books.map((book) => (
                    <Col className="col-4">
                        <Book book={book} />
                    </Col> 
                ))}
            </Row>
        </Container>
    );
};

export default Books;