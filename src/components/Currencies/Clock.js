import { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentDidUpdate() {
    console.log('L\'horloge a été mise à jour');
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;
    return (
      <p style={{ margin: '0.5rem 1rem' }}>{ date.toLocaleTimeString() }</p>
    );
  }
}

export default Clock;
