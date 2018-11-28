$(function () {
    setCoupon($('.coupon-title'));

    // 获取优惠券标题信息 并渲染到页面
    function setCoupon(dom, callback) {
        Route.getcoupon(function( data ) {
            var html = template('couponTitle', data);
            dom.html(html);
        });
    }
});