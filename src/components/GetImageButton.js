import React, { Component } from 'react';
class GetImageButton extends Component{
  render(){
    return(
      <div>
       <button onClick={this.props.handleClick}>Click!</button>
       </div>
     )
   }
 }
 export default GetImageButton
