import React from 'react';

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.jsx';

import { selectCollectionForPreview } from "../../redux/shop/shop.selector";

import './collection-overview.styles.scss';

const CollectionsOverview = ({ collection }) => (
  <div className="collections-overview">
    {collection.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collection: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);