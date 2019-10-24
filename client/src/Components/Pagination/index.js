import React from 'react';
import { Row, Col, Pagination } from 'react-bootstrap';

export default (props) => {
    if (props.results.length > 0) {
        const pageNumbers = [];
        const items = [];
        for (let i = 1; i <= Math.ceil(props.results.length / props.perPage); i++) {
            pageNumbers.push(i);
        }

        pageNumbers.forEach(number => {
            items.push(<Pagination.Item key={number}
                active={number === props.currentPage}
                onClick={props.handlePageClick}
            >
                {number}
            </Pagination.Item>)
        });

        return (<Row className="mb-5">
                    <Col>
                        <Pagination>{items}</Pagination>
                    </Col>
                </Row>)


    } else
        return null;

}