/*
子页面的脚部*/
var FooterForm = React.createClass({
    getInitialState:function () {
        return {handleReturn:this.props.handleReturn||this.returnMain}
    },
    returnMain:function () {
        var component = React.createElement(MainForm);
        React.render(component, document.body);
    },

    storeDoc: function () {
        if (this.props.storeFunc)
            this.props.storeFunc();
    },
    
    render:function () {
        return (<div>
            <div className="row cells10">
                <div className="cell offset7"></div>
                <div className="cell">
                    <button className="button warning" onClick={this.state.handleReturn}>
                        <span className="mif-cross">返回</span>
                    </button>
                </div>
                <div className="cell">
                    <button className="button primary" onClick={this.storeDoc}>
                        <span className="mif-checkmark">存档</span>
                    </button>
                </div>
            </div>
        </div>);
    }
})