import React, { Component } from 'react'

class DataMpdule extends Component {
    render () {
        return (
            <div className='datamodule'>
                <header className="minmodule">
                    <span>考勤分析</span>
                    <div>
                        <span>本月</span>|
                        <span>上月</span>
                    </div>
                    
                </header>
            </div>
        )
    }
}

export default DataMpdule