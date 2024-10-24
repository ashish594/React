import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  //how
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  //bindhu reddy is clever
  //akshaya is clever
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};
//newline
//fifth line
//fourth

export default VideoDetail;

//bindhu reddy is clever
