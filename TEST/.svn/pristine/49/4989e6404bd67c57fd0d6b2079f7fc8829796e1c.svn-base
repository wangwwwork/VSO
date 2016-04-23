/*
公共函数
 */

var PageState = {
    Success: 0,
    Info: 1,
    Warning: 2,
    Danger: 3,
    NoDisplay: 4,
};

ShowPageState = React.createClass({
    render: function () {
        return (<div>{this.showHtmlPageState(this.props.flage, this.props.msg)}</div>);
    },

    showHtmlPageState: function (pageInputState, msg) {
        switch (parseInt(pageInputState)){
            case PageState.Success:
                return ( <div className="alert alert-success">
                    {msg}
                </div>);
                break;
            case PageState.Info:
                return ( <div className="alert alert-info">
                    {msg}
                </div>);
                break;
            case PageState.Warning:
                return ( <div className="alert alert-warning">
                    {msg}
                </div>);
                break;
            case PageState.Danger:
                return ( <div className="alert alert-danger">
                    {msg}
                </div>);
                break;
        }
    },

});

var returnMainForm = function () {
    
    var component = React.createElement(MainForm);
    React.render(component, document.body);
}

var AjaxTransportData = function (url, type, data, succssCallBack, errorCallBack ) {
    $.ajax({
        url:url,
        type: type,
        dataType:'json',
        data: data,
        success:function (data) {
            succssCallBack(data);
        },
        error: function (data) {
            errorCallBack(data);
        }

    });
}

var createIdentifyCode = function (length) {
    var code = '';
    var selectChar = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//所有候选组成验证码的字符，当然也可以用中文的

    for(var i=0;i<length;i++)
    {
        var charIndex = Math.floor(Math.random()*36);
        code +=selectChar[charIndex];
    }
    return code;
}

var SelectBox = React.createClass({

    handChange: function (event) {
        this.props.onChange(event.target.value);
    },

    render: function () {
        var showOption = [];
        showOption.push(<option value='0'>请选择
        </option>);
        if (this.props.data != ''){
            this.props.data.map(function (op) {
                showOption.push(<option key={op.id} value={op.id}>{op.name}
                </option>);
            })
        }
        return (<select id={this.props.id} onChange={this.handChange.bind(this)}>
            {showOption}
        </select>);
    }
});

var SelectBoxList = React.createClass({
    // getDefaultProps: function () {
    //     return setCla
    // },
    propTypes:{
        setClassId: React.PropTypes.func
    },

    getInitialState: function () {
        return ({classData: '', lineData:''});
    },

    selectBoxLineChange: function (id) {
        var _self = this;
        $.ajax({
            url:globeSelectClassUrl,
            type: 'get',
            data: {"line": id.toString()},
            success: function (data) {
                var jsonData = eval("("+data+")");
                if(jsonData.message){
                    _self.setState({classData: ''});
                    return ;
                }
                _self.setState({classData: jsonData});
            },
            error: function (data) {
                _self.props.showPageState(PageState.Danger, '页面数据初始化加载失败');
            }

        });
    },

    selectClassChange: function (id) {
        if (parseInt(id) == 0)
            id = '';
        this.props.getClassId(id);
        this.props.showPageState(PageState.NoDisplay, '');
    },

    componentDidMount: function () {
        var _self = this;
        $.ajax({
            url:globeSelectLineUrl,
            type: 'GET',
            success: function (data) {
                var jsonData = eval(data);
                _self.setState({lineData: jsonData});
            },
            error: function (data) {
                _self.props.showPageState(PageState.Danger, '页面数据初始化加载失败');
            }
        })
    },

    render: function () {
        return (
            <div className="row cells6">
                <div className="cell">
                    <label ><h4>制:</h4></label>
                </div>
                <div className="input-control select cell colspan2">
                    <SelectBox id="lineBox" data={this.state.lineData} onChange={this.selectBoxLineChange} />
                </div>
                <div className="cell colspan1">
                    <label htmlFor="mapBug"><h4>课组:</h4></label>
                </div>
                <div className="input-control select cell colspan2">
                    <SelectBox id="classBox" data={this.state.classData} onChange={this.selectClassChange} />
                </div>

            </div>
        );
    },
});