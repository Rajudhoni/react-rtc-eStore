import React,{useState} from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collections/collection-preview';

function ShopPage() {
    const [Collections,setCollections] = useState(SHOP_DATA);
    console.log("collection ArrayList",Collections);
    return (
        
        <div className='shop-page'>
           {
            Collections.map(({id, ...otherCollectionProps}) => (
                
               <CollectionPreview key={id} {...otherCollectionProps} />
            ))
           }
        </div>
    )
}

export default ShopPage;
