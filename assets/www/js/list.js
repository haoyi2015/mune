 var APIdata = ''; 
 
var myApp = angular.module('mune', []); 
myApp.controller('myListCtr', function($scope, $http, $timeout) { 
	var status = true;
	$scope.uimg = "data:image/png;base64,";
	$scope.ushopItems = [];
	$scope.uetMenus =[];
	$scope.uSetReadCardWithMenu =[];  
	ClientMain.ReadMenuCallback = function(data) {
			//alert(data);
	}
		//请求列表数据
	$scope.getMarketData = function() { 
		//获取读取器
		ClientMain.APIFun({APIName:'GetReadCard',Params:[]},function(data) { 
			$scope.$apply(function(){ 
				 //赋值
				$scope.ushopItems = data.Context; 
			});
		});
	}
	/**
	 * opeMune 打开数据层
	 * @param goodsId
	 */
	$scope.opeMune = function(_RID,_MID) {
		$('.t-box').data("RID",_RID);
		//弹层菜单
		ClientMain.APIFun({APIName:'GetMenus',Params:[]},function(data) {
			$scope.$apply(function(){ 
				 //赋值
				$scope.uetMenus = data.Context; 
			}); 
		}); 
		$('.t-box').fadeIn();
	}
	
	//弹层菜单选择
	$scope.uetMenusFun =function(_MID){
		ClientMain.APIFun({APIName:'SetReadCardWithMenu',Params:[$('.t-box').data("RID"),_MID]},function(data) {
			
		});
	 
		$('.t-box').fadeOut();
		//刷新数据
		$scope.getMarketData();
	}
	
	//记录点击次数
	var _aipFunClickCount=0; 
	//弹出ip设置
	$scope.aipFun =function(){
//		if(_aipFunClickCount<3)
//		{ 
//			  //3秒内点击5次才有效
//			  if(_aipFunClickCount==0)
//				{
//				  window.setTimeout(function(){ _aipFunClickCount=0;},2000);
//				}
//			  _aipFunClickCount++;
//			  return;
//		}
//		_aipFunClickCount=0;
		
		//获取IP地址
		var vData = ClientMain.APIFun({APIName:'GetIpAddr',Params:[]});
		//设置IP
		if(vData.Code==0)
		{
			$('#IP').val(vData.Context.IpAddr);
			$('#Dkou').val(vData.Context.IpPoint);
		}
		
		$('.ipbox,.wzhao').fadeIn();
	}
	//取消ip设置
	$scope.canalAipFun =function(){
		$('.ipbox,.wzhao').fadeOut();
	}
	
	//IP 事件
	$scope.saveIp =function(){
		var uSetIpAddr = {
			APIName: 'SetIpAddr',
			Params: [$('#IP').val(),$('#Dkou').val()]
		};
		//设置IP地址
		var vData = ClientMain.APIFun(uSetIpAddr); 
	}
	
	$scope.getMarketData(); 
});