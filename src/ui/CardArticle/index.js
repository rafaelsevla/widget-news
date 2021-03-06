import React from 'react'
import t from 'prop-types'
import {
  Badge,
  Col,
  Card,
  CardBody,
  CardText,
  Row
} from 'reactstrap'
import { renderDate } from 'utils/functions'

const CardArticle = ({ article }) => (
  <Row className='pt-3'>
    <Col xs={12}>
      <Card>
        <CardBody>
          <CardText className='font-weight-bold'>
            <a
              href={article.url}
              target='_blank'
              className='url-article'
              rel='noopener noreferrer'
            >
              {article.title}
            </a>
          </CardText>
          <CardText>
            <small className='text-muted'>{renderDate(article.publishedAt)}</small>
            &nbsp;
            &nbsp;
            &nbsp;
            <Badge color='secondary'>{article.source.name}</Badge>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  </Row>
)

CardArticle.propTypes = {
  article: t.object.isRequired
}

export default CardArticle
