import react, {Component} from 'react';

class Name extends Component{
     
    click(){
      alert ('button clicked');
    }
    render(){
      return(
      
        <div>
           <button onClick={this.click}>Click</button>
        </div>
         
        )
    }
  }

  export default Name;
