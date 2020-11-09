import React from 'react';
import './collection-preview.scss';
import CollectionItem from '../collection-item/collection-item';

function CollectionPreview({title,items}) {
    console.log("items of collection", items);
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((item,indx) => indx < 4).map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps} />
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview;
