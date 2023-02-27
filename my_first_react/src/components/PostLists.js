// import modules from react and react-redux
import React, { Component } from "react";
import { connect } from "react-redux";

// import actions and user data
import { fetchPosts, fetchPostsAndUsers } from "../actions";
import UserList from "./UsersLists";

// class to fetch data from API to be displayed on the page
class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

//   component to be rendered if the data is fetched
  renderlist() {
    return this.props.posts.map((post) => (
      <div key={post.id} className="item">
        <i className="large middle aligned user icon" />
        <div className="content">
          <div className="description">
            <h2>{post.title}</h2>
          </div>
          <p>{post.body}</p>
          <UserList userId={post.userId} />
        </div>
      </div>
    ));
  }

//   render data if the data is available
// if not, send null data
  render() {
    if (!this.props.posts) {
      return null
    }
    return (
      <div className="ui relaxed divided list">
        {this.renderlist()}
      </div>
    );
  }
}

// function to map state in this
// module to props in store everytime the state changes
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

// function to connect this component to the store
// so it can use the actions and get data from the store
export default connect(mapStateToProps, { fetchPosts, fetchPostsAndUsers })(
  PostList
);
