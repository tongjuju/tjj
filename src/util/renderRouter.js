/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-11-01 20:16:18 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-11-05 13:40:33
 */
/**
 * @param {Array}[路由配置]
 * 
 */
import React from "react";
import {Route,Switch,withRouter} from "react-router-dom";
function RenderRouter({routes,match}){
   return <Switch>
    {
        routes.map((item,key)=>{
            let url =match.path==='/' ? item.path : match.path+item.path;
            return <Route path={url} key={key} render={(props)=>{
                let List=item.Component;
                return <List {...props} routes={item.children}/>
            }}/>
        })
    }
   </Switch>
}
RenderRouter=withRouter(RenderRouter);//RenderRouter加路由信息
export default RenderRouter