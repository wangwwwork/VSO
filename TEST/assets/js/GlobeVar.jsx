/*
用于存储获取后台数据的地址变量
 */

var getUserId = '5';
var getUserName = '未登录';
// var addr = 'http://10.101.3.189:8080'
var addr = 'http://192.168.11.119:8080'
//获取制的地址
var globeSelectLineUrl = addr + '/JAVSO/productline/selectall_line.do';

//g根据制id获取组的地址
var globeSelectClassUrl = addr + '/JAVSO/productgroup/selectall_group.do';

//添加人力
var globeInsertManpower = addr + '/JAVSO/Manpower/add_record.do';

//用戶登錄網址
var globeUserLoadAddr = addr + '/JAVSO/user/login_user.do';

var globeSelectUserByName = addr + '/JAVSO/user/select_user.do';