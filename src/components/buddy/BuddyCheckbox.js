import React from "react";

class Checkbox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true
    };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form>
          <label>
            Kirby
            <input
              name="buddy1"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <label>
            TeddyTalk
            <input
              name="buddy2"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br />
        </form>
      );
    }
  }
  
//   ReactDOM.render(
//     <Checkbox/>,
//     document.getElementById('root')
//   );
  
export default Checkbox;