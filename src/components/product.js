import React from 'react';
import {Button, Card, Rate} from 'antd';
import { Link } from 'react-router-dom';

const Product = ({name = '', price = 0, rating = 0, img = ''}) => {
    return(
        <>
        <Card style={{width: 330, textAlign: 'center', marginRight: 25}}>
            <img src={img} alt='product' style={{width: 250, borderRadius: 5}}/>
            <h2>{name}</h2>
            <Rate allowHalf defaultValue={rating} />
            <h3>
                {price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
            </h3>
            <Button><Link to={'/detailProduct'}>Thêm vào giỏ hàng</Link></Button>
        </Card>
        </>
    );
}

export default Product;
