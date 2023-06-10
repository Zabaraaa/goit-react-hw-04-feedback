import React from "react";
import Stat from "./statistics/statistics.jsx";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions.jsx";
import Section from "./section/section.jsx";
import Notifications from "./notifications/notifications.jsx";

export class App extends React.Component {
  state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    addGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }))
    }

    addNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }))
    }

    addBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }))
    }
    
    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad
    }

    countPositiveFeedbackPercentage() {
        const total = this.countTotalFeedback();
        const percentage = (this.state.good / total) * 100 || 0;
        return percentage.toFixed(2)
    }

  render() {
    return (

<div style={{
          // height: '100vh',
          paddingLeft: 15,
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}>

            <Section
                title="Please leave feedback">
                
                <FeedbackOptions
                    addGood={this.addGood}
                    addNeutral={this.addNeutral}
                    addBad={this.addBad}
            />
            </Section>

            <Section title="Statistics">
                {this.countTotalFeedback() === 0? (<Notifications message="There is no feedback"/>) : 

                <Stat good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    countTotalFeedback={this.countTotalFeedback()}
                    countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
                />}
            </Section>
            </div>
    );
  }
};
