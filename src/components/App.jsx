import React, { Component } from 'react';
import { Section } from './Section/Section'; 
import { FeedBack } from './FeedBack/FeedBack';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Container } from './App.styled'; 

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const votes = Object.values(this.state);
    return votes.reduce((acc, vote) => acc + vote, 0);
  };

  countPositiveFeedbackPercentage = (total, good) => {
    const percentage = Math.round((good / total) * 100);
    return percentage;
  };

  handleClick = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalVotes = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(
      totalVotes,
      good
    );
    const options = Object.keys(this.state);

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedBack options={options} handleClick={this.handleClick} />
        </Section>

        <Section title="Statistics">
          {!totalVotes ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalVotes={totalVotes}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </Container>
    );
  }
}
