import React, { Component } from 'react';
import { Card,Image } from 'antd';
import './me.css'
import meImg from '../../static/lwy_img_small.jpg';
export default class Me extends Component {


    render() {

        return (
            <>
                <div className="me_ct" style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
                    <Card title={<h3>关于我</h3>} bordered={false} style={{ width: '80%',fontSize:'20px' }}>
                        <h3>About me</h3>
                        <hr/>
                        Hello，我叫李文渊。目前研究生就读于东南大学信息科学与工程学院，数据科学与数据工程实验室。我的专业是电子与通信
                        工程（信号与信息处理方向）。
                        我本科毕业于杭州电子科技大学通信工程学院。在学校期间我获得过许多荣誉，也参加过许多志愿活动（2016年全国纸飞机嘉年华优秀志愿者）。
                        研究生期间主要从事城市大数据分析方面科研工作，主要技术栈有Java，Android,JavaScript(React)以及Python(爬虫)等。
                        于2020年5月-9月在北京字节跳动科技有限公司实习，从事客户端开发工程师岗位。
                        近期我正在编完成自己的研究生毕业设计以及学习Java(Spring)技术栈以及MySQL和NoSQL(Redis)技术栈。
                        在经历过客户端开发，前端开发，服务端开发之后。我希望自己的未来职业可以是从事于服务端开发，并希望自己可以在这个路上学习更多的技术。
                        <p></p>
                        <p></p>
                        <p></p>
                        <h3>关于我的站点</h3>
                        <hr/>
                        本站点是自己在学习React以及Java技术同时搭建的，目标是锻炼自己的动手能力，同时巩固自己的技术。
                        本站点是一个 React + antd + Bootstrap + SpringBoot + MySQL + Redis 的简易博客项目。 
                    </Card>
                    <Image 
                        src={meImg} 
                    />
                </div>

            </>
            
        )
    }

}