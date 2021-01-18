import React, { Component } from 'react';
import Blog from './Blog';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Axios from 'axios';
import { createPortal } from 'react-dom';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const { serverconfig } = require('../config/config');

class BlogContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            submenus: [],
            menusName:{},
            nowmenu: {
                key: -1,
            },
            nowBlogClick: {
                id: -1,
            },
            allblogs: {},
            blogsAll: {},
        }
    }

    handleTitleClick = (e) => {
        this.setState({
            nowmenu: {
                key: e.key
            }
        })
        // if(this.state.menuItems[e.key]===undefined) {
        //     console.log(e.key);
        //     Axios.get("http://"+serverconfig.ip+":"+serverconfig.port+"/blog/cls/"+e.key)
        //             .then( res => {
        //                 this.setState( pev => {
        //                     let mi = pev.menuItems;
        //                     mi[e.key] = res.data;
        //                     return {
        //                         menuItems: mi,
        //                     }
        //                 })
        //             })  
        // }
    }

    blogClick = (e) => {
        console.log(this.state.blogsAll[e.key]);
        // 切换展示
    }

    render() {
        let menu = this.state.submenus.map( v => 
        {
            return (
                <SubMenu key={v.clsId} icon={<UserOutlined />} title={v.clsNameCn}
                 onTitleClick={this.handleTitleClick}>
                    {this.state.allblogs[v.clsId]?.map( v => {
                        return (
                            <Menu.Item key={v.blogId}>{v.blogTitle}</Menu.Item>
                        )
                    })}
                </SubMenu>
            );
        }
        );
        return (
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>博客</Breadcrumb.Item>
                    <Breadcrumb.Item>{this.state.nowmenu.key!==-1?this.state.menusName[this.state.nowmenu.key].clsNameCn:""}</Breadcrumb.Item>
                    {/* <Breadcrumb.Item>App</Breadcrumb.Item> */}
                </Breadcrumb>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <Sider className="site-layout-background" width={200}>
                    <Menu
                        mode="inline"
                        // defaultSelectedKeys={['1']}
                        // defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                        onClick={this.blogClick}
                    >
                        {menu} 
                    </Menu>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280,display: 'flex' }}>
                        <div className="blog_detail" style={{width:'20%'}}>

                        </div>
                        
                        <div className="blog_content">
                            <Blog id={this.state.nowBlogClick.id}/>
                        </div>
                        
                        <div className="blog_comments" style={{width:'30%'}}>

                        </div>
                    </Content>
                </Layout>
            </Content>
        )
    }

    async componentDidMount () {
        // Axios.get("http://"+serverconfig.ip+":"+serverconfig.port+"/blogcls/all")
        //     .then(res => {
        //         console.log(res);
        //         if (res.data !== undefined) {
        //             this.setState({
        //                 submenus: res.data,
        //             })
        //         }
        //     })
        let submenus = await Axios.get("http://"+serverconfig.ip+":"+serverconfig.port+"/blogcls/all")
            .then(res => {
                return res.data;
            });
        let menusName = {};
        for(let sm of submenus) {
            menusName[sm.clsId] = sm;
        }
        let blogdata = await Axios.get("http://"+serverconfig.ip+":"+serverconfig.port+"/blog/all")
            .then(res => {
                return res.data;
            })
        let allblogs = {};
        let blogsAll = {};
        for(let i=0;i<blogdata.length;i++) {
            let blog = blogdata[i];
            if(!(blog.blogClsId in allblogs)){
                allblogs[blog.blogClsId] = []
            }
            allblogs[blog.blogClsId].push(blog);
            blogsAll[blog.blogId] = blog;
        }
        this.setState({
            submenus,
            allblogs,
            menusName,
            blogsAll,
        })
    }
}

export default BlogContent;