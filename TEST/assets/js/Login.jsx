
ClientLogin = React.createClass({
    getInitialState: function () {
        return ({
            password:'',
            userName: '',
            identifyCode:createIdentifyCode(5),
            userInputIdentifyCode:'',
            pageState:PageState.NoDisplay,
            pageStateDescripe:''
        })
    },

    handOnChange: function (type, event) {
        switch (type){
            case "userName":
                this.setState({userName: event.target.value.trim()});
                break;
            case "password":
                this.setState({password: md5(event.target.value)});
                break;
            case "identifyCode":
                this.setState({userInputIdentifyCode: event.target.value})
        }
        this.handlePageState(PageState.NoDisplay, '');
    },

    getIndentifyCode: function () {
        this.setState({identifyCode:createIdentifyCode(5)});
    },
    judgeCommit: function () {
          if (this.state.userName == ''){
            this.handlePageState(PageState.Danger, "请输入用户名");
              return false;
          }
        if (this.state.password == ''){
            this.handlePageState(PageState.Danger, "请输入用户密码");
            return false;
        }
        if (this.state.userInputIdentifyCode == ''){
            this.handlePageState(PageState.Danger, "请输入验证码");
            return false;
        }
        if (this.state.userInputIdentifyCode.toLowerCase() != this.state.identifyCode.toLowerCase()){
            this.handlePageState(PageState.Danger, "验证码输入有误");
            return false;
        }
        return true;

    },

    handlePageState :function (pageState, pageStateDescripe) {
        this.setState({pageState:pageState, pageStateDescripe:pageStateDescripe})
    },

    handLoadOnClick: function () {
        if (this.judgeCommit() == false){
            return;
        }
        var dialog = $('#dialog').data('dialog');
        dialog.open();
        this.Login();
    },

    Login: function () {
        var _self = this;
        var url = globeUserLoadAddr + '?account=' + _self.state.userName + '&password='+ _self.state.password;
        $.ajax({
            url: url,
            type:'GET',
            timeout: 10000,
            success: function (data) {
                var jsonData = eval("(" + data + ")");
                if (jsonData.status != "0"){
                    getUserId = jsonData.data;
                    getUserName = _self.state.userName
                    //加載用戶能夠擁有的權限的菜單
                    //测试部分

                    returnMainForm();
                    return; 
                }
                $('#dialog').data('dialog').close();
                _self.handlePageState(PageState.Danger, '用戶登錄失敗');
                _self.getIndentifyCode();
            },
            error: function (data) {
                $('#dialog').data('dialog').close();
                _self.handlePageState(PageState.Danger, '用戶登錄失敗');
                _self.getIndentifyCode();
            }

        })
    },

    handReturnOnClick: function () {
        var component = React.createElement(MainForm);
        React.render(component, document.body);
    },

    render: function () {
        return (<div>
                <br />
                <br />
                <p className="text-center"><h1 className="text-center"><small>江西吉安MES系统登录</small></h1></p>
                <hr />
                <ShowPageState flage={this.state.pageState} msg={this.state.pageStateDescripe} />
            <form className="form-horizontal" role="form">
                <div className="input-group col-sm-offset-4 col-sm-4" >
                    <span className="input-group-addon">用户名：</span>
                    <input type="text" className="form-control" onChange = {this.handOnChange.bind(this, "userName")}/>
                </div>
                <br />
                <div className="input-group col-sm-offset-4 col-sm-4" >
                    <span className="input-group-addon">密&nbsp;&nbsp;&nbsp;码：</span>
                    <input type="password" className="form-control" onChange = {this.handOnChange.bind(this, "password")}/>
                </div>
                <br />
                <div className="input-group col-sm-offset-4 col-sm-4" >
                    <span className="input-group-addon">验证码：</span>
                    <input type="text" className="form-control" onChange = {this.handOnChange.bind(this, "identifyCode")}/>
                    <span className="input-group-addon" onClick={this.getIndentifyCode}>{this.state.identifyCode}</span>
                </div>
                <br/><br />
                <div className="form-group">
                    <div className="col-sm-offset-5  col-sm-1 col-xs-2">
                        <button type="button" className="btn btn-success" onClick = {this.handLoadOnClick} data-toggle="modal" >登  录</button>
                    </div>
                    <div className="col-sm-1 col-xs-2">
                        <button type="button" className="btn btn-info" onClick = {this.handReturnOnClick}>返回</button>
                    </div>


                </div>
            </form>
                <div data-role="dialog" id="dialog" className="padding20" data-close-button="false" data-overlay="true" data-overlay-color="op-dark" data-overlay-click-close="false">
                    <h2>正在登錄,請稍後</h2>
                    <p>
                       Loading ...
                    </p>
                </div>
            </div>
        );
    },
})