import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from './actions'
import { Badge,
  Card,
  CardBody,
  CardText,
  Row,
  Col,
  DropdownToggle,
  DropdownMenu,
  DropdownItem ,
  UncontrolledButtonDropdown
} from 'reactstrap';
import "./style.scss"

class Main extends Component {
  state = {
    dropdownOpen: false
  }

  componentDidMount() {
    this.props.fetchNews()
  }

  renderDate = (date) => {
    const newDate = date.split("T")[0].split("-")
    return `${newDate[2]}/${newDate[1]}/${newDate[0]}`
  }

  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  render() {
    const { news } = this.props;
    const { dropdownOpen } = this.state;

    return (
      <Row className="justify-content-center">
        <Col xs={6}>
          <Col xs={12}>
            <Row>
              <h2>News</h2>
              <UncontrolledButtonDropdown className="button-dropdown">
                <DropdownToggle caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </Row>
          </Col>
            {news.articles.map((article, index) => (
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
                        <small className="text-muted">{this.renderDate(article.publishedAt)}</small>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <Badge color="secondary">{article.source.name}</Badge>
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
    );
  }
}

const mapStateToProps = state => {
  const { main } = state;

  return { ...main }
};

const mapDispatchToProps = {
  fetchNews
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
