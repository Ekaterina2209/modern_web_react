import { Link } from 'react-router-dom';
import * as React from 'react';

function LongMenu() {
return (
  <aside>
    <h2>Лабораторный работы</h2>
    <ul>
      <li><Link to='1'>Лабораторная 1</Link></li>
      <li><Link to='2'>Лабораторная 2</Link></li>
      <li><Link to='3'>Лабораторная 3</Link></li>
      <li><Link to='4'>Лабораторная 4</Link></li>
      <li><Link to='5'>Лабораторная 5</Link></li>
      <li><Link to='6'>Лабораторная 6</Link></li>
      <li><Link to='7'>Лабораторная 7</Link></li>
      <li><Link to='7'>Лабораторная 8</Link></li>
      <li><Link to='7'>Лабораторная 9</Link></li>
    </ul>
  </aside>
  )
}

export default LongMenu