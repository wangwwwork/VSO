/**
 * Created by Lemon on 2016/4/12.
 */
var LCDLookForm=React.createClass({
    getInitialState:function(){
        return{
            class:'1组',person:'XXX',
            times:['7:30 ~ 8:30', ' 8:30 ~ 9:30','9:30 ~ 10:30','10:30 ~ 11:45','12:30 ~ 13:30','13:30 ~ 14:30','15:30 ~ 16:30','16:30 ~ 18:00'],
            text:'13:30',

        };
    },
    handleChange:function(e){

    },
    render:function(){
        var time=[];
        for(var i=0;i<this.state.times.length;i++)
        {
            time.push(<tr>
                <td>{this.state.times[i]}</td>
                <td>200</td>
                <td>200</td>
                <td>80%</td>
            </tr>);
        };
        return(
        <div className="grid">
        <table className="table hovered cell-hovered border bordered">
        <thead>
            <tr>
            <th>组别：{this.state.class}</th>
            <th colSpan="2">组长：{this.state.person}</th>
            <th colSpan="1">日期：{this.state.text}</th>
        </tr>
        </thead>
        <tbody>.
        <tr>
            <th>工令单号：</th>
            <td colSpan="3">8331203-26</td>
        </tr>
        <tr>
            <th>产品编码：</th>
            <td colSpan="3">833256</td>
        </tr>
        <tr>
            <th>批量：</th>
            <td colSpan="3">180</td>
        </tr>
        <tr>
            <th>计划量：</th>
            <td colSpan="3">300</td>
        </tr>
        <tr>
            <th>时段管制</th>
            <th>标准产能</th>
            <th>实际产能</th>
            <th>效率</th>
        </tr>
        {time}
        </tbody>
        </table>
            <label style={{width:'30%'}}>应到：16人</label> <label style={{width:'30%'}}>缺勤：3人</label> <label style={{width:'30%'}}>实到：13人</label>
            <FooterForm></FooterForm>
            </div>
        );
    },
});