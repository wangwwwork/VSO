/**
 * Created by Administrator on 2016/3/29.
 */
var MainForm = React.createClass({
    //展示子窗体
    handleShowChildForm: function (key, title) {
        var component = React.createElement(key,{title:title});
        React.render(<ChildForm title={title}>{component}</ChildForm>,document.body);
    },
    render: function () {
        return (
            <div>
                <NavigatorBar></NavigatorBar>
                <div className="clearfix">
                    <div className="tile bg-blue fg-white" onClick={
                    this.handleShowChildForm.bind(this,FQCInputForm,'FQC录入')}>
                        <div className="tile-content iconic">
                            <span className="icon mif-cogs"></span>
                            <span className="tile-label">FQC</span>
                        </div>
                    </div>
                    <div className="tile bg-cyan fg-white" data-role="tile"
                    onClick={this.handleShowChildForm.bind(this,PQCInputForm,'PQC录入')}>
                        <div className="tile-content iconic">
                            <span className="icon mif-envelop"></span>
                            <span className="tile-label">PQC</span>
                        </div>
                    </div>
                    <div className="tile bg-green fg-white" data-role="tile"
                    onClick={this.handleShowChildForm.bind(this,Work_HoursForm,'工时')}>
                        <div className="tile-content iconic">
                            <span className="icon mif-cloud"></span>
                            <span className="tile-label">工时</span>
                        </div>
                    </div>
                    <div className="tile bg-green fg-white" data-role="tile"
                    onClick={this.handleShowChildForm.bind(this,InHoursForm,'人力')}>
                        <div className="tile-content iconic">
                            <span className="icon mif-airplane"></span>
                            <span className="tile-label">人力</span>
                        </div>
                    </div>
                    <div className="tile bg-orange fg-white" data-role="tile" onClick={this.handleShowChildForm.bind(this,BugIntoForm,'故障输入')}>
                        <div className="tile-content iconic">
                            <span className="icon mif-bug"></span>
                            <span className="tile-label">故障输入</span>
                        </div>
                    </div>
                     <div className="tile bg-pink fg-white" data-role="tile" onClick={this.handleShowChildForm.bind(this,LCDLookForm,'LCD看板')}>
                        <div className="tile-content iconic">
                            <span className="icon mif-eye"></span>
                            <span className="tile-label">LCD看板</span>
                        </div>
                    </div>
                    <div className="tile bg-pink fg-white" data-role="tile"onClick={this.handleShowChildForm.bind(this,DailyReportForm,'生产日报表')}>
                        <div className="tile-content iconic">
                            <span className="icon mif-clipboard"></span>
                            <span className="tile-label">生产日报表</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
React.render(<MainForm></MainForm>, document.body);