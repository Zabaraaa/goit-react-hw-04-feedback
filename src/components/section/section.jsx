import React from "react";
import PropTypes from 'prop-types'
import { Title } from "./section.styled";

const Section = ({ title, children }) => 
    <div>
        <Title>
            {title}
        </Title>
        {children}
    </div>


export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
}