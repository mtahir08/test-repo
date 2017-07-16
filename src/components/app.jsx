import React, { Component } from "react";

import ShowUsers from '../containers/showUsers';
import AddUsers from '../containers/addUsers';

class App extends Component {

    constructor(props) {
        super(props);
    }
    editUser(user, index){
        this.props.editThisUser(user, index)
    }
    renderUser() {
        let user = this.props.user;
        let index = this.props.index;
        return (
            <div>
                <span onClick={() => this.props.onTodoClick(user)}>{user.first} {user.last}</span>
                <span >{user.age}</span>
                <button onClick={() => this.editUser(user, index)}>Edit</button>
                <button onClick={() => this.props.deleteUser(user, index)}>Delete</button>
            </div>
        )
    }
    render() {
        return (this.renderUser())
    }
}
export default App;

// Will use later
// store.dispatch((dispatch) => {
//     dispatch({ type: "FETCH_USER_STAR" });
//     axios.get("http://rest.leasdafrncode.academy/api/wstern/users")
//         .then(response => {
//             dispatch({ type: "RECEIVED_USER", payload:response.data })
//         })
//         .catch(err=>{
//             dispatch({ type: "FETCH_USER_ERROR", payload:err })

//         })

// })
