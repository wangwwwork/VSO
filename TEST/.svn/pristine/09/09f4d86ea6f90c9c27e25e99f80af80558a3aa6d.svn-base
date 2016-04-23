/*
 首页导航栏*/
var NavigatorBar = React.createClass({
    userLogin: function () {
        if (getUserName == '未登录') {
            var component = React.createElement(ClientLogin);
            React.render(<ChildForm title={"用户登录"}>{component}</ChildForm>, document.body);
        }
        else{
            var component = React.createElement(UserInfo);
            React.render(<ChildForm title={""}>{component}</ChildForm>, document.body);
        }
    },

    render: function () {
        return (
            <div className="grid">
                <div className="row cells12">
                    <div className="cell colspan2">
                        <h1>VSO</h1>
                    </div>
                    <div className="cell colspan8">
                    </div>
                    <div className="cell colspan2">
                        <button className="image-button icon-right bg-transparent
                            fg-white bg-hover-dark no-border" onClick={this.userLogin}>
                                <span className="sub-header no-margin text-light">{getUserName}
                                </span>
                            <span className="icon mif-user"></span>
                        </button>
                    </div>
                </div>
            </div>);
    }
})