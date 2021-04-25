import React from 'react';
import Row0Item from './Row0Item.jsx';

const Row0 = (props) => (
  <tr>
    {props.row.map((item, index) => (
      <Row0Item
        item={item}
        key={index}
      />
    ))}
  </tr>
)

export default Row0;