import React, { Component } from 'react';
import { Card } from 'antd';
import './expr.css';
export default class Experience extends Component {


    render() {

        return (
            <>
                <Card title={<h3>经历</h3>} bordered={false} style={{ width: '100%'}}>
                        <h3>教育经历</h3>
                        <hr/>
                        <div className="expr_">
                            <div>
                                <p>东南大学，信息科学与工程学院</p>
                                <p>
                                    电子与通信工程（信号与信息处理）工学硕士
                                </p>
                                <p>
                                    数据科学与数据工程实验室
                                </p>
                                <p>
                                    专业排名: 9/50
                                </p>
                            </div>
                            <div>
                            September,2018 - May,2021
                            </div>
                        </div>
                        <p>
                            
                        </p>
                        <p>

                        </p>
                        <div className="expr_">
                            <div>
                                <p>杭州电子科技大学，通信工程学院</p>
                                <p>
                                    通信工程 工学学士
                                </p>
                                <p>
                                    光通信实验室
                                </p>
                                <p>
                                    专业排名: 10/250 (前5%)
                                </p>
                            </div>
                            <div>
                                September,2014 - July,2018
                            </div>
                        </div>
                        
                        <p></p>
                        <p></p>
                        <p></p>
                        <h3>项目经历</h3>
                        <div className="expr_">
                            <div>
                                <p>字节跳动科技有限公司(北京)</p>
                                <p>
                                    产品研发与工程架构部 R&D
                                </p>
                                <p>
                                    客户端开发工程师
                                </p>
                                <p>
                                    主要从事头条内部产品用户增长客户端侧需求开发。另外探索内部SDK在游戏端业务(Unity Cocos)的适配。
                                </p>
                            </div>
                            <div>
                                May,2020 - September,2020
                            </div>
                        </div>
                        <div className="expr_">
                            <div>
                                <p>字节跳动科技有限公司(北京)</p>
                                <p>
                                    产品研发与工程架构部 R&D
                                </p>
                                <p>
                                    客户端开发工程师
                                </p>
                                <p>
                                    主要从事头条内部产品用户增长客户端侧需求开发。另外探索内部SDK在游戏端业务(Unity Cocos)的适配。
                                </p>
                            </div>
                            <div>
                                May,2020 - September,2020
                            </div>
                        </div>
                        <p></p>
                        <p></p>
                        <p></p>
                        <hr/>
                        <h3>工作经历</h3>
                        <div className="expr_">
                            <div>
                                <p>字节跳动科技有限公司(北京)</p>
                                <p>
                                    产品研发与工程架构部 R&D
                                </p>
                                <p>
                                    客户端开发工程师
                                </p>
                                <p>
                                    主要从事头条内部产品用户增长客户端侧需求开发。另外探索内部SDK在游戏端业务(Unity Cocos)的适配。
                                </p>
                            </div>
                            <div>
                                May,2020 - September,2020
                            </div>
                        </div>
                        <p></p>
                        <p></p>
                        <p></p>
                </Card>
            </>
        )
    }

}