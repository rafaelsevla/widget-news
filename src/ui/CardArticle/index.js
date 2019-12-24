import React from 'react'
import { 
  Badge,
  Card,
  CardBody,
  CardText,
  Row,
  Col,
} from 'reactstrap'
import { renderDate } from 'utils/functions'

const CardArticle = ({ article, index }) => (
  <Row className="pt-3" key={index}>
    <Col xs={12}>
      <Card>
        <CardBody>
          <CardText className="font-weight-bold">
            <a href={article.url} target="_blank" className="url-article">
              {article.title}
            </a>
            </CardText>
          <CardText>
            <small className="text-muted">{renderDate(article.publishedAt)}</small>
            &nbsp;
            &nbsp;
            &nbsp;
            <Badge color="secondary">{article.source.name}</Badge>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  </Row>
)

export default CardArticle 