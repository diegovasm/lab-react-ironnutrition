import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search(props) {


  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={props.search} type="text" onChange={(e) => props.setSearch(e.target.value)} />
    </>
  );
}

export default Search;
