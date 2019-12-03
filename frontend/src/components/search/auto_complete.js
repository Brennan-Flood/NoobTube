import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ACIndexItem from "./auto_complete_index_item";

export default class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value});
  }

  matches() {
    let matches = [];
    if (this.state.inputVal.length === 0) {
      return this.props.videos;
    }

    this.props.videos.forEach(video =>{
      const sub = video.title.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(video);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches; 
  }

  // selectTitle(event) {
  //   const title = event.currentTarget.title.innerText; 
  //   this.setState({inputVal: title});
  // }

  render() {

    const results = this.matches().map((result, i) => {
        if (result !== 'No matches') {
      return (
        // <li key={i} onClick={this.selectTitle}>{result}</li>
        <ACIndexItem key={i} video={result}/>
      )} else {
        return <div>No Matches</div>
      }
    });

    return (
      <div> 
        <div className="auto">
           <input 
           className="search-input"
            onChange={this.handleInput}
            value={this.state.inputVal}
            placeholder='Search...'
           />
          <ul className="search-results">
            <ReactCSSTransitionGroup 
              transitionName="auto"
              transitionEnterTimeout={100}
              transitionLeaveTimeout={100}>
                {results}
            </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>
    );
  }
};



