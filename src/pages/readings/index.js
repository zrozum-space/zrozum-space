import React from 'react'
import Flex from '../../components/Flex'
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import recommendedBooks from './recommended-books.json'

const Readings = () => {
  return (
    <Layout>
      <PageHeader title="Polecane książki" />
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
