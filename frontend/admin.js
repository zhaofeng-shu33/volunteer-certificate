import React from 'react'
export default class Admin extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      token: "",
      file: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleImageSelect = this.handleImageSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    let new_json = {}
    new_json[e.target.name] = e.target.value;
    this.setState( new_json );
  }
  handleImageSelect(e) {
    this.setState({file: e.target.files[0]});
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
    <div>
      Admin page
      <form onSubmit={this.handleSubmit}>
      <div className="input-group mb-3">
      <div className="input-group-prepend"><span className="input-group-text">
        Token</span></div>
      <input type="password" id="token" className="form-control" name="token"
        value={ this.state.token } onChange={this.handleChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="template">Template Image</label>
        <input type="file" className="form-control-file"
               id="template" accept=".jpg"
               onChange={this.handleImageSelect}/>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      </form>
    </div>
    )
  }
}

