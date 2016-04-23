/*
 工时*/
var Work_HoursForm = React.createClass({
    handleErrorInputForm:function(type, title){
        var component = React.createElement(type,{action:title});
        React.render(<ChildForm title={title}>{component}</ChildForm>,document.body);
    },
    render: function () {
        return (
            <div>
                <div className="row cells10 align-center">
                    <div className="cell colspan1">
                        <label htmlFor="mapId"><h4>图号</h4></label>
                    </div>
                    <div className="input-control text cell colspan9"
                         data-role="input">
                        <input id="mapId" type="text"/>
                        <button className="button helper-button clear">
                            <span className="mif-cross"></span></button>
                    </div>
                </div>
                <div className="row cells10 align-center">
                    <div className="cell colspan1">
                        <label htmlFor="taskId"><h4>工单号</h4></label>
                    </div>
                    <div className="input-control text cell colspan9"
                         data-role="input">
                        <input id="taskId" type="text" disabled/>
                        <button className="button helper-button clear">
                            <span className="mif-cross"></span></button>
                    </div>
                </div>
                <div className="row cells10 align-center">
                    <div className="cell colspan1">
                        <label htmlFor="productId"><h4>料号</h4></label>
                    </div>
                    <div className="input-control text cell colspan9"
                         data-role="input">
                        <input id="productId" type="text" disabled/>
                        <button className="button helper-button clear">
                            <span className="mif-cross"></span></button>
                    </div>
                </div>
                <div className="row cells10 align-center">
                    <div className="cell colspan1">
                        <label htmlFor="productLine"><h4>产线</h4></label>
                    </div>
                    <div className="input-control text cell colspan9"
                         data-role="input">
                        <input id="productLine" type="text" disabled/>
                        <button className="button helper-button clear">
                            <span className="mif-cross"></span></button>
                    </div>
                </div>
                <div className="row cells10 align-center">
                    <div className="cell colspan1">
                        <label htmlFor="standardHours"><h4>标准工时</h4></label>
                    </div>
                    <div className="input-control text cell colspan9"
                         data-role="keypad">
                        <input id="standardHours" type="text"/>
                        <button className="button helper-button clear">
                            <span className="mif-cross"></span></button>
                    </div>
                </div>
                <div className="row cells10 align-center">
                    <div className="cell colspan1">
                        <label htmlFor="workStart"><h4>作业起始</h4></label>
                    </div>
                    <div className="input-control text cell colspan9">
                        <input id="workStart" type="time"/>
                    </div>
                </div>
                <div className="row cells10 align-center">
                    <div className="cell">
                        <label htmlFor="workEnd"><h4>作业终止</h4></label>
                    </div>
                    <div className="input-control text cell colspan9">
                        <input id="workEnd" type="time"/>
                    </div>
                </div>
                <div className="row cells10 align-center">
                    <div className="cell">
                        <label htmlFor="inHr"><h4>投入人力</h4></label>
                    </div>
                    <div className="input-control text cell colspan9"
                         data-role="keypad">
                        <input id="inHr" type="text"/>
                    </div>
                </div>
                <div className="row cells10 align-center">
                    <div className="cell">
                        <label htmlFor="errorTime"><h4>异常损失工时</h4></label>
                    </div>
                    <div className="input-control text cell colspan9">
                        <input id="errorTime" type="text" disabled/>
                    </div>
                </div>
                <div className="row align-center cells2">
                    <div className="cell">
                        <button className="button warning block-shadow-warning
                        text-shadow" onClick={this.handleErrorInputForm
                        .bind(this,ErrorTimeInputForm,'异常损失工时')}>异常损失工时
                        </button>
                    </div>
                    <div className="cell">
                        <button className="button warning block-shadow-warning
                        text-shadow" onClick={this.handleErrorInputForm
                        .bind(this,ErrorTimeInputForm,'无效工时')}>无效工时
                        </button>
                    </div>
                </div>
                <FooterForm></FooterForm>
            </div>
        );
    }
})