var KepPadOnChange = function () {

};

// var SelectBox = React.createClass({
//
//     handChange: function (event) {
//         this.props.onChange(event.target.value);
//     },
//
//     render: function () {
//         var showOption = [];
//         showOption.push(<option value='0'>请选择
//         </option>);
//         if (this.props.data != ''){
//             this.props.data.map(function (op) {
//                 showOption.push(<option key={op.id} value={op.id}>{op.name}
//                 </option>);
//             })
//         }
//         return (<select id={this.props.id} onChange={this.handChange.bind(this)}>
//             {showOption}
//         </select>);
//     }
// });
//
// var SelectBoxList = React.createClass({
//     // getDefaultProps: function () {
//     //     return setCla
//     // },
//     propTypes:{
//         setClassId: React.PropTypes.func
//     },
//
//     getInitialState: function () {
//         return ({classData: '', lineData:''});
//     },
//
//     selectBoxLineChange: function (id) {
//         var _self = this;
//         $.ajax({
//             url:globeSelectClassUrl,
//             type: 'get',
//             data: {"line": id.toString()},
//             success: function (data) {
//                 var jsonData = eval("("+data+")");
//                 if(jsonData.message){
//                     _self.setState({classData: ''});
//                     return ;
//                 }
//                 _self.setState({classData: jsonData});
//             },
//             error: function (data) {
//                 _self.props.showPageState(PageState.Danger, '页面数据初始化加载失败');
//             }
//
//         });
//     },
//
//     selectClassChange: function (id) {
//         if (parseInt(id) == 0)
//             id = '';
//         this.props.getClassId(id);
//         this.props.showPageState(PageState.NoDisplay, '');
//     },
//
//     componentDidMount: function () {
//         var _self = this;
//         $.ajax({
//             url:globeSelectLineUrl,
//             type: 'GET',
//             success: function (data) {
//                 var jsonData = eval(data);
//                 _self.setState({lineData: jsonData});
//             },
//             error: function (data) {
//                 _self.props.showPageState(PageState.Danger, '页面数据初始化加载失败');
//             }
//         })
//     },
//
//     render: function () {
//         return (
//             <div className="row cells6">
//                 <div className="cell">
//                     <label ><h4>制:</h4></label>
//                 </div>
//                 <div className="input-control select cell colspan2">
//                     <SelectBox id="lineBox" data={this.state.lineData} onChange={this.selectBoxLineChange} />
//                 </div>
//                 <div className="cell colspan1">
//                     <label htmlFor="mapBug"><h4>课组:</h4></label>
//                 </div>
//                 <div className="input-control select cell colspan2">
//                     <SelectBox id="classBox" data={this.state.classData} onChange={this.selectClassChange} />
//                 </div>
//
//             </div>
//             );
//     },
// });

// var testData = [{id:"1", name:"word"}, {id:"2", name:"hello"}];
// React.render(<SelectBoxList  data={testData} />, document.body);