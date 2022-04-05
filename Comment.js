import React, { Component } from 'react'
import message from './message.png'
import trash from './trash.png'



class Comment extends Component {
    deleteComment=()=>{
        this.props.deleteComment(this.props.index);
    }
  render() {
    return (
        <table className="comment">
            <tbody>
                <tr>
                    <td className="photo">
                        <img src={message} width="50" height="50" />
                    </td>
                    <td className="message">
                        {this.props.message}
                    </td>
                    <td className="delete" onClick={this.deleteComment}>
                        <img src={trash} width="25" height="25" />
                        
                    </td>
                </tr>
            </tbody>
        </table>
    )
  }
}

export default Comment
