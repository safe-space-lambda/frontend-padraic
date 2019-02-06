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

    render(){
        return(
            <div className='msg-form'>
                <button className={this.state.formOpen} onClick={this.formToggle}>New Message</button>
                <form className={`add-msg ${this.state.formClass}`} onSubmit={this.props.addMsg}>
                    <textarea
                        onChange={this.handleInputChange}
                        placeholder='Enter New Message'
                        value={this.state.name}
                        name='text'
                        type='text'
                        rows='4'
                    ></textarea>
                    <button className='bot-button' type='submit'>Add Message</button>
                </form>
            </div>
        )
    }
}

export default MessageForm;