// importing modules
import React, { Component } from 'react'
import { connect } from "react-redux"

// this class is used to get User list
// from API
class UserList extends Component {
    render() {
        // get data array from props as user
        const { user } = this.props
        if (!user) {
            return null
        }
        return (
            <div className='header'>{user.name}</div>
        )
    }
}

// mapping state and props to the store
// everytime the state changes
// just on the user where the state is changed
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find((user) => user.id === ownProps.userId)
    }
}

// connect the component to the store
export default connect(mapStateToProps)(UserList)