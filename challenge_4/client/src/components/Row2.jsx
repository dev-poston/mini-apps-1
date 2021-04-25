import React from 'react';
import Row2Item from './Row0Item.jsx';

const Row2 = (props) => (
  <tr>
    {props.row.map((item, index) => (
      <Row2Item
        item={item}
        key={index}
      />
    ))}
  </tr>
)

export default Row2;