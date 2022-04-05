import React,{Component} from 'react'
import CommentBox from './CommentBox';
import CommentList from "./CommentList";

class App extends Component{

  state = {
    messages:[
      'React seems like a really cool library',
      'Makes development so easy',
      'I want to percieve a career in React',
      'It was hard to follow at first but now i love it'
    ]
  }

  addComment = (message) => {
    this.setState(function(prevState){
      var messages = prevState.messages.concat();
      messages.push(message)
      return{
      messages : messages
    }
  });
  }

  deleteComment=(index)=>{
    this.setState(function(prevState){
      var messages=prevState.messages.concat();
      messages.splice(index,1)
      return{
        messages: messages
      }
    })
  }

  render(){
    return(
      <div>
        <CommentBox addComment={this.addComment}/>
        <CommentList messages={this.state.messages}
                      deleteComment={this.deleteComment}/>
        
      </div>
    )
  }
}



export default App;
