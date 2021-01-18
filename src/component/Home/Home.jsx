import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './home.css';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

class Home extends Component {

    render() {

        return (
            <div className="home_ct" style={{display:"flex",flexDirection:"column",height:"100%"}}>
                <div style={{height:'20%',textAlign:'center',fontSize:'30px',color:'black'}}>
                    相册集
                </div>
                <div style={{height:'80%'}}>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <div style={{display:'flex',width:'100%',height:'100%'}}>
                                <div style={{width:'20%'}}>

                                </div>
                                <div style={{width:'60%'}}>
                                    <img
                                    className="d-block w-100"
                                    src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2788939500,3632318912&fm=26&gp=0.jpg"
                                    alt="First slide"
                                    />
                                </div>
                                <div style={{width:'20%'}}>
                                </div>
                            </div>
                            <Carousel.Caption>
                            <h3 style={{color:"wheat"}}>本人自拍</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <div style={{display:'flex',width:'100%',height:'100%'}}>
                                <div style={{width:'20%'}}>

                                </div>
                                <div style={{width:'60%'}}>
                                    <img
                                    className="d-block w-100"
                                    src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2788939500,3632318912&fm=26&gp=0.jpg"
                                    alt="First slide"
                                    />
                                </div>
                                <div style={{width:'20%'}}>
                                </div>
                            </div>
                            <Carousel.Caption>
                            <h3 style={{color:"wheat"}}>本人自拍</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <div style={{display:'flex',width:'100%',height:'100%'}}>
                                <div style={{width:'20%'}}>

                                </div>
                                <div style={{width:'60%'}}>
                                    <img
                                    className="d-block w-100"
                                    src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2788939500,3632318912&fm=26&gp=0.jpg"
                                    alt="First slide"
                                    />
                                </div>
                                <div style={{width:'20%'}}>
                                </div>
                            </div>
                            <Carousel.Caption>
                            <h3 style={{color:"wheat"}}>本人自拍</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                       
                    </Carousel>
                </div>
                
            </div>
        )
    }
}

export default Home;