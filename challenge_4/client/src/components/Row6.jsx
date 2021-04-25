import React from 'react';
import Row6Item from './Row0Item.jsx';

const Row6 = (props) => (
  <tr>
    {props.row.map((item, index) => (
      <Row6Item
        item={item}
        key={index}
      />
    ))}
  </tr>
)

export default Row6;