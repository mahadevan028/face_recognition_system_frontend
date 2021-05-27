import React from 'react';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state={
            registerName:'',
            registerEmail:'',
            registerPassword:''
        }
       this.onNameChange = this.onNameChange.bind(this);
       this.onEmailChange = this.onEmailChange.bind(this);
       this.onPasswordChange = this.onPasswordChange.bind(this);
       this.onRegisterChange = this.onRegisterChange.bind(this);
    }

    onNameChange = function(event){
         this.setState({registerName: event.target.value});
    }

    onEmailChange = function(event){
        this.setState({registerEmail: event.target.value});
    }

    onPasswordChange = function(event){
        this.setState({registerPassword: event.target.value});
    }

    onRegisterChange = function () {
        if (!!this.state.registerName && !!this.state.registerEmail && !!this.state.registerPassword) {
            let parent = this.props;
            fetch('https://mighty-meadow-58043.herokuapp.com/register', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.state.registerName,
                    email: this.state.registerEmail,
                    password: this.state.registerPassword
                })
            })
                .then(function (res) {
                    return res.json();
                })
                .then(function (data) {
                    if (!!data.id) {
                        parent.onRegisterCallback(data);
                        parent.onRouteChange('home');
                    }
                });
        }
    }

    render() {
        // const {onRouteChange} = this.props;
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                                <input onChange = {this.onNameChange}  
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="register-name" />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input onChange = {this.onEmailChange}  
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="register-email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input  onChange = {this.onPasswordChange} 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="register-password" />
                            </div>
                        </fieldset>
                        <div className="">
                            <input
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Register"
                                onClick={this.onRegisterChange} />
                        </div>
                    </div>
                </main>
            </article>
        );
    }
    
}

export default Register;