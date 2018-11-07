import React, { Component } from 'react'
 import RenderRouter from "../../util/renderRouter";
 import Content from '../../common/content';
class Company extends Component {
    render () {
        let aside =this.props.routes.map(item=>{
            return {
                text:item.linkText,
                path:this.props.match.path+item.path
            }
        })
        return (
            <div className="zxbox">
               {/* <Link to={`${this.props.match.path}/docs`}>档案管理</Link>
               <Link to={`${this.props.match.path}/allot`}>分配管理</Link> */}
               <Content aside={aside}>
                    <div>
                        <RenderRouter routes={this.props.routes}/>
                    </div>
               </Content>
               
            </div>
        )
    }
}

export default Company