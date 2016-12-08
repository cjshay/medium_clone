import React from 'react';
import { Link } from 'react-router';


export const StoryIndexItem = (props) => {
  return (
    <li className="story-item">
      <ul>
        <li>
          <ul className= "story-item-profile group">
            <li>{ props.story.author.username }</li>
          </ul>
        </li>
        <li className="story-item-title">
          <Link
            to={"/story/" + props.story.id}>{props.story.title}
          </Link>
        </li>
        <li className="story-item-content">
          <Link
            to={"/story/" + props.story.id}>{ props.story.content }
          </Link>
        </li>
        <li className="story-detail-link">
          <Link
          to={"/story/" + props.story.id}>Read More...
          </Link>
        </li>
      </ul>
    </li>
  );
};