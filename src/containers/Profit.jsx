import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import CateTitle from '../components/CateTitle';
import Tree from '../components/Tree';

class Profit extends PureComponent {
    render () {
        return (
            <div>
                <CateTitle content="Skill"></CateTitle>
                <CateTitle content="Career"></CateTitle>
                <Tree></Tree>
            </div>
        );
    }
}

export default Profit;
