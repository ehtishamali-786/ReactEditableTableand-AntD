import React from 'react'
import Table from './table';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
const Dashboard = (props) => {
    const { dataSource, columns } = props
    console.log("summery", dataSource)
    return (
        <div className='dashboard-card bg-grey'>
            <div className='dashboard-haeader'>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="40" fill="#002699" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg><h1>Purchase Invoice</h1>
            </div>
            <div className='dashboard-search-input d-flex justify-content-sm-evenly'>
                <div className=' d-flex flex-column'>
                    <label>Suplier</label>
                    <input type='text' placeholder="Abdul Rehman"></input>
                </div >
                <div className=' d-flex flex-column   '>
                    <label>Sales man</label>
                    <select class="custom-select" id="inputGroupSelect01">

                        <option value="1">johan Doe</option>
                        <option value="2">ehtisham</option>
                        <option value="3">asad</option>
                    </select>
                </div>
                <div className='  d-flex flex-column '>
                    <label>Reference number</label>
                    <input type='number' placeholder="01234"></input>
                </div>
            </div>
            <div className='dashboard-item'>
                <h1>Item</h1>

            </div>
            <div>
                <Table dataSource={dataSource} columns={columns} />
            </div>
            <div className='dashboard-summary-card d-flex justify-content-end '>
                <Card style={{ width: '18rem' }}>

                    <Card.Body>
                        <Card.Title>Summary</Card.Title>
                    </Card.Body>

                    <ListGroup className="list-group-flush">
                       
                           
                                <>
                                    <ListGroup.Item>Total  {dataSource.totalPriceExcVat}</ListGroup.Item>
                                    <ListGroup.Item>Discount   {dataSource.discountPercentage
                                    }</ListGroup.Item>
                                    <ListGroup.Item>Net Total  {dataSource.totalPriceIncVat}</ListGroup.Item>
                                    <ListGroup.Item>VAT 15%   {dataSource.vatPercentage
                                    }</ListGroup.Item>
                                </>
                            
                       
                    </ListGroup>

                    <Card.Body>
                        <Card.Text>Grand Total</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
export default Dashboard;