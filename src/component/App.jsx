import React, { Component } from 'react';
import BlogContent from './Blog/BlogContent';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Route, Link , Switch , Redirect, withRouter} from 'react-router-dom'
import './app.css';
import Home from './Home/Home';
import About from './About/AboutMe';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class App extends Component {

    menuClick = (e) => {
        console.log(e);
        switch(e.key) {
            case '_home':
                this.props.history.push("/home");
                break;
            case '_blog':
                this.props.history.push("/blog");
                break;
            case '_about':
                this.props.history.push("/about");
                break;
        }
    }

    render(){
        return  (
            <Layout className="layout">
                <div className="header">
                    <Header style={{display:'flex'}}>
                        <div className="logo" style={{width:'14%',color:"wheat"}}>
                            此处放我的图标
                        </div>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{width:'30%'}} onClick={this.menuClick}>
                            <Menu.Item key="_home">主页</Menu.Item>
                            <Menu.Item key="_blog">博客</Menu.Item>
                            <Menu.Item key="_about">关于我</Menu.Item>
                        </Menu>
                        <div className="title" style={{width:'26%',color:"wheat",fontSize:"x-large"}}>
                            UnU
                        </div>
                        <div className="blank" style={{width:'20%'}}>
                        </div>
                    </Header>
                </div>
                <div className="content">
                    <Switch>
                        <Route path="/" exact>
                            <Redirect to="/home"/>
                        </Route>
                        <Route path="/home"  component={Home}></Route>
                        <Route path="/blog" component={BlogContent}></Route>
                        <Route path="/about"  component={About}></Route>
                    </Switch>
                </div>  
                <div className="footer">
                    <Footer style={{ textAlign: 'center',backgroundColor:"lightgray" }}>
                        <div>
                            <p>@2020 Created By UnU</p>
                            <p>站点平稳运行时间: </p>
                            <p>站点历史访问人数: </p>
                        </div>
                    </Footer>
                    
                </div>
                
            </Layout>
            
        )
    }

}

export default withRouter(App);