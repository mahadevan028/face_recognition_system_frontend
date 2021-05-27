import React from 'react';


class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            signInEmail:'',
            signInPassword:''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    onEmailChange = function(event) {
      this.setState({signInEmail:event.target.value});    
    }

    onPasswordChange = function(event){
        this.setState({signInPassword:event.target.value});
    } 

    onSubmit = function () {
        
        let parent = this.props;
        fetch('https://mighty-meadow-58043.herokuapp.com/signin', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                if (!!data.id) {
                    parent.onSignInCallback(data);
                    parent.onRouteChange('home');
                }
            })
        
    }
    render() {
        const { onRouteChange } = this.props;
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input onChange = {this.onEmailChange} 
                                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                  type="email" 
                                  name="email-address" 
                                  id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input onChange={this.onPasswordChange}
                                 className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                 type="password" 
                                 name="password" 
                                 id="password" />
                            </div>
                            {/* <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label> */}
                        </fieldset>
                        <div className="">
                            <input
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Sign in"
                                onClick={this.onSubmit} />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => onRouteChange('register')} className="f6 link dim black db grow pointer">Register</p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
   
}

export default SignIn;