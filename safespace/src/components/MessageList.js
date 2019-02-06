import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchList, addMsg, updateMsg, deleteMsg} from '../actions';
import Message from './Message';
import MessageForm from './MessageForm';
import styled from 'styled-components';

const Main = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 900px;
    input, button {
        width: 26rem;
        padding: .5rem;
        border-radius: 8px;
    }
    button {
        background-image: linear-gradient(to bottom right, #4fa49a, #4361c2);
        border: 1px solid white;
        
        color: white;
    }
    .msg-form{
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        .opened {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
        .unhidden {
            display: flex;
            flex-direction: column; 
        }
        .bot-button {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }

    }

`

class MessageList extends Component {

    state = {
        msgs: []
    }

    componentWillMount(){
        this.props.fetchList(window.localStorage.getItem('userId'));
    }

    addMsg = (e, x) => {
        e.preventDefault();
        this.props.addMsg(window.localStorage.getItem('userId'), x);
        this.props.fetchList(window.localStorage.getItem('userId'));
    }

    deleteMsg = (e, id) => {
        e.preventDefault();
        console.log(id);
        this.props.deleteMsg(id, window.localStorage.getItem('userId'));
    }

    updateMsg = (id, x) => {
        console.log(id);
        this.props.updateMsg(id, window.localStorage.getItem('userId'), x);
    }

    render(){
        return(
            <Main>
                <MessageForm addMsg={this.addMsg}/>
                <div className='msg-list'>
                    {this.props.msgs.map(msg => {
                        return <Message 
                            msg={msg}
                            deleteMsg={this.deleteMsg}
                            updateMsg={this.updateMsg}
                            key={msg.id}
                        />
                    })}
                </div>
            </Main>
        )
    }
}

const mapStateToProps = state => {
    return {
        fetchingList: state.listReducer.fetchingList,
        addingMsg: state.listReducer.addingMsg,
        updatingMsg: state.listReducer.updatingMsg,
        deletingMsg: state.listReducer.deletingMsg,
        msgs: state.listReducer.msgs,
        error: state.listReducer.error,
        id: state.signupReducer.id
    }
}

export default connect(mapStateToProps, {fetchList, addMsg, updateMsg, deleteMsg})(MessageList);