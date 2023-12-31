import React from "react";
import PropTypes from 'prop-types';
import { Button } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ addGood, addNeutral, addBad }) =>
        <div>
            <Button type="button" onClick={addGood} >Good</Button>
            <Button type="button" onClick={addNeutral} >Neutral</Button>
            <Button type="button" onClick={addBad} >Bad</Button>
    </div>

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    addGood: PropTypes.func.isRequired,
    addNeutral: PropTypes.func.isRequired,
    addBad: PropTypes.func.isRequired,
}
