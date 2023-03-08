import { Card } from "antd";
import { filter, map } from "lodash";
import axios from 'axios';
import React, { useState } from "react";
import Product from "../../components/product";

const Category = ({title = '', color}) => {
    const API_URL = 'https://63f87b056978b1f9105a49b9.mockapi.io/api/get-list/product'


    const [data, setData] = useState([]);
    if(data.length === 0){
        axios.get(API_URL).then(res => setData(res.data));
    }
    const listChosen = filter(data, item => item.category === title);
    return (
        <Card style={{marginTop: 10, display: 'flex'}}>
            <div style={{height: 100, backgroundColor: color, color: 'white'}}>
                <div style={{ padding: '30px 0px 0px 30px' ,fontFamily: "'Raleway', sans-serif", fontSize: 24, fontWeight: "bold"}}>{title=== 'new' ? 'HÀNG MỚI VỀ' : title === 'favor' ? 'ĐƯỢC ƯA CHUỘNG' : title === 'recommend' ? 'ĐỀ XUẤT CHO BẠN' : null}</div>
            </div>
            <div style={{display: 'flex'}}>
            {map(listChosen, item => (
                <div key={item.id}>
                <Product name={item.name} price={item.price} img={item.image} rating={4} />
                </div>
            ))}
            </div>
        </Card>
    );
};

export default Category;