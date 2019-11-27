import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import CreateComment from './comment_create_form';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user, 
    // video: state.entities.videos.all[this.props.videoId],
    newComment: state.entities.comments.new 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createComment: data => dispatch(createComment(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);