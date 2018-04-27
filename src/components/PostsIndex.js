import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
class PostsIndex extends Component {
  componentDidMount() {
    //this lifescycle method is automatically ran by react immediately after the component is added to the dom
    this.props.fetchPosts();
  }

  render() {
    return <div>Posts Index</div>;
  }
}

export default connect(null, { fetchPosts })(PostsIndex); //doing this instead of mapDispatchToProps. fetchPosts is an action creator
