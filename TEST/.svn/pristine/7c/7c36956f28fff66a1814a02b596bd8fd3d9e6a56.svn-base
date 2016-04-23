/*
密码修改
 */
ModifyPassword = React.createClass({
    getInitialState: function () {
        return ({
            oldPassword:'',
            newPassword:'',
            secondInputNewPassword:'',
            identifyCode:createIdentifyCode(5),
            userInputIdentifyCode:'',
            pageState:PageState.NoDisplay,
            pageStateDescripe:''
        })
    },

    handOnChange: function (type, event) {
        switch (type){
            case "oldPassword":
                this.setState({oldPassword: event.target.value.trim()});
                break;
            case "newPassword":
                this.setState({newPassword: md5(event.target.value)});
                break;
            case "secondInputNewPassword":
                this.setState({secondInputNewPassword: md5(event.target.value)});
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
          if (this.state.oldPassword == ''){
            this.handlePageState(PageState.Danger, "请输入原始密码");
              return false;
          }
        if (this.state.newPassword == ''){
            this.handlePageState(PageState.Danger, "请输入新密码");
            return false;
        }
        if (this.state.secondInputNewPassword == ''){
            this.handlePageState(PageState.Danger, "请再次输入密码");
            return false;
        }
        if (this.state.userInputIdentifyCode == ''){
            this.handlePageState(PageState.Danger, "请输入验密码");
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

    handPasswordSaveOnClick: function () {
        if (this.judgeCommit() == false){
            return;
        }
        this.ModifyPassword();
    },

    ModifyPassword: function () {
        var _self = this;
        var url = globeUserLoadAddr + '?account=' + getUserName + '&oldpassword='+ _self.state.oldPassword + "&newpassword=" + _self.state.newPassword;
        $.ajax({
            url: url,
            type:'GET',
            timeout: 10000,
            success: function (data) {
                var jsonData = eval("(" + data + ")");
                if (jsonData.status != "0"){
                    _self.handlePageState(PageState.Success, '密码修改成功');
                    _self.setState({
                        oldPassword:'',
                        newPassword:'',
                        secondInputNewPassword:'',
                        userInputIdentifyCode:''
                    });
                    return;
                }
                _self.handlePageState(PageState.Danger, '密码修改失败');
                _self.getIndentifyCode();
            },
            error: function (data) {
                _self.handlePageState(PageState.Danger, '密码修改失败');
                _self.getIndentifyCode();
            }

        })
    },

    handReturnOnClick: function () {
        var component = React.createElement(UserInfo);
        React.render(<ChildForm title={""}>{component}</ChildForm>, document.body);
    },

    render: function () {
        return (<div>
                <br />
                <br />
                <p className="text-center"><h1 className="text-center"><small>用户密码修改</small></h1></p>
                <hr />
                <ShowPageState flage={this.state.pageState} msg={this.state.pageStateDescripe} />
            <form className="form-horizontal" role="form">
                <div className="input-group col-sm-offset-4 col-sm-4" >
                    <span className="input-group-addon">原始密码：</span>
                    <input type="text" className="form-control" onChange = {this.handOnChange.bind(this, "oldPassword")}/>
                </div>
                <br />
                <div className="input-group col-sm-offset-4 col-sm-4" >
                    <span className="input-group-addon">&nbsp;&nbsp;&nbsp;新密码：</span>
                    <input type="password" className="form-control" onChange = {this.handOnChange.bind(this, "newPassword")}/>
                </div>
                <br />
                <div className="input-group col-sm-offset-4 col-sm-4" >
                    <span className="input-group-addon">再次输入：</span>
                    <input type="password" className="form-control" onChange = {this.handOnChange.bind(this, "secondInputNewPassword")}/>
                </div>
                <br />
                <div className="input-group col-sm-offset-4 col-sm-4" >
                    <span className="input-group-addon">&nbsp;&nbsp;&nbsp;验证码：</span>
                    <input type="text" className="form-control" onChange = {this.handOnChange.bind(this, "identifyCode")}/>
                    <span className="input-group-addon" onClick={this.getIndentifyCode}>{this.state.identifyCode}</span>
                </div>
                <br/><br />
                <div className="form-group">
                    <div className="col-sm-offset-5  col-sm-1 col-xs-2">
                        <button type="button" className="btn btn-success" onClick = {this.handPasswordSaveOnClick} >保存</button>
                    </div>
                    <div className="col-sm-1 col-xs-2">
                        <button type="button" className="btn btn-info" onClick = {this.handReturnOnClick}>返回</button>
                    </div>


                </div>
            </form>
            </div>
        );
    },
})