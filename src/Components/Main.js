import React from 'react';
import Button from 'react-bootstrap/Button';
class Main extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        count : 0
    }
  }
    incrementNumber = () => {
        this.setState({count : this.state.count + 1});
    }

    decrementNumber = () => {
        this.setState({count : this.state.count - 1});
    }

    neutralNumber = () => {
        this.setState({count : 0});
    }
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-5" style={{marginTop : '250px', border : '5px solid black', borderRadius : '5px'}}>
                <h1>React Counter</h1>
                <h1>{this.state.count}</h1>
                <Button variant="success" onClick={this.incrementNumber}>Increment</Button>
                <Button variant="danger" onClick={this.decrementNumber}>Decrement</Button>
                <Button variant="primary" onClick={this.neutralNumber}>Neutral</Button>
            </div>
            </div>
        );
    }
}

export default Main;