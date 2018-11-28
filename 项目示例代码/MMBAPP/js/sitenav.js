/**
 * Created by Jepson on 2017/5/31.
 */

$(function() {
   	setSiteNav($('.site-nav'))

    // 获取所有商城导航的列表信息 并渲染到页面上
    function setSiteNav(dom, callback) {
        Route.getsitenav( function( data ) {
            var html = template('siteNav', data);
            dom.html(html);
        });
    }
})
