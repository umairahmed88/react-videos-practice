import React from 'react';
import './videoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div className={video.snippet.title} onClick={() => onVideoSelect(video)}>
            <img 
                alt='results' 
                src={video.snippet.thumbnails.medium.url} 
                className='ui image'
            />
            <div className='content'>
                <div className='header'>{video.snippet.title}</div>
            </div>
        </div>
    )
};

export default VideoItem;