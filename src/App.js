import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkComponent/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin'
import Register from './components/Register/Register'


const particleOptions ={
    particles: {
      number:{
        value: 60,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
}



const initialState = {
      input: '',
      imgURL: '',
      box: '',
      route: 'signin',
      isSignIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: '',
        joined: ''
      }
    };

class App extends Component {
  constructor(){
    super();
    this.state= initialState;
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }


  displayFaceBox = (box) => {
    this.setState({box: box})
  }

  calculateFaceLocation = (data) =>{
    const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
    const img = document.getElementById('inputimage');
    const width = Number(img.width);
    const height = Number(img.height);
    return{
      leftCol: width * clarifaiFace.left_col,
      rightCol: width * (1-clarifaiFace.right_col),
      topRow: height * clarifaiFace.top_row,
      bottomRow: height * (1-clarifaiFace.bottom_row)
    }
  }

  onButtonSubmit = () => {
    this.setState({imgURL: this.state.input});
    fetch('http://localhost:3000/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })})
      .then(response => response.json())
      .then(response => {
        if(response){

          fetch('http://localhost:3000/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })})
          .then(response => response.json())
          .then(count=> {
            this.setState(Object.assign(this.state.user, {entries: count} ))
          })
        }
      })
  }

  onRouteChange =(route) =>{ 
    if(route==='home')
      this.setState({isSignIn: true});
    else if(route==='signout')
      this.setState(initialState);

    this.setState({route: route});
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  render() {
    const {imgURL, route, box, isSignIn} = this.state;
    return (
      <div className="App">
        <Particles className='particle'
        params={particleOptions}
        />
        <Navigation isSignIn={isSignIn} onRouteChange={this.onRouteChange}/>
        {
          route === 'home'  
          ?<div>
            <Logo />
            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
            <ImageLinkForm onInputChange={this.onInputChange}
                           onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition box={box} imgURL={imgURL}/>
          </div>
          :(
            route==='signin'
            ?<Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            :<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
           )
        }
      </div>
    );
  }
}

export default App;
