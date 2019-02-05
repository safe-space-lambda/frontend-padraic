import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchList, addMsg, updateMsg, deleteMsg} from '../actions';
import Message from './Message';

class MessageList extends Component {

    // state = {
    //     msgs: []
    // }

    componentDidMount(){
        this.props.fetchList();
    }

    render(){
        return(
            <div className='msg-list'>
                {/* {this.props.msgs.map(msg => {
                    return <Message 
                        msg={msg}
                        deleteMsg={this.deleteMsg}
                    />
                })} */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fetchingList: state.fetchingList,
        addingMsg: state.addingMsg,
        updatingMsg: state.updatingMsg,
        deletingMsg: state.deletingMsg,
        msgs: state.msgs,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchList, addMsg, updateMsg, deleteMsg})(MessageList);