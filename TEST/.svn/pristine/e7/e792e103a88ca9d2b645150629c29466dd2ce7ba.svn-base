/*子页*/

var IntervalMixin=function(interval){
    return{
        componentDidMount: function () {
            window.addEventListener('resize',this.calcHeadHeight);
            this.calcHeadHeight();
            this._interval = setInterval(this.onTick, interval);
        },
        componentWillUnmount: function () {
            clearInterval(this._interval);
        },
    };
};
var ChildForm = React.createClass({
 mixins:[IntervalMixin(1000)],
    getInitialState:function () {
        return {date:(new Date()).toLocaleDateString(),
		time:(new Date()).toLocaleTimeString()};
    },
    calcHeadHeight:function(){
        $("#content").css('margin-top',$("#title").height());
    },
onTick: function () {
        this.setState({time:new Date().toLocaleTimeString()});
		},
    render: function () {
        var children = React.Children.map(this.props.children, function (child) {
            return (child);
        });
        return (<div className="grid">
            <div id="title" className="row cells3 align-center text-shadow bg-cyan
            fg-white align-center " style={{position:'fixed',top:0,left:0,zIndex:999,opacity:0.75}}>
                <div className="cell">
                    <span className="tag info"><h4>{this.state.date}
                    </h4></span></div>
                <div className="cell">
                    <span className="tag info"><h4>{this.props.title}</h4></span>
                </div>
                <div className="cell">
                    <span className="tag info"><h4>{this.state.time}
                    </h4></span></div>
            </div>
            <div id="content" className="row">
                {children}
            </div>
            
        </div>)
    }
})