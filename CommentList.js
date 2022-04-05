import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
  render() {
      var index=0;
    return (
        <div className='commentList'>
          {
              this.props.messages.map(
                  message=> <Comment key={index} 
                                    message={message}
                                    index={index++}
                                    {...this.props}/>
              )
          }      

        </div>
    )
  }
}

export default CommentList
