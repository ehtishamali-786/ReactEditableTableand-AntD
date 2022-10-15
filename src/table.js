import React from 'react'
import { Table } from 'antd';
const Tablecomp =({dataSource,columns}) =>{
  return (
    <div className="item-table">
    <Table dataSource={dataSource} columns={columns} pagination={false} />
  </div>
  )
}
export default Tablecomp;