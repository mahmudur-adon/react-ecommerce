import React from 'react';
import {Route} from 'react-router-dom'

import CollectionsOverview from '../../components/collection-overview/collection-overview.component.js';
import CollectionPage from '../../pages/collection/collection.component'

//match.path returns current url

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);



export default ShopPage;