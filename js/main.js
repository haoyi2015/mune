//计算字体
(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);



//window.MenuClient = {
//		Callback:null,
//		APIFun: function(data) {
//			var _data = JSON.parse(data);
//
//		if(_data.APIName == "GetIpAddr")
//		{
//			return JSON.stringify({
//				Code: 0,
//				Context: {IpAddr:"192.168.20.41",IpPoint:"2201"}
//			});
//				//设置IP地址
//		} else if (_data.APIName == "SetIpAddr") { 
//				return JSON.stringify({
//					Code: 0,
//					Context: true
//				});
//			//获取菜单
//			} else if (_data.APIName == "GetMenus") {
//				//模仿Android回调
//				 window.MenuClient.Callback({
//						APIName: 'GetMenus',
//						Code:0,
//						Context: [{"MID":"1059ea98-c313-4898-97b8-40a5ef0577ab","MImg":"","MName":"辣椒炒肉","RID":"1000"},
//						          {"MID":"183fdf6a-a747-465b-99c7-e4058ff14bbc","MImg":"","MName":"红烧大排","RID":"1001"},
//						          {"MID":"1b21712b-857e-42d6-9e02-f82f68c61c6f","MImg":"","MName":"金针菇炒肉","RID":"1002"},
//						          {"MID":"91c6d387-d1d0-4a96-882e-935c51945281","MImg":"","MName":"红烧大排","RID":"1003"},
//						          {"MID":"99a635bf-7ede-408c-be42-6b522992a73a","MImg":"","MName":"青椒炒蛋","RID":"1004"},
//						          {"MID":"edad2a11-d1ed-4807-a0b5-c0ac12546097","MImg":"","MName":"红烧鱼块","RID":"1005"}]
//					});
//			} else if (_data.APIName == "GetReadCard") { 
//				//模仿Android回调
//				 window.MenuClient.Callback({
//						APIName: 'GetReadCard',
//						Code:0,
//						Context: [{"MID":"1059ea98-c313-4898-97b8-40a5ef0577ab","MImg":"iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAIAAAD9MqGbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw\/eHBhY2tldCBiZWdpbj0i77u\/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxNUExMzhFRDJGODVFNTExQTQ2REZFODA0ODdBRDk5MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3OTEzNDBDRUExOTExMUU1QTMxOUJFN0JFODhGMjFDMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3OTEzNDBDREExOTExMUU1QTMxOUJFN0JFODhGMjFDMyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNzM1OTM1ODc4OEJFNTExQThFQ0YxMDMzM0Y0RUE2MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNUExMzhFRDJGODVFNTExQTQ2REZFODA0ODdBRDk5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI\/PgIWiDwAAAP0SURBVHjaFJN\/aJR1HMc\/3x\/Pc89z224rF+kq4ZJkxCgatoRGphPTaktb6h\/pRAINNMWMmFgRVEboQJCGQQkFTlzbUqMV6CRZroxMECWdZeaY7nZ3z91zd8+P7+\/O\/z9vPu\/3i\/cbZUsVy0gtbY1ssMAIQRyn5vZFOboprJtHlx8kDc1SSbAUNshohBWX1DKEYMUoF45OupqEEY+4hfmZveHAYjS\/zUL1if6WxNg2BCxIJBkzBidCp04gV2mDAr\/EtFPCyko6jdfO8OHtgoS1qz6xmp4A5IiZy\/LH7X5coR376VPdgqZAYKG0NhbK5LVFENd32Zle9+JAQ\/vrVuubUtViCMAJuVSWPYf\/eTweO0AffFSs+JQ98kqCUAwCzcQRujJSP7IVJ+fiF\/fpeQsxEUQixdG9LAjHWrqOpctcnu+jl47p5hVs6fu4aRF5r7VIR3rhydVkTT80zrEEM4IwTAGD1rIKJYGqaiNsqh5fUoGInR\/mccjTy6h+9kMS5uDX4xKnyJItzFGUVxljgbENkigEJsVqMMT\/quE+9+qYfOFd6Ogl2EVToa7iTkyeVD9tBG3dv+wAXdAO3NPIIE0lTQhCEjfPBad7pXbImkG2YAnmUfUSZfwKEEPBlVw7P++mE4egpctZ\/hmmXEPFMKMm+tmFgXjRJtp1uBqfGNAyQshGdyZGUpf6dbpdte1CTiqcuuD80AP+bPKlvrixCb7fG3oZp7NPtKwPA7\/mu57k9VPeyoO6bSsql7S8fCIc7ZHJmoa1QyjdXmFQ98sH6Nw+w5VsXoW6joQPzKXXziaGu42x2avfmvRzNAygkq\/kAzOVm\/WObSzshtyJHX62FIYmO3k+O\/51psjvFCJ\/+K1gFxS\/WpP3Zqcj4\/lRuVJB\/\/lhCjSYZFCL6q6MksHNgZs0a7+xm9otjIR3Ax\/vgLzHVh+RT68jeY9OXYgoR02LUf6Po+jkGzSVNl2DlfktibCMx\/fEv39e+8xu0fAYjO7ECztM5xci9bB7fTQY6nbAsdeNRAueh6lYZ6f\/KR9uL+wE\/9THmbK4Ke9ZjfY3V817Zw9OK5MtR6XBd7I7ID\/Qk81lZkKTKwRoJseIZRui9eQQGt1G6Zz6zoEg3Zpn+VRQMvVpc\/eqNdRNyjfgtaMyvV5U+2wRLAEKfujlC8VSVAhlLjMZHt1Q2g65kT1eyVS\/FcYPld8G\/8uV3tTftwMzHVaKPi94YrYYoNulmGFdq4wjE6baCRf49Bgd2kDdRpmcR279hpd+FLVt1nbSjSJJasAgomJNAeWLPrbt6rhVzByXcChrc18tZuz0lvDWXw0vH4aHWrVSCMlYqaTiAtvVPdhG\/i\/AAJEcR2YRnnRmAAAAAElFTkSuQmCC","MName":"辣椒炒肉","RID":"1000"},{"MID":"183fdf6a-a747-465b-99c7-e4058ff14bbc","MImg":"iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAYAAADAHFVeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5\/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP\/wBr28AAgBw1S4kEsfh\/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi\/mvwbyI+IfHf\/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3\/ldM9sJoFoK0Hr5i3k4\/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W\/gi372\/EAe\/tt68ABxmkCZrcCjg\/1xYW52rlKO58sEQjFu9+cj\/seFf\/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W\/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv\/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT\/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC\/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl\/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y\/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j\/i\/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM\/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c\/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m\/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl\/VfPV5bdra3kq3yu3rSOuk626s91m\/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r\/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q\/5n7duEd3T8Wej3ulewf2Re\/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq\/dawto22gPaG97+iMo50dXh1Hvrf\/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1\/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w\/eFIr1tv62X3y+1XPK509E3rO9Hv03\/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r\/y+2v3qB\/oP6n+0\/rFlwG3g+GDAYM\/DWQ\/vDgmHnv6U\/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59\/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm\/K3O233vuO+638e9H5ko\/ED+UPPR+mPHp9BP9z7nfP78L\/eE8\/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAJgSURBVHjarJbLjlxFDIY\/u1x1unuSIeHyKsCzAA\/JC7BgjdghkSgiygoiMgpDMt05p+rYZtESm+ndaUu18ebTX\/59kZev3qbHCWsTHg1U8DhRaWwJFyEzEZJSCpqB0RoxEhfF3alaUFN61E2wkiuZCQmpiZPY4oBONFNynYl0vCeqYxvMDFU9A0lAschExPDupK9Y2+O6Q7Nvgo3hQACgcs5ZbQXNgvZOEGRp3M\/JlxpsC0GkIJKICCpgfTlSfcLEqaa8f5j55bc\/uevbavbdt1+hCBBkJpGJtVIoCSVBW0Nkx\/ujQ53YGilA5P91U3E4WWe0G3wOdnpPsf1mEOHnh6IUBEVevL5LlxWJCqNTDnBcn7OLDxtVBSICKJIAgUUEaoJnx+oeGR\/4LO9YtG78w8epMwxhmvaMOXCBVZ8iOV+bhbVmfGIwTiv7kszTjh9\/fsOnss0gP3z97LKyUNi1A\/SPjAxO5QmFwbXDIqAUIbxT2x5dP\/Is\/+FBb64Ok9\/\/eJdSYHgg2SjWwY24grLHbsRJb6Q6IomPymFylnVjm11yY1EhrZKrI97RuufdHNy0bftM\/PEgN5FkWRcslb0l\/47BT7++5iG31ez7b764oAzBcWo26Eek3nDiQEu7vhsBeu\/sa8VqId1xH3iZru\/Gl2\/eZpfGJIIf77Hbz\/nbb3nuf22bIKGXZiMoSagjdcc6d271nkjZuDovNXWCoAxfsGLQnUM5sciTjbPxcZ9atcIynyilQAhZlKFPYeNZICGoKhHB6oPWGqYKVsv5EookM8h0iG0wdz8rzPPdWIrw3wAs+k6ywW7IogAAAABJRU5ErkJggg==","MName":"红烧大排","RID":"1001"},{"MID":"1b21712b-857e-42d6-9e02-f82f68c61c6f","MImg":"iVBORw0KGgoAAAANSUhEUgAAABsAAAAZCAYAAADAHFVeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5\/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP\/wBr28AAgBw1S4kEsfh\/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi\/mvwbyI+IfHf\/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3\/ldM9sJoFoK0Hr5i3k4\/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W\/gi372\/EAe\/tt68ABxmkCZrcCjg\/1xYW52rlKO58sEQjFu9+cj\/seFf\/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W\/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv\/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT\/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC\/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl\/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y\/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j\/i\/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM\/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c\/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m\/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl\/VfPV5bdra3kq3yu3rSOuk626s91m\/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r\/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q\/5n7duEd3T8Wej3ulewf2Re\/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq\/dawto22gPaG97+iMo50dXh1Hvrf\/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1\/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w\/eFIr1tv62X3y+1XPK509E3rO9Hv03\/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r\/y+2v3qB\/oP6n+0\/rFlwG3g+GDAYM\/DWQ\/vDgmHnv6U\/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59\/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm\/K3O233vuO+638e9H5ko\/ED+UPPR+mPHp9BP9z7nfP78L\/eE8\/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAJgSURBVHjarJbLjlxFDIY\/u1x1unuSIeHyKsCzAA\/JC7BgjdghkSgiygoiMgpDMt05p+rYZtESm+ndaUu18ebTX\/59kZev3qbHCWsTHg1U8DhRaWwJFyEzEZJSCpqB0RoxEhfF3alaUFN61E2wkiuZCQmpiZPY4oBONFNynYl0vCeqYxvMDFU9A0lAschExPDupK9Y2+O6Q7Nvgo3hQACgcs5ZbQXNgvZOEGRp3M\/JlxpsC0GkIJKICCpgfTlSfcLEqaa8f5j55bc\/uevbavbdt1+hCBBkJpGJtVIoCSVBW0Nkx\/ujQ53YGilA5P91U3E4WWe0G3wOdnpPsf1mEOHnh6IUBEVevL5LlxWJCqNTDnBcn7OLDxtVBSICKJIAgUUEaoJnx+oeGR\/4LO9YtG78w8epMwxhmvaMOXCBVZ8iOV+bhbVmfGIwTiv7kszTjh9\/fsOnss0gP3z97LKyUNi1A\/SPjAxO5QmFwbXDIqAUIbxT2x5dP\/Is\/+FBb64Ok9\/\/eJdSYHgg2SjWwY24grLHbsRJb6Q6IomPymFylnVjm11yY1EhrZKrI97RuufdHNy0bftM\/PEgN5FkWRcslb0l\/47BT7++5iG31ez7b764oAzBcWo26Eek3nDiQEu7vhsBeu\/sa8VqId1xH3iZru\/Gl2\/eZpfGJIIf77Hbz\/nbb3nuf22bIKGXZiMoSagjdcc6d271nkjZuDovNXWCoAxfsGLQnUM5sciTjbPxcZ9atcIynyilQAhZlKFPYeNZICGoKhHB6oPWGqYKVsv5EookM8h0iG0wdz8rzPPdWIrw3wAs+k6ywW7IogAAAABJRU5ErkJggg==","MName":"金针菇炒肉","RID":"1002"},{"MID":"91c6d387-d1d0-4a96-882e-935c51945281","MImg":"iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAIAAAD9MqGbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw\/eHBhY2tldCBiZWdpbj0i77u\/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxNUExMzhFRDJGODVFNTExQTQ2REZFODA0ODdBRDk5MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NDkzMkNEQ0ExOTAxMUU1OUE4MTk0QUNFQkRCMzdDQSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NDkzMkNEQkExOTAxMUU1OUE4MTk0QUNFQkRCMzdDQSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNzM1OTM1ODc4OEJFNTExQThFQ0YxMDMzM0Y0RUE2MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNUExMzhFRDJGODVFNTExQTQ2REZFODA0ODdBRDk5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI\/PiP5tPUAAAMfSURBVHjabJPLjh01EIbL5fKlT\/fp6WRgYIcES16BRRTCXXkH2HPJAiQEESGIBYqiEMgiSAgeAlYIwQbEkyBNpDlzyTmnL7bLLsx+vLX8\/1Xf\/1u98vvrBKucJ62AEeGyI9KqsvPsdSe7xTnRokYa4uHXb99poLUBE+ZLX+aSrMt2avd266F\/Ck8+\/OszOvX7NhujKNlziNY6CrloKaKxLIGcAihGLAaMlByYUPQgh5yBmrjoBXYufPTb7djM9f6na9+tod\/kM9McQORMJhlkZlO0osxziQ0QKpoxKed6Uuw3UV9NtA9G7+Dk3T9vdW69pEWptciulTBzROx\/vvGty01MgVa6kZC2XBB6kmhVsyq6y8\/\/+NpDDW5IyLMOK0ZVcinRsJm6bCtKJEYSnXt\/cO\/Vu0Mi0NQGCGXsgxdLu7LXvaW6KaNTpgHeGfGaNRncAkQj87h7IR4gHmFaH+sxubyIUELjhpx0dbCqzDAyMLFqk2Mu1IXU6Wbj0ye\/3D3rnqx0f\/\/6nVKcdWrm4iMUNCnsEujB9FPYYoNn8cKSJjF5DOydObl67KYuSLJ8MMH2g78\/jzFaXVK1scZW64oi28dv3bNoCzPtK1\/ncp7XM06GFVS1xcf142v33VTZEGWo7WrqsNlMWGwFCyGLpqHwzOctPvf9mw81DxA3rQxj3K+EIjrgGaqt9HVqMZYrm6RqbTRRzREcAaciwSOy93QhAVqdFcfIQzE6pag411ppHfPsVBfjKKVU7q6D9Zm++PiPL07p3Gf\/wxsP3BaWXlYWpilavxauvQNInEUxCmudS92qcWHKsArH7b9H3O+zuILcp1u\/fmqasIdtBuulCzhx6bvoH7xz+xCNRV0HfUoeLXcvnh+eUPJcIsZmMY9ufiOLanwbgyi1c5RipoDShjYCLzFS2zSTsC\/9Vze\/vFKOQG\/z4rOBHANAGwQMlqyHxHsE43TdGrQj6w3tF1lKaYFI\/GlVB3E6A+aaJKUSZawhFmiKzIbUnOeWuvS\/KNAz47Pv\/fN+U7WTSZgu\/dnIJihcUyPTebyiNgu\/PL70nwADAGHG32ChebUbAAAAAElFTkSuQmCC","MName":"红烧大排","RID":"1003"},{"MID":"99a635bf-7ede-408c-be42-6b522992a73a","MImg":"iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAIAAAD9MqGbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw\/eHBhY2tldCBiZWdpbj0i77u\/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxNUExMzhFRDJGODVFNTExQTQ2REZFODA0ODdBRDk5MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3OTEzNDBDRUExOTExMUU1QTMxOUJFN0JFODhGMjFDMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3OTEzNDBDREExOTExMUU1QTMxOUJFN0JFODhGMjFDMyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNzM1OTM1ODc4OEJFNTExQThFQ0YxMDMzM0Y0RUE2MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNUExMzhFRDJGODVFNTExQTQ2REZFODA0ODdBRDk5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI\/PgIWiDwAAAP0SURBVHjaFJN\/aJR1HMc\/3x\/Pc89z224rF+kq4ZJkxCgatoRGphPTaktb6h\/pRAINNMWMmFgRVEboQJCGQQkFTlzbUqMV6CRZroxMECWdZeaY7nZ3z91zd8+P7+\/O\/z9vPu\/3i\/cbZUsVy0gtbY1ssMAIQRyn5vZFOboprJtHlx8kDc1SSbAUNshohBWX1DKEYMUoF45OupqEEY+4hfmZveHAYjS\/zUL1if6WxNg2BCxIJBkzBidCp04gV2mDAr\/EtFPCyko6jdfO8OHtgoS1qz6xmp4A5IiZy\/LH7X5coR376VPdgqZAYKG0NhbK5LVFENd32Zle9+JAQ\/vrVuubUtViCMAJuVSWPYf\/eTweO0AffFSs+JQ98kqCUAwCzcQRujJSP7IVJ+fiF\/fpeQsxEUQixdG9LAjHWrqOpctcnu+jl47p5hVs6fu4aRF5r7VIR3rhydVkTT80zrEEM4IwTAGD1rIKJYGqaiNsqh5fUoGInR\/mccjTy6h+9kMS5uDX4xKnyJItzFGUVxljgbENkigEJsVqMMT\/quE+9+qYfOFd6Ogl2EVToa7iTkyeVD9tBG3dv+wAXdAO3NPIIE0lTQhCEjfPBad7pXbImkG2YAnmUfUSZfwKEEPBlVw7P++mE4egpctZ\/hmmXEPFMKMm+tmFgXjRJtp1uBqfGNAyQshGdyZGUpf6dbpdte1CTiqcuuD80AP+bPKlvrixCb7fG3oZp7NPtKwPA7\/mu57k9VPeyoO6bSsql7S8fCIc7ZHJmoa1QyjdXmFQ98sH6Nw+w5VsXoW6joQPzKXXziaGu42x2avfmvRzNAygkq\/kAzOVm\/WObSzshtyJHX62FIYmO3k+O\/51psjvFCJ\/+K1gFxS\/WpP3Zqcj4\/lRuVJB\/\/lhCjSYZFCL6q6MksHNgZs0a7+xm9otjIR3Ax\/vgLzHVh+RT68jeY9OXYgoR02LUf6Po+jkGzSVNl2DlfktibCMx\/fEv39e+8xu0fAYjO7ECztM5xci9bB7fTQY6nbAsdeNRAueh6lYZ6f\/KR9uL+wE\/9THmbK4Ke9ZjfY3V817Zw9OK5MtR6XBd7I7ID\/Qk81lZkKTKwRoJseIZRui9eQQGt1G6Zz6zoEg3Zpn+VRQMvVpc\/eqNdRNyjfgtaMyvV5U+2wRLAEKfujlC8VSVAhlLjMZHt1Q2g65kT1eyVS\/FcYPld8G\/8uV3tTftwMzHVaKPi94YrYYoNulmGFdq4wjE6baCRf49Bgd2kDdRpmcR279hpd+FLVt1nbSjSJJasAgomJNAeWLPrbt6rhVzByXcChrc18tZuz0lvDWXw0vH4aHWrVSCMlYqaTiAtvVPdhG\/i\/AAJEcR2YRnnRmAAAAAElFTkSuQmCC","MName":"青椒炒蛋","RID":"1004"},{"MID":"edad2a11-d1ed-4807-a0b5-c0ac12546097","MImg":"iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAIAAAD9MqGbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw\/eHBhY2tldCBiZWdpbj0i77u\/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxNUExMzhFRDJGODVFNTExQTQ2REZFODA0ODdBRDk5MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3NjhFQkQ4M0ExOUIxMUU1QTY2NEQ2MUVFRkYwQkEyRSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NjhFQkQ4MkExOUIxMUU1QTY2NEQ2MUVFRkYwQkEyRSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNzM1OTM1ODc4OEJFNTExQThFQ0YxMDMzM0Y0RUE2MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNUExMzhFRDJGODVFNTExQTQ2REZFODA0ODdBRDk5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI\/PlYX7N0AAAO9SURBVHjaDJNdiNRlFMbPOe\/7\/j9mP2Z2xnV1V7MPS1c3bVMzC2kNSpPCkBSJLoRAoZsi6qK8iCCCrmIDISjwQhAvQgPvskAtI2VRzMl2c9vVtUbbWdd1nP\/8v973nOb2PJznged3Dlan6+DQoOfrWGk7mfecng3O1OGvljjBnk7uDeAxzHf3Ljxbdhl7cSYoRoC1gSyVoBjYefK\/ulk6ektHjCbnXEGnhwcekqdKfGTKOzC5eKSTDy2\/v6Jg6hGhyQjTYLln\/85h\/x8dX4+7SERBzl4ESM2EY0PbB8zxrfT9M3gpozeqfrUVlwvzApaKobku4TvXuy\/e0lgIfUAU53QADrYtwld6pZ7YKQebl9hzL1C5I9w73j0tHSUtFGszOlO4UqOwCyQWa8Uq5VtT0rBzOa7uIscU5vJPgn0Bf7cVSxR+OtFBkNPFB82Tc\/F7a+2p52T\/oPM1A+PKYnp0hN9cCblIuxEUDDy89wBXhDi6ITvbpFP3A\/1tzbzY2\/nlRm45WFnGH2qqteC2r+GRivjsSImn5R6JyjPjhfOp3bEUXq7on+ZDmmqFu\/ohdXY2zVlgzwAcHKR3V4WdCOMNOHJD1RO9xGC3UTnzguiUvdf6ZSZGbVCv73GNDApKO+aPh50S3eb167z6oAoX6vD6snx9EQdDb8dSUcotpDhUpsiRZsoLnqeRImBiQCYR23IW0J9NgJPoxAydQK+C7sN18PajGLYF7TLUpEVnOQg6sUCkMxbLyDpYFcKefiFjQIUA7m5mP\/kdjk0KhlhLnGs33unDtftovEyJY4AcSTFr5xTIqwO0ZcBvjxAMaEgjvtmgAsjYXV1AR0O6dfJf24UF9onRBdahokyYlHu6CI93tSCPJaP+Ln\/fWjr4JDuwp2tqKFD0UsGeu01n53iRAcMoRDGqlFVC6moTqgsaYtNXtN9sSA4Pqyc64PiN\/PxcsrMvpucXZ5vK+YELlFnqDjBFNMAlFAA8PsNjt3BomX7rEbehW5cNzDT4oyv+zsV2W6lBqPiLh6NmYvf9ZsHJQODadyMOtIVaisN9dGyrPTSk+gp6PuW9YyBZ\/ll\/ym0Kl6frFVG3Heyu+su6C6PrYXPFtXLnxFxuulKo14XtfDhzB96\/CnON5omN0YDSdavx2tRsItDv0USiD0+7S83ylnK6cakarOhFmqMUfrkjPzdU9b90TWA\/Xx0tCWA28n1PcGLqTvurnPI6AsN5fP4B\/1jz\/rTlukUSNrptzusC3lWJN5W9NrYsb2nVXjD\/CzAA4S\/z8iJXG40AAAAASUVORK5CYII=","MName":"红烧鱼块","RID":"1005"}]
//					});
//			}
//		}
//	};


(function (win) {
    var Main = function () {
        this.calldata = null;
        this.callback = null;
        this.ReadMenuCallback=null;
        this.APIFun = function (_data, _callback) {
            //临时保存回调方法
            if (_callback)
                this.callback = _callback;
            //调用Android方法
            this.calldata = win.MenuClient.APIFun(JSON.stringify(_data)); 
            //判断是否有返回值
            if (this.calldata!=null && this.calldata!=undefined && this.calldata !="")
            	 return JSON.parse(this.calldata);
        };

        //实现Android回调Js方法
      win.MenuClient.Callback = function (data) {   
    	  //判读请求是否正常
    	  if(data.Code==1)
    	  {
    		 alert(data.Context);
    		 return;
    	  }
    	  
          //读写菜单成功Android主动调用
          if (data.APIName=="ReadMenuCommodity")
          {
          	this.ReadMenuCallback(data);
          	return;
          }
          //调用回调方法
          win.ClientMain.callback(data);
      };

    };
    win.ClientMain = new Main();

})(window);