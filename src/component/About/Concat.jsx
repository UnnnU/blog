import React, { Component } from 'react';
import './concat.css';
import {Image} from 'antd';
import code from '../../static/qr_code.jpg';
export default class Concat extends Component {


    render() {
        
        return (
            <div className="concat_ct">
                <div>
                    <h4>和我联系: </h4>
                    <p></p>
                    <p></p>
                    <p></p>
                    <h4>电话:  +86 15952017799</h4>
                    <p></p>
                    <p></p>
                    <p></p>
                    <h4>微信: ltlylgx</h4>
                    <p></p>
                    <p></p>
                    <p></p>
                    <h4>邮箱: wenyuan_li@seu.edu.cn</h4>
                    <p></p>
                    <p></p>
                    <p></p>
                    <h4>地址: 南京市，江宁区，东南大学九龙湖校区</h4>
                    <p></p>
                    <p></p>
                    <p></p>
                    <h4>GitHub: @UnU</h4>
                </div>
                <div>
                    <Image
                        src={code}
                        height='500px'
                        width='500px'
                        />
                </div>
            </div>
        )
    }

}