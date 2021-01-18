import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import { Route, Link , Switch , Redirect, withRouter} from 'react-router-dom'
import Me from './Me';
import Exper from './Experience';
import Concat from './Concat';
class AboutMe extends Component {

    render() {

        return (
            <>
            <div className="about_nav" style={{display:'flex',width:'100%'}}> 
                <div style={{width:'42%'}}>

                </div>
                <div style={{width:'20%'}}>
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/about/me">关于我</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about/experience">经历</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about/concat">联系我</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div style={{width:'38%'}}>

                </div>
            </div>
            <div className="about_ct" style={{paddingTop:'30px',height:'95%'}}>
                <Switch>
                    <Route path="/about/me" exact component={Me}></Route>
                    <Route path="/about/experience" exact component={Exper}></Route>
                    <Route path="/about/concat" exact component={Concat}></Route>
                    <Route component={Me}></Route>
                </Switch>
            </div>

            </>
        )
    }
}

export default AboutMe;