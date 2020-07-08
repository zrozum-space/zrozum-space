import { Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import recommendedBooks from './recommended-books.json'

const Readings = () => {
  return (
    <Layout>
      {recommendedBooks.books.map((book) => (
        <article className="book-item">
          <img src={book.image} alt={book.name}></img>
          <Link to={book.link}>{book.name}</Link>
        </article>
      ))}
    </Layout>
  )
}

export default Readings
