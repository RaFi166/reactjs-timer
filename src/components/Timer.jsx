import React, { Component } from 'react'

class Timer extends Component {

    constructor(){
        super()
        this.state={
            count : 0,
        }
    }

    decrementEvent=()=>{
            if (this.state.count > 0){
                this.setState ({
                count : this.state.count -1,
            });
        }
    }

    incrementEvent= () => {
        this.setState ({
            count : this.state.count +1
        });
    }

    startTimer=() => {
       if(this.state.count >0) {
          setInterval(() => {
              this.setState({
                  count : this.state.count +1,
                  
              },
              
              );
              
          }, 1000);
       }
    }
    
    render() {
        return (
            <div className='container'>
                <h1 style={{fontSize:"80px"}}>React Timer</h1>
                <div className='button'>
                    
                    <button onClick={this.decrementEvent}>-</button>
                    <span>{this.state.count}</span>
                    <button onClick={this.incrementEvent}>+</button>

                </div>
                <div className="lowerbutn">
                    <button onClick={this.startTimer}>Start</button>
                    <button onClick={this.stopTimer}>STOP</button>
                    <button onClick={this.resetTimer}>RESET</button>

                </div>
                
            </div>
        )
    }
}
export default Timer;
