import React from 'react';
import {Link} from 'react-router';

class CreateStoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      imageFile: "",
      imageUrl: ""
    };
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    let formData = new FormData();
    formData.append("story[title]", this.state.title);
    formData.append("story[content]", this.state.content);
    formData.append("story[image]", this.state.imageFile);
    if (this.props.parentId !== undefined) {
      formData.append("story[parentId]", this.props.parentId);
      formData.append("story[parent_id]", this.props.parentId);
    }
    this.props.createStory(formData).then(_ => {
      if (!_.stories[Object.keys(_.stories)[0]].parent_id)
        this.props.router.push(`/users/${this.props.currentUser.id}`);
    });
    this.setState({title: '', content: '', imageFile: "", imageUrl: ""});

  }

  update(property) {
    return event => this.setState({ [property]: event.target.value});
  }

  updateFile(event) {
    let file = event.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render () {
    if (this.props.currentUser !== null) {
      let previewToggle = "img-preview";
      return (
          <form className="create-story-form" onSubmit={this.handleSubmit}>
            <div className="group">
              <Link to={"/users/" + this.props.currentUser.id}><img className="story-form-image" src={ this.props.currentUser.image_url }/></Link>
              <p><Link to={"/users/" + this.props.currentUser.id}>{this.props.currentUser.username}</Link></p>
            </div>
            <section className="image-container">
              <div className="image-area">
                <input id="image-file-input"
                  type="file"
                  onChange={ this.updateFile }>
                </input>
                <img className={previewToggle} src={ this.state.imageUrl }/>
              </div>
            </section>
            <textarea
              value={this.state.content}
              placeholder="Write Here..."
              onChange={this.update('content')}></textarea>
            <input type="submit" value="Publish"></input>
          </form>
        );
      } else {
        return (<div></div>);
    }
  }
}

export default CreateStoryForm;
