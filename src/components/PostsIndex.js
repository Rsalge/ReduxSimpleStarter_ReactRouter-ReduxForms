import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
class PostsIndex extends Component {
  componentDidMount() {
    //this lifescycle method is automatically ran by react immediately after the component is added to the dom
    this.props.fetchPosts();
  }
  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <h3> Posts </h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex); //doing this instead of mapDispatchToProps. fetchPosts is an action creator
