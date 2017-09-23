import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
   // const video = props.video; by ES6 we can directly include {video} as props & no need to declare explicitly
   const imageUrl="video.snippet.thumbnails.high.url";
return (
    <li onClick = {() => onVideoSelect(video)} className="list-group-item">

        <div className="video-list media">  

            <div className="media-left">
                <img className="media-object" src={imageUrl}/>
            </div>

            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
            
        </div>
    </li>
    );

};

export default VideoListItem; 