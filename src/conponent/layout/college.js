import React, { Component } from 'react'
import RenderRouter from "../../util/renderRouter";
import Content from '../../common/content';
class College extends Component {
    
    render () {
        let aside =this.props.routes.map(item=>{
            return {
                text:item.linkText,
                path:this.props.match.path+item.path
            }
        })
        return (
            <div className="zxbox"> 
                <Content aside={aside}>
                    <div>
                        <RenderRouter routes={this.props.routes}/>
                    </div>
               </Content>
            </div>
        )
    }
}

export default College