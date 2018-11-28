/**
 * Created by Jepson on 2017/5/30.
 */
/* 工具函数类 Tools 封装，基于 jquery  */
(function( window ){
    function Tools() {}

    Tools.fn = Tools.prototype = {
        constructor: Tools,
        author: 'Jepson'
    };

    /* 扩展函数 */
    Tools.extend = Tools.fn.extend = function( obj ) {
        for ( var k in obj ) {
            // 一般还会进行一个判断 if obj.hasOwnProperty( k )
            // 这里只是简单的 工具类，先简单来写
            this[ k ] = obj[ k ];
        }
    };

    /* 工具函数模块 */
    Tools.extend( {
        /* 公共函数 query(url) 解析url 传的参数，变成对象键值对 */
        query : function( url ) {
            var obj = {};
            var str = url.split('?')[1];
            str.split('&').forEach(function( v, i ) {
                var arr = v.split('=');
                obj[arr[0]] = arr[1] ? arr[1] : '';
            });
            return obj;
        }
    });

    /* 页面模板功能库 */
    Tools.extend( {
        /* 分页功能 */
        fenye : function( obj ) {
            /*------  处理参数 ------*/
            var href = location.href.split('?')[0]; // 获取当前页面 url
            /* 默认参数 */
            var base = {
                pageNum : 1,     // 总共几页，不传默认置为 1
                pageVal : 'pageid',     // 控制页面切换的参数,不传默认使用 pageid，根据 pageid 切页
                start : 1,       // 参数从几 开始传 默认为 1
                pageUrl : href,  // 不赋值默认为当前页面  xxx.html?pageVal
                extraStr: ''     // 默认为空，额外需要传在 url 中的值  &name=123...
            };
            /* 将传过来的参数赋值给 base */
            for ( var k in obj ) {
                base[ k ] = obj[ k ];
            }
            // 解析 search 获取参数 对象  pageid=x
            var o = {};
            // 初始化参数 { base.pageVal=base.start }
            o[base.pageVal] = base.start;

            var urlObj = location.search ? Tools.query( location.search ) : o;
            var pageid = parseInt( urlObj[base.pageVal] || base.start ) ;

            /* 获取元素节点 */
            var $btlast = $('.mfenye-last'); // 上一个页面
            var $btnext = $('.mfenye-next'); // 下一个页面
            var $select = $('.mfenye-select'); // select 标签


            /*------  添加功能 ------*/
            if ( !isNaN( +base.pageNum ) && !isNaN( +pageid ) ) {
                // 上一页功能
                pageid <= base.start ? $btlast.attr('href','javascript:;') : ( $btlast.attr('href', base.pageUrl + '?' + base.pageVal + '='+(pageid-1) + base.extraStr ) );
                // 下一页功能
                pageid >= (base.start + base.pageNum - 1) ? $btnext.attr('href','javascript:;') : ( $btnext.attr('href', base.pageUrl + '?' + base.pageVal + '='+(pageid+1) + base.extraStr ) );

                /*  select option 选择跳转功能  */
                $select.html('');   // 清空
                /* 添加 option */
                for ( var i = 1; i <= base.pageNum; i++ ) {
                    var option = document.createElement('option');
                    option.value = i + base.start - 1;  // 从 1 + start - 1 开始
                    option.innerHTML =  i  + ' / ' + base.pageNum;
                    /* 设置 底部选中的 option */
                    if( i == ( pageid - base.start + 1 ) ) option.selected = true;
                    $select.append( option );
                }
                /* 选中 option 切换到对应页面 */
                $select.on('change',function() {
                    location.href = base.pageUrl +  '?' + base.pageVal + '=' + $select[0]['value'] + base.extraStr;
                });
            }
        }
    });

    window.Tools = Tools; // 向外暴露 Tools 的引用

})( window );


(function($) {
    $.getUrlParam = function(name) {
        var reg = new RegExp("(^|&)" +
            name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
})(jQuery);
