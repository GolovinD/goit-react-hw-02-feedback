import React from 'react';

import Section from './Section/Section';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0
  }

handleIncrement = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
      total: prevState.total +1,
    }));
  };
  
countPositiveFeedbackPercentage = () => {
  return Math.round((this.state.good / this.state.total) * 100)
   
};

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
        <FeedbackOptions
          // options={ }
          onLeaveFeedback={this.handleIncrement}
        />
        </Section>
        <Section title="Statistics">
          {this.state.total > 0 ? (
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positiveFeedback={this.countPositiveFeedbackPercentage()}
          />
            ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>)
  }
};

export default App;