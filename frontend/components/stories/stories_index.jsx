import React from 'react';
import { StoryIndexItem } from './story_index_item';

const StoryIndexItems = ({ stories, createLike, deleteLike, currentUser, deleteStory }) => {
  return (
  <ul>
    { stories.sort().reverse().map(story => <StoryIndexItem
      key={ story.id }
      story={ story }
      deleteStory={ deleteStory }
      currentUser= { currentUser }
      deleteLike={ deleteLike }
      createLike={ createLike }/>) }
  </ul>
  );
};

class StoriesIndex extends React.Component{
  componentDidMount() {
    this.props.fetchStories();
  }

  render() {


    if (this.props.stories === undefined || this.props.stories.length === 0) {
      return (<div></div>);
    } else {
      return (
        <section className="main-content-stories">
          <StoryIndexItems
            currentUser= {this.props.currentUser}
            stories={ this.props.stories }
            deleteStory= { this.props.deleteStory }
            deleteLike= { this.props.deleteLike }
            createLike={ this.props.createLike }/>
        </section>
      );
    }
  }
}

export default StoriesIndex;
