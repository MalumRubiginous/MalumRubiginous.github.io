import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Title = styled.h2`
    padding: 0.25em 1em;
    background: palevioletred;
    color: white;
    border-top: 2px solid palevioletred;
    border-bottom: 2px solid palevioletred;
`;

class CateTitle extends PureComponent {
    render() {
        const { content } = this.props;
        return (
            <Title>{content}</Title>
        );
    }
}

export default CateTitle;
