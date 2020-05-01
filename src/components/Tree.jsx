import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Leaf from './Leaf';

const Container = styled.section`
    margin-left: 30px;
`;

class Tree extends PureComponent {
    render() {
        return (
            <Container>
                <Leaf></Leaf>
                <Leaf></Leaf>
                <Leaf></Leaf>
                <Leaf></Leaf>
            </Container>
        );
    }
}

export default Tree;
