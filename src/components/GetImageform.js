import React, { Component } from 'react';
import GetImageButton from './GetImageButton'
import ImageDisplay from './ImageDisplay'
const API_KEY = 'TcFyYuuGotEOTLcS2EnWdjiADxBy3dyNdJ4QP3cE'

class GetImageForm extends Component{
  constructor(props){
    super(props);
    this.state ={
      rover: "Curiosity",
      camera: "NAVCAM",
      images: [],
      sol: 1000,
}
this.fetchRoverImage = this.fetchRoverImage.bind(this)
this.handleRover = this.handleRover.bind(this)
this.handleCamera = this.handleCamera.bind(this)
this.handleSol = this.handleSol.bind(this)
}

componentDidMount(){
  this.fetchRoverImage()
}
fetchRoverImage(){
  this.setState({camera: this.state.camera, rover: this.state.rover, sol: this.state.sol});
  let cam = this.state.camera;                                                                                                                                          
  let rover = this.state.rover
  let sol = this.state.sol
  let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${cam}&api_key=${API_KEY}`;
  fetch(imageUrl)
  .then(res => res.json())
  .then(json =>{
    this.setState({
      images:json.photos
    })
        })
      }


      handleRover(event){
        this.setState({
          rover:event.target.value
      })
    }

    handleCamera(event){
    this.setState({
      camera: event.target.value
    })
  }
  handleSol(event){
    this.setState({
      sol: event.target.value
    })
  }

  render(){
    return(
          <div>
          <label htmlFor="rover">Rover</label>
          <select onChange={this.handleRover} id="rover" value={this.state.rover}>
          <option value="Curiosity">Curiosity</option>
          <option value="Opportunity">Opportunity</option>
                  <option value="Spirit">Spirit</option>
                </select>
                  <label htmlFor="camera">Camera Type</label>
                  <select onChange={this.handleCamera} id="camera" value={this.state.camera}>
                  <option value="fhaz">FHAZ (Front Hazard)</option>
                  <option value="rhaz">RHAZ (Rear Hazard)</option>
                  <option value="navcam">NAVCAM (Navigation Cam)</option>
                </select>
                    <label htmlFor="sol">Martian Sol: 1000-2000</label>
                    <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.sol}/>
                    <GetImageButton handleClick={this.fetchRoverImage} />
                    <ImageDisplay images={this.state.images} />
            </div>
                     )
                   }
                 }

               export default GetImageForm;
