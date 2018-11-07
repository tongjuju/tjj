import React, { Component } from 'react'
import DataModule from "../../common/DataModule";
class Home extends Component {
    render () {
        return (
            <div className='home'>
                <div className='left'>
                    <img src='../img/1.jpg'/>
                    <div>
                        <p>Hi.jim阳光</p>
                        <p>岗位:分部主管</p>
                        <p>总积分:2000</p>
                        <p>排名积分:100/2000</p>

                    </div>
                </div>
                <div className='right'>
                    <DataModule/>
                    <DataModule/>
                    <DataModule/>
                    <DataModule/>
                </div>
                
            </div>
        )
    }
}

export default Home