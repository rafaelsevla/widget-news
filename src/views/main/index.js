import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Row,
  Col
} from 'reactstrap'
import LoadingOverlay from 'react-loading-overlay';
import styled from 'styled-components'
import { fetchBySource, fetchNews, fetchMoreNews, fetchSources } from './actions'
import { ButtonDropdown, ButtonLoading, CardArticle } from 'ui'
import "./style.scss"

class Main extends Component {
  state = {
    dropdownOpen: false
  }

  componentDidMount() {
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
    hasMoreNews,
    fetchingNews,
    news,
    fetchingMore,
    pageSize,
    sources
  ) => (
    <Col xs={6} className="mb-5">
      <Col xs={12}>
        <Row xs={12}>
          <h3>
          <a href="/">News</a>
          </h3>
          <ButtonDropdown options={sources} onClick={source => this.fetchBySource(source)}>
            Filter By Source
          </ButtonDropdown>
        </Row>
      </Col>
      {fetchingNews 
      ? 
      (<LoadingOverlayStyled
        active={true}
        spinner
        text='Loading your content...'
      />)
      : 
      (<> 
        {news.articles.map((article, index) => (
          <CardArticle article={article} index={index} />
        ))}

        <ButtonLoading
          disabled={hasMoreNews}
          loading={fetchingMore}
          onClick={() => this.props.fetchMoreNews(pageSize)}
        >
          {hasMoreNews ? 'No More News': 'Show More'}
        </ButtonLoading>
      </>
      )}
    </Col>
  )

  render() {
    const { hasMoreNews, fetchingNews, fetchingMore, news, pageSize, sources } = this.props

    return (
      <Row className="justify-content-center">
        {this.renderNews(hasMoreNews, fetchingNews, news, fetchingMore, pageSize, sources)}
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
