import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTsearch from "youtube-api-search";
import VideoList from "./components/video_list";
import SearchBar from "./components/search_bar";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyAO9yoZc-n59He_8qdeVPv3xc-LXN_ngY4";

// creating a component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch("stephen curry");
  }

  videoSearch(term) {
    YTsearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  }
  //how
  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => {
            this.setState({ selectedVideo });
          }}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// setting the created component to display on browser
ReactDOM.render(<App />, document.querySelector('.container'));

console.log('index.js');

// creating a component
// creating a component
// creating a component
//bindhu reddy is clever
//ashish reddy is clever
