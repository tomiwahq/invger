import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getProductsAction, addToCart } from './actions';
import ListGroup from 'react-bootstrap/ListGroup';
import { Product } from '../../types/product';

const Home: React.FC = () => {
    const home = useSelector((state: any) => state.home);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsAction());git status
    }, [])

    let productList = [];
    if(Array.isArray(home.products)) {
        productList = home.products.map((product: Product) => 
            <ListGroup.Item key={product.id}>{product.productName} <Button className="float-right btn-sm" onClick={() => {addToCart(product.id, product.productName)}}><FontAwesomeIcon icon="plus" /></Button></ListGroup.Item>
        )
    }


    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <ListGroup>
                            {productList}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;