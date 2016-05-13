(function (win) {

    var vMain = function () {

        //读取菜单成功函数
        this.ReadCardSuccess = function (data) { alert(data);};

        //临时变量 存储回调函数
        this._callback = null;

        //调用java代码
        this.APIFun = function (_APIName,_Data, _Callback) {
            this._callback = _Callback;

            //调用API
            if (win.MenuClient)
            {
                var _vParams = "";
                if (_Data && _Data!=null)
                {
                    for (var i = 0; i < _Data.length;i++)
                    {
                        _vParams += "'" + _Data[i]+ "',";
                    }
                    //截取最后一个逗号
                    _vParams = _vParams.length > 0 ? _vParams.substring(0, _vParams.length - 1) : "";
                }

                if (_vParams != "")
                    eval("win.MenuClient." + _APIName + "(" + _vParams + ")");
                else
                    eval("win.MenuClient." + _APIName + "()"); 
            }
        };
    }
     
    win.CMain = new vMain();

})(window)