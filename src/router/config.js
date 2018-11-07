
import Login from "../conponent/login";
import Layout from "../conponent/layout";
import Home from "../conponent/layout/home";
import Check from "../conponent/layout/check";
import Company from "../conponent/layout/company";
import Docs from "../conponent/company/docs";
import Allot from "../conponent/company/allot";
import Integral from "../conponent/layout/integral";
import Plan from "../conponent/layout/plan";
import College from "../conponent/layout/college";
import Client from "../conponent/layout/client";
import Assess from "../conponent/layout/assess";
import Assistant from "../conponent/layout/assistant";
import Inte from "../conponent/company/inte";
import Paying from "../conponent/company/Paying";
import Birthday from "../conponent/company/birthday";
import Substitute from "../conponent/company/substitute";
import Course from "../conponent/company/course";
import Setting from "../conponent/check/setting";
import Statistics from "../conponent/check/statistics";
import Detail from "../conponent/check/detail";
import Approve from "../conponent/check/approve";
import Gather from "../conponent/college/gather";
import Analyze from "../conponent/college/analyze";
import Contend from "../conponent/college/contend";
import Teacher from "../conponent/college/teacher";
import Reported from "../conponent/integral/reported";
import Audit from "../conponent/integral/audit";
import SItati from "../conponent/integral/sItati";
import Conversion from "../conponent/integral/conversion";
export default [
   {
    path:"/login",
    Component:Login,
    linkText:'登录'
   },{
        path:'/layout', 
        Component:Layout,
        children:[
            {
                path:'/home',
                Component:Home,
            },{
                path:'/company',
                Component:Company,
                children:[
                    {
                        path:'/docs',
                        Component:Docs,
                        linkText:'档案管理'
                    },{
                        path:'/allot',
                        Component:Allot,
                        linkText:'分配管理'
                    },{
                        path:'/course',
                        Component:Course,
                        linkText:'课程管理'
                    },{
                        path:'/substitute',
                        Component:Substitute,
                        linkText:'代课费管理'
                    },{
                        path:'/birthday',
                        Component:Birthday,
                        linkText:'生日提醒'
                    },{
                        path:'/paying',
                        Component:Paying,
                        linkText:'酬薪管理'
                    },{
                        path:'/inte',
                        Component:Inte,
                        linkText:'离职管理'
                    }
                ]
            },{
                path:'/check',
                Component:Check,
                children:[{
                    path:'/approve',
                    Component:Approve,
                    linkText:'考勤审批'
                },{
                    path:'/statistics',
                    Component:Statistics,
                    linkText:'考勤统计'
                },{
                    path:'/detail',
                    Component:Detail,
                    linkText:'考勤明细'
                },{
                    path:'/setting',
                    Component:Setting,
                    linkText:'考勤设置'
                }]
            },{
                path:'/integral',
                Component:Integral,
                children:[
                    {
                        path:'/reported',
                        Component:Reported,
                        linkText:'积分上报'
                    },{
                        path:'/audit',
                        Component:Audit,
                        linkText:'积分审核'
                    },{
                        path:'/sItati',
                        Component:SItati,
                        linkText:'积分统计'
                    },{
                        path:'/conversion',
                        Component:Conversion,
                        linkText:'积分兑换'
                    }
                ]
            },{
                path:'/plan',
                Component:Plan,
            },{
                path:'/college',
                Component:College,
                children:[{
                    path:'/gather',
                    Component:Gather,
                    linkText:'考勤数据汇总'
                },{
                    path:'/analyze',
                    Component:Analyze,
                    linkText:'客户数据分析'
                },{
                    path:'/contend',
                    Component:Contend,
                    linkText:'主管竞争力排名'
                },{
                    path:'/teacher',
                    Component:Teacher,
                    linkText:'教师学习排名'
                }]
            },{
                path:'/client',
                Component:Client,
                // children:[{
                //     path:'/approve',
                //     Component:Approve,
                //     linkText:'考勤审批'
                // },{
                //     path:'/statistics',
                //     Component:Statistics,
                //     linkText:'考勤统计'
                // },{
                //     path:'/detail',
                //     Component:Detail,
                //     linkText:'考勤明细'
                // },{
                //     path:'/setting',
                //     Component:Setting,
                //     linkText:'考勤设置'
                // }]
            },{
                path:'/assess',
                Component:Assess,
            },{
                path:'/assistant',
                Component:Assistant,
            }

        ]
   }
]