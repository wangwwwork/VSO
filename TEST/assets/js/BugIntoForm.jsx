/**
 * Created by Lemon on 2016/4/8.
 */
var BugIntoForm = React.createClass({
    getInitialState: function () {
        var equitmentItems = Immutable.fromJS(
            [{
                equitmentItemId: 0,
                equitmentName: '射出成型机',
                equitmentInfo:'123456',
                equitmentContent:'456',
                equitmentStartTime: '2016/3/30 上午5:21:00',
                equitmentEndTime: '2016/3/30 下午3:21:00',
                equitmentTime: '10小时'
            }, {
                equitmentItemId: 1,
                equitmentName: '自动打端机',
                equitmentInfo:'456789',
                equitmentContent:'123',
                equitmentStartTime: '2016/3/30 上午5:21:00',
                equitmentEndTime: '2016/3/30 下午3:21:00',
                equitmentTime: '10小时'
            }]);
        return {
            time:'',
            equitmentNames: [{id:1,name:'射出成型机'},{ id:2,name:'自动打端机'},{ id:3,name:'SATA自动打端机'},{id:4,name: '排线自动打端机'}],
            equitmentItems,
            newEquitment:{ equitmentItemId:'',equitmentName:'',  equitmentInfo:'',equitmentContent:'',equitmentStartTime: '',equitmentEndTime: '',equitmentTime: ''}
        };
    },
    handleChange: function (name,event) {
        var newState = this.state.newEquitment;
        newState[name] = event.target.value;
        this.setState({newEquitment: newState});
    },
    handleClick: function () {
        function dateToString(d,e){
            var EndTime = d;
            var NowTime = e;
            var t = EndTime.getTime() - NowTime.getTime();
            var d = Math.floor(t / 1000 / 60 / 60 / 24).toString();
            var h = Math.floor(t / 1000 / 60 / 60 % 24);
            var m = Math.floor(t / 1000 / 60 % 60);
            var s = Math.floor(t / 1000 % 60);
            if(d!=0){d=d+"天"}else{d=null};
            if(h!=0){h=h+"小时"}else{h=null};
            if(m!=0){m=m+"分"}else{m=null};
            if(s!=0){s=s+"秒"}else{s=null};
            if(isNaN(d)&&isNaN(h)&&isNaN(m)&&isNaN(s)){
                return;
            }else{
                return [d,h,m,s].join('');
            }
        };
        var times=dateToString(new Date(this.state.newEquitment.equitmentEndTime),new Date(this.state.newEquitment.equitmentStartTime));
        this.setState({time:times});
    },
    handleInputPage: function () {
     var dialog = $('#InputPage');
     dialog.toggle();
    },
    handleSave: function() {
        var newEquitment = this.state.newEquitment;
        var newEquitments = Immutable.fromJS({
            equitmentItemId: newEquitment.equitmentItemId,
            equitmentName: newEquitment.equitmentName,
            equitmentInfo: newEquitment.equitmentInfo,
            equitmentContent: newEquitment.equitmentContent,
            equitmentStartTime: newEquitment.equitmentStartTime,
            equitmentEndTime:newEquitment.equitmentEndTime,
            equitmentTime:this.state.time
        });
        var news = this.state.equitmentItems.push(newEquitments);
        this.setState({equitmentItems: news});
        console.log(this.state);
    },
render: function () {
    var exitEquitments=[];
    for(var i=0;i<this.state.equitmentItems.size;i++)
    {
        exitEquitments.push(<tr>
            <td>{this.state.equitmentItems.get(i).get('equitmentName')}</td>
            <td>{this.state.equitmentItems.get(i).get('equitmentInfo')}</td>
            <td>{this.state.equitmentItems.get(i).get('equitmentContent')}</td>
            <td>{this.state.equitmentItems.get(i).get('equitmentStartTime')}</td>
            <td>{this.state.equitmentItems.get(i).get('equitmentEndTime')}</td>
            <td>{this.state.equitmentItems.get(i).get('equitmentTime')}</td>
        </tr>);
    }
  return(
      <div className="grid">
          <div className="row cells10 align-center">
              <div className="cell colspan1">
                  <label htmlFor="mapBug"><h4>图号:</h4></label>
              </div>
              <div className="input-control text cell colspan9"
                   data-role="input">
                  <input id="mapBug" type="text" onChange={this.handleChange}/>
                  <button className="button helper-button clear">
                      <span className="mif-cross"></span></button>
              </div>
          </div>
              <table className="table striped hovered cell-hovered border bordered">
                  <thead>
                  <tr>
                      <th>设备名称</th>
                      <th >编号</th>
                      <th >故障说明</th>
                      <th >开始时间</th>
                      <th >结束时间</th>
                      <th >故障时间</th>
                  </tr>
                  </thead>
                  <tbody>
                  {exitEquitments}
                  </tbody>
              </table>
          <button className="button cycle-button" style={{marginLeft:'50%'}} data-toggle="modal"
                  data-target="#InputPage">+</button>
          <FooterForm></FooterForm>


          <div className="modal fade" id="InputPage"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div className="modal-header" style={{background:'white'}}>
                  <button type="button" className="close"
                          data-dismiss="modal" aria-hidden="true">
                      &times;
                  </button>
                  <h2 className="modal-title" id="myModalLabel">
                     故障输入框
                  </h2>
              </div>
              <div className="modal-content">
              <div className="row cells2">
                  <div className="cell">
                      <label htmlfor="equipmentId"><h4>设备名称</h4></label>
                  </div>
                  <div className="input-control select cell">
                      <select onChange={this.handleChange.bind(this,'equitmentName')} >
                          {this.state.equitmentNames.map(function (op) {
                              return <option key={op.id} value={op.id}>{op.id+'、'+op.name}
                              </option>
                          })}
                      </select>
                  </div>
              </div>
              <div className="row cells2">
                  <div className="cell">
                      <label><h4>编号</h4></label>
                  </div>
                  <div className="input-control select cell">
                      <input type="text" onChange={this.handleChange.bind(this, 'equitmentInfo')}/>
                  </div>
              </div>
              <div className="row cells2">
                  <div className="cell">
                      <label><h4>开始时间</h4></label>
                  </div>
                  <div className="input-control select cell">
                      <input type="datetime-local" onChange={this.handleChange.bind(this, 'equitmentStartTime')} />
                  </div>
              </div>
              <div className="row cells2">
                  <div className="cell">
                      <label><h4>结束时间</h4></label>
                  </div>
                  <div className="input-control select cell">
                      <input type="datetime-local" onChange={this.handleChange.bind(this, 'equitmentEndTime')} />
                  </div>
              </div>
              <div className="row cells2">
                  <div className="cell">
                      <label><h4>故障时间</h4></label>
                  </div>
                  <div className="input-control select cell">
                      <div class="input-control text"><input type="text" value={this.state.time} onClick={this.handleClick}  disabled /></div>
                  </div>
              </div>
              <div className="row cells2">
                  <div className="cell">
                      <label><h4>故障说明</h4></label>
                  </div>
                  <div className="input-control select full-size"data-role="input" data-text-auto-resize="true">
                      <textarea type="text" onChange={this.handleChange.bind(this, 'equitmentContent')}></textarea>
                  </div>
              </div><br/><br/><br/>
             <div className="modal-footer"><button className="button" style={{marginLeft:'1%',float:'right'}} data-dismiss="modal">关闭
             </button> <button className="button primary" style={{float:'right'}}onClick={this.handleSave} data-dismiss="modal">存档
              </button></div>
              </div>
           </div>
      </div>
  );
},
});