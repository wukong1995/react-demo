import React from 'react';
import PropTypes from 'prop-types';
import wrapper from './wrapper';
import { Link } from 'react-router-dom';


import { add, changeState, setFilter } from '../action/simple';

const Simple1 = (props) => {
  const { dispatch, todos } = props;

  return (
    <div>
      <p>Simple1</p>
      <Link to="/simple2">go simple2</Link>
      <hr />
      <button onClick={() => { dispatch(add('aaa')); }}>Add aaa</button>

      <h2>List:</h2>
      <ul>
        {
          todos.map((todo, index) => {
            if (todo.state) {
              return <li key={index} onClick={() => dispatch(changeState(index))}>可点击：<strong>{todo.text}</strong></li>;
            }
            return <li key={index} >{todo.text}</li>;
          })
        }
      </ul>
      <h2>Filter:</h2>
      <a href="javascript:;" onClick={ () => { dispatch(setFilter('ALL')); }}>All&nbsp;&nbsp;</a>
      <a href="javascript:;" onClick={ () => { dispatch(setFilter('FALSE')); }}>false&nbsp;&nbsp;</a>
      <a href="javascript:;" onClick={ () => { dispatch(setFilter('TRUR')); }}>true&nbsp;&nbsp;</a>
    </div>
  );
};

Simple1.propTypes = {
  dispatch: PropTypes.func,
  todos: PropTypes.number
};


export default wrapper(Simple1);
