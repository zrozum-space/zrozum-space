import { Link } from 'gatsby'
import React from 'react'
import Flex from '../../components/Flex'
import Layout from '../../components/Layout'
import recommendedBooks from './recommended-books.json'

const Readings = () => {
  return (
    <Layout>
      <Flex flexWrap="wrap">
        {recommendedBooks.books.map((book) => (
          <article className="book-item">
            <img src={require(`./${book.image}`)} alt={book.name} />
            <a href={book.link}>{book.name}</a>
          </article>
        ))}
      </Flex>
    </Layout>
  )
}

export default Readings
