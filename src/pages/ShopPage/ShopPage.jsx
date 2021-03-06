import React, { Component } from 'react';
import SHOP_DATA from './ShopData';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

export default class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionPops }) => (
          <CollectionPreview key={id} {...otherCollectionPops} />
        ))}
      </div>
    );
  }
}
