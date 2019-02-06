import React, {Component} from 'react';

class Message extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: props.msg.text,
            newText: '',
            formClass: 'hidden'
        }
    }

    input = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    formToggle = e => {
        e.preventDefault();
        this.state.formClass === 'hidden'
            ? this.setState({
                ...this.state,
                formClass: 'unhidden'
            })
            :
            this.setState({
                ...this.state,
                formClass: 'hidden'
            })
    };


    updateMsg = e => {
        e.preventDefault();
        this.props.updateMsg(this.props.msg.id, window.localStorage.getItem('userId'), {text: this.state.newText});
        this.setState({
            ...this.state,
            formClass: 'inactive'
        });
    }
    
    render(){
        return (
        <div>
            <div className='top-box'>
                <div>
                    <p>{this.state.text}</p>
                </div>
                <div className='button-box'>
                    <button onClick={this.formToggle}>Update Message</button>
                    <button onClick={e => this.props.deleteMsg(e, this.props.msg.id)}>Delete Message</button>
                </div>
            </div>
            <form className={`update-form ${this.state.formClass}`} onSubmit={e => this.updateMsg(e, this.props.msg.id, {text: this.state.text})}>
                    <input
                        onChange={this.input}
                        placeholder='New Message Text'
                        value={this.state.newText}
                        name='newText'
                        type='text'
                    />
                    <button type='submit'>Submit</button>
            </form>
        </div>
    )}
}

export default Message;