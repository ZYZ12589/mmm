/**
 * Created by Jepson on 2017/5/30.
 */
$(function() {

    // 设置主菜单内容，并实现 查看更多功能
    setMenu($('#menu > .row'));
    // 省钱控第一页内容展示（折扣推荐）
    setMoneyCtrlProduct($('.product-list'));


    // 请求数据，设置主菜单内容，并实现 查看更多功能
    function setMenu( dom, callback ) {
        // 最后四个需要隐藏的元素
        var $lastFour;

        // 获取菜单数据
        Route.getindexmenu(function( res ){
            var data = res.result;
            var menuHtml = "";
            data.forEach(function( item, index ) {
                menuHtml += '<div class="menu-item">'
                            +   '<a href="' + item.titlehref + '">'
                            +       item.img
                            +       '<p>' + item.name + '</p>'
                            +   '</a>'
                            +'</div>';
            });
            $(dom).html(menuHtml);

            // 添加完成后才能获取最后四个元素，并将最后四个元素隐藏
            $lastFour = $(dom).children('.menu-item:nth-last-child(-n+4)')
            $lastFour.addClass('hide');

            // more更多按钮 控制倒数四个显示隐藏
            menuMore($(dom).find('.menu-item:nth-child(8) > a'));
        })

        // 控制倒数四个显示隐藏
        function menuMore(dom, callback) {
            $(dom).on('click', function() {
                $lastFour.toggleClass('hide');
            })
        }
    }

    // 省钱控第一页内容展示（折扣推荐）
    function setMoneyCtrlProduct(dom, pageid, callback) {
        // getmoneyctrl 请求数据结果
        Route.getmoneyctrl(function( data ){
            var html = template('moneyCtrl', data);
            dom.html(html);
        })
    }

});
