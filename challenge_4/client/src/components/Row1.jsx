import React from 'react';
import Row1Item from './Row0Item.jsx';

const Row1 = (props) => (
  <tr>
    {props.row.map((item, index) => (
      <Row1Item
        item={item}
        key={index}
      />
    ))}
  </tr>
)

export default Row1;