import React from "react";
import Stat from "./statistics/statistics.jsx";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions.jsx";
import Section from "./section/section.jsx";
import Notifications from "./notifications/notifications.jsx";
import { useState } from "react";

export default function App () {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const addGood = () => {
       setGood(prevState => prevState + 1)
        }

   const addNeutral = () => {
        setNeutral(prevState => prevState + 1)
    }

    const addBad = () => {
       setBad(prevState => prevState + 1)
    }
    
   const countTotalFeedback = () => {
       return good + neutral + bad;
    }

   const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
        const percentage = (good / total) * 100 || 0;
        return percentage.toFixed(2)
    }

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
                    addGood={() => addGood()}
                    addNeutral={() => addNeutral()}
                    addBad={() => addBad()}
                />
            </Section>

            <Section title="Statistics">
                {countTotalFeedback() === 0 ? (<Notifications message="There is no feedback" />) :

                    <Stat good={good}
                        neutral={neutral}
                        bad={bad}
                        countTotalFeedback={countTotalFeedback()}
                        countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
                    />}
            </Section>
        </div>
    );
};
