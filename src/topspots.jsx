import React from 'react';

export default props => (

<div className='well'>
    <h4>{props.name}</h4>
    <p>{props.description}</p>

<a role='button' className='btn btn-primary' href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`}>Map</a>
</div>

);