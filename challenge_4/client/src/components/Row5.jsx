import React from 'react';
import Row5Item from './Row0Item.jsx';

const Row5 = (props) => (
  <tr>
    {props.row.map((item, index) => (
      <Row5Item
        item={item}
        key={index}
      />
    ))}
  </tr>
)

export default Row5;