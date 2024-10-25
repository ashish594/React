import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = (props) => {
  const videoItems = props.videos.map(
    (video) => {
      return (
        <VideoListItem
          onVideoSelect={props.onVideoSelect}
          key={video.etag}
          video={video}
        />
      );
    }
    //bindhu reddy is clever
    //hari is also clever
  );

  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;
//newline
