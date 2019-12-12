import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.userIconColor = this.userIconColor.bind(this);
    this.getDate = this.getDate.bind(this);
  }

  getDate() {
    let messageDate = new Date(this.props.comment.date);
    let day = messageDate.getDate();
    let year = messageDate.getFullYear();
    let month = messageDate.getMonth();
    let hours = messageDate.getHours();
    let minutes = messageDate.getMinutes();
    let minutesZero;
    let calcedHours = hours % 12
    if (calcedHours === 0) {
      calcedHours += 1
    }

    (minutes < 10 ? minutesZero = "0" : minutesZero = "")
    let half;
    (hours > 12 ? half = 'PM' : half = 'AM');
    return `${month}/${day}/${year} at ${calcedHours}:${minutes}${minutesZero} ${half}`
  }

  userIconColor() {
    if ('abc'.includes(this.props.comment.handle.slice(0, 1).toLowerCase())) {
      return 'rgb(41, 179, 179)';
    } else if ('defg'.includes(this.props.comment.handle.slice(0, 1).toLowerCase())) {
      return 'yellow';
    } else if ('hijk'.includes(this.props.comment.handle.slice(0, 1).toLowerCase())) {
      return 'rgb(221, 55, 77)';
    } else if ('lmnop'.includes(this.props.comment.handle.slice(0, 1).toLowerCase())) {
      return 'rgb(199, 103, 58)'
    } else if ('qrstu'.includes(this.props.comment.handle.slice(0, 1).toLowerCase())) {
      return 'rgb(20, 230, 125)';
    } else if ('vwxyz'.includes(this.props.comment.handle.slice(0, 1).toLowerCase())) {
      return 'rgb(141, 24, 196)';
    }
  }

  render() {
    console.log(this.getDate())
    return (
      <li className="comment">
        <h1 className="comment-icon" style={{background: this.userIconColor()}}>{this.props.comment.handle.slice(0, 1).toUpperCase()}</h1>
        <div className="comment-content">
          <div className="comment-header">
            <Link to={`/user/${this.props.comment.user}`}> <h1 className="comment-author">{this.props.comment.handle}</h1></Link>
            <h1 className="comment-date">{this.getDate()}</h1>
          </div>
        <h1 className="comment-body">{this.props.comment.text}</h1>
        </div>
      </li>
    )
  }
}

export default CommentIndexItem;