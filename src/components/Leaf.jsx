import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    padding: 20px 0 20px 30px;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 5px;
        background: palevioletred;
    }

    &::after {
        content: '';
        position: absolute;
        left: -5.5px;
        top: 50%;
        transform: translateY(-50%);
        height: 15px;
        width: 15px;
        background: palevioletred;
        border-radius: 50%;
    }
`;

const Title = styled.h3`
    margin: 0 0 15px;
`;

const Desc = styled.p`
`;

class Leaf extends PureComponent {
    render() {
        return (
            <Container>
                <Title>標題</Title>
                <Desc>內容內容內容內容</Desc>
                <span>
                    Project Link: <a href="https://www.google.com.tw/">{'https://www.google.com.tw'}</a>
                </span>
            </Container>
        );
    }
}

export default Leaf;
