import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 1080px;
    width: 100%;
    margin: 0 auto;
`;

export default function App({ children }) {
    return (
        <Container>{children}</Container>
    );
}
