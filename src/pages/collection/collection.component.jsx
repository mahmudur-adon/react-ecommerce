import React from 'react';
import {connect} from 'react-redux';

import CollctionItem from '../../components/collection-item/collection-item.component';

import {selectCollection} from '../../redux/shop/shop.selector.js'

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    const { title , items} = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollctionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};


//ownProps hocche jei component e connect kortesi,tar prop, ei khetre match 
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage);