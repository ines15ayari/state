import React, {Component} from 'react';


export default class Profile extends Component {
    state = {
      Person: { fullName: "Ines Ayari", bio:"I am a pre-engineering student",imSrc:'https://image.freepik.com/vecteurs-libre/fille-souriante-avatar_102172-32.jpg'
      ,profession:'student' },
       isShow:false
      };
  
       handleChange=()=>{
        this.setState({isShow:!this.state.isShow})
       };
   
    render() {
      return (
          <div>
        <button onClick={this.handleChange}>Enter</button>
       {this.state.isShow ? 
            <div className="text" >
            <h1> {this.state.Person.fullName}</h1>
            <h2> {this.state.Person.bio} </h2>
            <h3> {this.state.Person.profession}</h3>
            <h1> {this.state.Person.imgSrc}</h1>
            </div> 
     
      : null  }
</div>
      ) 
  
    }
}
    
  