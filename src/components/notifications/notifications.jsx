import React from "react";
import PropTypes from 'prop-types'
import { Text } from "./notifications.styled";

const Notifications = ({ message }) =>
    <Text> {message} </Text>

export default Notifications;

Notifications.propTypes= {
message: PropTypes.string.isRequired,
}