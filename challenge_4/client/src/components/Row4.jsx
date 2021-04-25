import React from 'react';
import Row4Item from './Row0Item.jsx';

const Row4 = (props) => (
  <tr>
    {props.row.map((item, index) => (
      <Row4Item
        item={item}
        key={index}
      />
    ))}
  </tr>
)

export default Row4;