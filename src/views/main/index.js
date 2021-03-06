import React, { Component } from 'react'
import t from 'prop-types'
import { connect } from 'react-redux'
import {
  Row,
  Col
} from 'reactstrap'
import LoadingOverlay from 'react-loading-overlay'
import styled from 'styled-components'
import { fetchBySource, fetchNews, fetchMoreNews, fetchSources } from './actions'
import { ButtonDropdown, ButtonLoading, CardArticle } from 'ui'
import './style.scss'

class Main extends Component {
  static propTypes = {
    fetchBySource: t.func.isRequired,
    fetchNews: t.func.isRequired,
    fetchSources: t.func.isRequired,
    fetchMoreNews: t.func.isRequired,
    hasNoMoreNews: t.bool,
    fetchingNews: t.bool,
    fetchingMore: t.bool,
    news: t.object,
    pageSize: t.number,
    sources: t.array
  };

  state = {
    dropdownOpen: false
  }

  componentDidMount () {
    this.props.fetchNews(5)
    this.props.fetchSources()
  }

  fetchBySource = source => {
    this.props.fetchBySource(source.id)
  }

  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen })
  }

  renderNews = (
    hasNoMoreNews,
    fetchingNews,
    news,
    fetchingMore,
    pageSize,
    sources
  ) => (
    <Col xs={6} className='mb-5'>
      <Col xs={12}>
        <Row xs={12}>
          <h3>
            <a href={window.location.href}>News</a>
          </h3>
          <ButtonDropdown options={sources} onClick={source => this.fetchBySource(source)}>
            Filter By Source
          </ButtonDropdown>
        </Row>
      </Col>
      {fetchingNews
        ? <LoadingOverlayStyled
          active
          spinner
          text='Loading your content...'
        />
        : <>
          {news.articles.map((article) => (
            <CardArticle
              key={article.url}
              article={article}
            />
          ))}

          <ButtonLoading
            disabled={hasNoMoreNews}
            loading={fetchingMore}
            onClick={() => this.props.fetchMoreNews(pageSize)}
          >
            {hasNoMoreNews ? 'No More News' : 'Show More'}
          </ButtonLoading>
        </>
      }
    </Col>
  )

  render () {
    const { hasNoMoreNews, fetchingNews, fetchingMore, news, pageSize, sources } = this.props

    return (
      <Row className='justify-content-center'>
        {this.renderNews(hasNoMoreNews, fetchingNews, news, fetchingMore, pageSize, sources)}
      </Row>
    )
  }
}

const LoadingOverlayStyled = styled(LoadingOverlay)`
  margin-top: 5rem;
`

const mapStateToProps = state => {
  const { main } = state

  return { ...main }
}

const mapDispatchToProps = {
  fetchBySource,
  fetchNews,
  fetchMoreNews,
  fetchSources
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
