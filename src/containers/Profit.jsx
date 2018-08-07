import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import CateTitle from '../components/CateTitle';

class Profit extends PureComponent {
    render() {
        return (
            <div>
                <CateTitle content="Skill"></CateTitle>
                <CateTitle content="Career"></CateTitle>
            </div>
        );
    }
}

export default Profit;
