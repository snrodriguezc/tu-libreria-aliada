import { Container, Row, Col, Card } from "react-bootstrap";
import React from 'react';
import Book from "./Book";
import BookDetail from "./BookDetail";

const { useEffect, useState } = require("react");

const Books = () => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState([]);

    const clickDetail = (Book) => {
        setSelectedBook(Book);
        console.log("HASD")
    }

    useEffect(() => {
        const URL = "http://localhost:3000/books"
        fetch(URL).then(data => data.json()).then(data => {
            setBooks(data);
        })
    }, [selectedBook]);

    return(
        <Container>
            <Row>
                <Col md={8}>
                    {books.map((book) => (
                        <Col>
                            <Book book={book} onPress={clickDetail}/>
                        </Col> 
                    ))}
                </Col >
                <Col md="auto">
                    <BookDetail Book={selectedBook}/>
                </Col >
            </Row>
        </Container>
    );
};

export default Books;