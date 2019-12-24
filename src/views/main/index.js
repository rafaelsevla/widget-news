import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from './actions'
import {
  Row,
  Col,
  DropdownToggle,
  DropdownMenu,
  DropdownItem ,
  UncontrolledButtonDropdown
} from 'reactstrap';
import { CardArticle } from 'ui'
import "./style.scss"

class Main extends Component {
  state = {
    dropdownOpen: false
  }

  componentDidMount() {
    this.props.fetchNews()
  }

  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  render() {
    const { news } = this.props;

    return (
      <Row className="justify-content-center">
        <Col xs={6}>
          <Col xs={12}>
            <Row>
              <h3>News</h3>
              <UncontrolledButtonDropdown className="button-dropdown">
                <DropdownToggle caret>
                  Filter By Source
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Header</DropdownItem>
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </Row>
          </Col>
            {news.articles.map((article, index) => (
              <CardArticle article={article} index={index} />
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
