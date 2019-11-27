import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ACIndexItem from "./auto_complete_index_item";

export default class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };

    // this.selectTitle = this.selectTitle.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value});
  }

  matches() {
    const matches = [];
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
      return (
        // <li key={i} onClick={this.selectTitle}>{result}</li>
        <ACIndexItem key={i} video={result}/>
      );
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
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
                {results}
            </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>
    );
  }
};



