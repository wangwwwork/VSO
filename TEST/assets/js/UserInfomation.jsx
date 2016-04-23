/*
用户信息修改
 */

var UserInfo = React.createClass({
    getInitialState: function () {
        return ({userInfoArray: '', pageState:PageState.NoDisplay, pageStateDescripe:''});
    },

    componentDidMount:function () {
        var url = globeSelectUserByName + "?account=" + getUserName ;
        var pageState ='';
        var pageStateDescripe = '';
        var userInfoArray;
        $.ajax({
            url:url,
            type:"get",
            async: false,
            timeout: 8000,
            success: function (data) {
                var jsonDataArray = eval("(" + data + ")");
                if (jsonDataArray.status){
                    pageState = PageState.Danger;
                    pageStateDescripe = "页面加载失败";
                    return;
                }
                var jsonData = jsonDataArray[0];
                userInfoArray = {"用户名": getUserName,"姓名": jsonData.name, "邮箱": jsonData.email,"qq": jsonData.qq,"手机": jsonData.phone,
                    "备注": jsonData.remark};
            },
            error: function () {
                pageState = PageState.Danger;
                pageStateDescripe = "页面加载失败";
            }

        });
        this.setState({userInfoArray: userInfoArray, pageState:pageState, pageStateDescripe:pageStateDescripe});
    },


    handlePageState :function (pageState, pageStateDescripe) {
        this.setState({pageState:pageState, pageStateDescripe:pageStateDescripe})
    },

    handUpdatePasswordOnClick: function () {
        var component = React.createElement(ModifyPassword);
        React.render(<ChildForm title={""}>{component}</ChildForm>, document.body);
    },

    render:function () {
        var showInfo = [];
        for (var key in this.state.userInfoArray) {
            showInfo.push(<tr style={{textAlign:'center', fontSize: "120%"}}>
                <td >{key}</td>
                <td>{this.state.userInfoArray[key]}</td>
            </tr>);
        }

        return (
            <div>
                <div className="row" >
                    <p className="text-center"><h1 className="text-center"><small>用户基本信息</small></h1></p>
                    <hr />
                    <ShowPageState flage={this.state.pageState} msg={this.state.pageStateDescripe} />
                    <div className="col-sm-6 col-md-offset-3">
                        <table className="table table-striped">
                            <thead></thead>
                            <tbody>
                            {showInfo}
                            </tbody>
                        </table>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-5  col-sm-1">
                            <button type="button" className="btn btn-success" onClick = {this.handUpdatePasswordOnClick}>修改密码</button>
                        </div>
                        <div className="col-sm-offset-1 col-sm-1">
                            <button type="button" className="btn btn-info" onClick = {returnMainForm}>返回</button>
                        </div>


                    </div>
                </div>

            </div>
        )
    },
});