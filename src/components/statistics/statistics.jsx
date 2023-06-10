import React from "react";
import PropTypes from 'prop-types'
import { Statistic } from "./statistics.styled";

const Stat = ({ good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage }) =>
    <div>
        <Statistic>Good: {good} </Statistic>
        <Statistic>Neutral: {neutral} </Statistic>
        <Statistic>Bad:  {bad} </Statistic>
        <Statistic>Total: {countTotalFeedback}</Statistic>
        <Statistic>Positive feedback: {countPositiveFeedbackPercentage}%</Statistic>
    </div>

export default Stat;

Stat.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    countTotalFeedback: PropTypes.number.isRequired,
    countPositiveFeedbackPercentage: PropTypes.number.isRequired,
}