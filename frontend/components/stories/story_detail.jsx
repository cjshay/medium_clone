import React from 'react';
import CreateStoryFormContainer from './create_story_form_container';

class StoryDetail extends React.Component {
  componentDidMount() {
    this.props.fetchStory(this.props.storyId);
  }
  render() {
    if (this.props.story !== undefined) {
      return (
        <section>
          <ul className="story-detail">
            <li className="story-detail-title">{this.props.story.title}</li>
            <li className="story-detail-content" >{this.props.story.content}</li>
          </ul>
          
          <CreateStoryFormContainer />
        </section>

      );

    } else {
      return(<div>Loading...</div>);
    }
  }
}

export default StoryDetail;