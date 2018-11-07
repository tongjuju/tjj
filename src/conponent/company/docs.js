import React, { Component } from 'react'
import { Input ,Button,Icon} from 'antd';
import 'antd/dist/antd.css';
const Search = Input.Search;

class Docs extends Component {
    render () {
        return (
            <div className="docsBox">
               <header className="docsheader">
                   档案管理
               </header>
               <div className="docsNav">
               <Search
                    placeholder="输入姓名或手机号查询"
                    onSearch={value => console.log(value)}
                    enterButton
                    />
               </div>
               <div className="docsButton">
               <Button><Icon type="form" theme="outlined" />新增</Button>
               <Button><Icon type="delete" theme="outlined" />删除</Button>
               <Button><Icon type="fall" theme="outlined" />导入</Button>
               <Button><Icon type="rise" theme="outlined" />导出</Button>
               </div>
            </div>
        )
    }
}

export default Docs