import React from 'react';
import Row3Item from './Row0Item.jsx';

const Row3 = (props) => (
  <tr>
    {props.row.map((item, index) => (
      <Row3Item
        item={item}
        key={index}
      />
    ))}
  </tr>
)

export default Row3;