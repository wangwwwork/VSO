/*
 1、异常损失工时
 2、无效工时
 以上两个功能共用一个界面，通过props中的action属性就可以区分.
 */
var ErrorTimeInputForm = React.createClass({
    mixins: [React.addons.PureRenderMixin],
    handleReturn: function () {
        var child = React.createElement(Work_HoursForm);
        React.render(<ChildForm title="工时">{child}</ChildForm>, document.body);
    },
    getInitialState: function () {
        //当前所有异常损失项目集合
        //使用Immutablejs实现不可变变量。
        var errorItems = Immutable.fromJS(
            [{
                errorItemId: 0,
                errorItemName: '1、机故',
                errorStart: '2016/3/30 上午5:21:00',
                errorEnd: '2016/3/30 下午3:21:00',
                errorSpan: 10
            }, {
                errorItemId: 1,
                errorItemName: '2、模故',
                errorStart: '2016/4/1 上午10:02:07',
                errorEnd: '2016/4/1 下午5:22:10',
                errorSpan: 21
            }]
        );
        return {
            // 获取异常损失工时项目列表
            itemOptions: [{id: 1, name: '机故'}
                , {id: 2, name: '模故'}],
            //当前所有异常损失项目集合
            errorItems,
            //新增的异常损失项目
            newItem: {
                errorItemId: 0, errorItemName: '', errorStart: '', errorEnd: '',
                errorSpan: 0
            }
        };
    },
    handleInputDialog: function () {
        var dialog = $('#dialog').data('dialog');
        dialog.toggle();
    },
    handleSaveItem: function () {
        var newItem = this.state.newItem;
        if (!!newItem.errorItemId && newItem.errorEnd
            && newItem.errorStart) {
            //0、矫正日期时间格式
            var start = new Date(newItem.errorStart);
            var end = new Date(newItem.errorEnd);
            newItem.errorStart = start.toLocaleString();
            newItem.errorEnd = end.toLocaleString();
            newItem.errorSpan = end - start;
            //1、保存到服务器中
            console.log(newItem);
            //2、把步骤1中返回的结果保存到本地集合中
            var newError = Immutable.fromJS({
                errorItemId: newItem.errorItemId,
                errorItemName: newItem.errorItemName,
                errorStart: newItem.errorStart,
                errorEnd: newItem.errorEnd,
                errorSpan: newItem.errorSpan
            });
            var errors = this.state.errorItems.push(newError);
            this.setState({errorItems: errors});
            console.log(this.state);
            //关闭dialog
            this.handleInputDialog();
        }
    },
    handleChange: function (key, e) {
        var newState = this.state.newItem;
        newState[key] = e.target.value;
        this.setState({newItem: newState});
    },
    render: function () {
        console.log(this.props.action);
        var rows = [];
        for (var i = 0; i < this.state.errorItems.size; i++) {
            rows.push(<tr key={i+'errorItems'}>
                <td>{this.state.errorItems.get(i).get('errorItemName')}</td>
                <td>{this.state.errorItems.get(i).get('errorStart')}</td>
                <td>{this.state.errorItems.get(i).get('errorEnd')}</td>
                <td>{this.state.errorItems.get(i).get('errorSpan')}</td>
            </tr>);
        }
        return (<div className="grid">
            <table className="table striped hovered cell-hovered border bordered"
                   id="main_table_demo">
                <thead>
                <tr>
                    <th>异常项目</th>
                    <th>开始时间</th>
                    <th>结束时间</th>
                    <th>损失时间</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
            <div className="row align-center">
                <button className="button cycle-button"
                        onClick={this.handleInputDialog}>+
                </button>
            </div>
            <FooterForm handleReturn={this.handleReturn}></FooterForm>
            <div data-role="dialog" id="dialog" data-close-button="true"
                 data-width="100%">
                <h2>新增异常信息</h2>
                <div className="row cells2">
                    <div className="cell">
                        <label htmlFor="item"><h4>异常项目</h4></label>
                    </div>
                    <div className="input-control select cell">
                        <select id="item" onChange={this.handleChange.bind(this,
                        'errorItemId')}>
                            {this.state.itemOptions.map(function (op) {
                                return <option key={op.id} value={op.id}>{op.name}
                                </option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="row cells2">
                    <div className="cell">
                        <label htmlFor="dateStart"><h4>开始时间</h4></label>
                    </div>
                    <div className="input-control text cell">
                        <input type="datetime-local" id="dateStart"
                               onChange={this.handleChange.bind(this,
                        'errorStart')}/>
                    </div>
                </div>
                <div className="row cells2">
                    <div className="cell">
                        <label htmlFor="dateEnd"><h4>结束时间</h4></label>
                    </div>
                    <div className="input-control text cell">
                        <input type="datetime-local" id="dateEnd"
                               onChange={this.handleChange.bind(this,
                        'errorEnd')}/>
                    </div>
                </div>
                <div className="row align-right">
                    <button className="button primary"
                            onClick={this.handleSaveItem}>存档
                    </button>
                </div>
            </div>

        </div>);
    }
})