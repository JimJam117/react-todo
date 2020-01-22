import React from 'react';

class Clock extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            tick : 0,
        }
    }

    // tick will increment the 'tick' value in state
    tick() {
        this.setState(prevState => {
            return({
                tick : prevState.tick + 1,
            }); 
        });
    }

    // every 1000 ms run tick
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    // clean up the interval
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return(<h3>page uptime: {this.state.tick}</h3>);
    }
}

export default Clock;