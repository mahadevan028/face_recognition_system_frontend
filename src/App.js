
import './App.css';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import ImageInput from './components/ImageInput/ImageInput';
import FaceRecogniser from './components/FaceRecogniser/FaceRecogniser';
import Particles from 'react-particles-js';
import React from 'react';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
  apiKey: '1e308045f8e7466fa855a3ccd4ff5eb0'
});

const options = {
  particles: {
    number: {
      value: 50,
      density: {
        value_area: 250,
        enable: true
      }
    }
  }
}

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route:'signin',
  isSignedIn:false,
  userInfo:{
    'id':'',
    'name':'',
    'email':''
  }
}
class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
    this.onInputChange = this.onInputChange.bind(this);
    this.onDetect = this.onDetect.bind(this);
    this.onRouteChange = this.onRouteChange.bind(this);
    this.onSignInCallback=this.onSignInCallback.bind(this);
    this.onRegisterCallback = this.onRegisterCallback.bind(this);
  }

  



  onInputChange = function (event) {
    this.setState({ input: event.target.value });
  }

  calculateFaceLocation = function (data) {
    const image = document.getElementById('imageInput')
    const width = Number(image.width);
    const height = Number(image.height);
    
    return{
      leftColumn: data.left_col * width,
      rightColumn: width - (data.right_col * width),
      topRow: data.top_row * height,
      bottomRow: height - (data.bottom_row * height)
    }
  }

  displayFaceBox = function(dimensions){ 
   this.setState({box:dimensions});
  }


  onDetect = function () {
    this.setState({ imageUrl: this.state.input });
    let parentContext = this;
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function (response) {
        const boundingBoxData = response.outputs[0].data.regions[0].region_info.bounding_box;
        parentContext.displayFaceBox(parentContext.calculateFaceLocation(boundingBoxData));

      })
      .catch(function (error) {
        console.log(error)
      });

  }

  onRouteChange = function(state){
    if(state==='home'){
      this.setState({isSignedIn:true});
    }else{
      this.setState(initialState);
    }
    this.setState({route:state});
  }

  onSignInCallback = function(data){
    this.setState(
      {
        userInfo:{
          id:data.id,
          name:data.name,
          email:data.email
        }
      }
    )
    
  }

  onRegisterCallback = function(data){
    this.setState(
      {
        userInfo:{
          id:data.id,
          name:data.name,
          email:data.email
        }
      }
    )
    
  }



  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={options} />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} userInfo={this.state.userInfo}/>  
        {this.state.route === 'signin' ?
          <SignIn onRouteChange={this.onRouteChange} onSignInCallback={this.onSignInCallback}/>
          : (this.state.route === 'register' ?
            <Register onRouteChange={this.onRouteChange} onRegisterCallback={this.onRegisterCallback}/>
            : <div>
              <ImageInput onInputChange={this.onInputChange} onDetect={this.onDetect} />
              <FaceRecogniser dimensions={this.state.box} imageUrl={this.state.imageUrl} />
            </div>)
        }
      </div>
    );
  }
}

export default App;
