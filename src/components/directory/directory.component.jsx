import React from 'react';
import './directory.styles.scss';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';

import {selectDirectorySections} from '../../redux/directory/directory.selector.js'
import MenuItem from '../menu-item/menu-item.components'

const Directory =({sections}) =>(
    <div className="directory-menu">
    {sections.map(({id, ...SectionProp }) => (
        <MenuItem key={id} {...SectionProp} />
    ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);