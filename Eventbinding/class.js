import react, {Component} from 'react';

class Name extends Component{
     
    constructor(props){
      super(props)
      this.state={
        message: 'tanveer'
        
      }
      this.state={
        hover:'hovered'
      }
    }
    click(){
       this.setState({
         message:'Yes'
         
       })

    }
    hover(){
      this.setState({
       
        hover:'you can hove'
      })

   }
    render(){
      return(
      
        <div>
        <div>{this.state.message}</div>
        <div>{this.state.hover}</div>
           <button onClick={()=>this.click()}>Click</button>
           <button onMouseEnter={()=>this.hover()}>Hover</button>

        </div>
         
        )
    }
  }

  export default Name;
