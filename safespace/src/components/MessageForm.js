import React, {Component} from 'react';




class MessageForm extends Component {

    state = {
        text: '',
        formClass: 'hidden',
        formOpen: 'closed'
    }

    input = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    formToggle = e => {
        e.preventDefault();
        this.state.formClass === 'hidden'
            ? this.setState({
                ...this.state,
                formClass: 'unhidden',
                formOpen: 'opened'
            })
            :
            this.setState({
                ...this.state,
                formClass: 'hidden',
                formOpen: 'closed'
            })
    };

    openForm = this.state.formClass !=='hidden'
        ? 'opened'
        : ''
    ;

    addMsg = e => {
        e.preventDefault();
        this.props.addMsg({text: this.state.text});
        this.setState({
            ...this.state,
            text: ''
        })
    }

    render(){
        return(
            <div className='msg-form'>
                <button className={`top-button ${this.state.formOpen}`} onClick={this.formToggle}>new message</button>
                <form className={`add-msg ${this.state.formClass}`} onSubmit={this.addMsg}>
                    <textarea
                        onChange={this.input}
                        placeholder='enter new message'
                        value={this.state.text}
                        name='text'
                        type='text'
                        rows='4'
                    ></textarea>
                    <button className='bot-button' type='submit'>add message</button>
                </form>
            </div>
        )
    }
}

export default MessageForm;