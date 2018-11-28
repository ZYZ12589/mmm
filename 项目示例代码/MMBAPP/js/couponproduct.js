$(function() {
    setCouponList($('.coupon-list'), $.getUrlParam('couponid'))

    function setCouponList(dom, couponid, callback) {
        Route.getcouponproduct( couponid, function( data ) {
            console.log( data );
            var html = template('couponList', data);
            dom.html(html);
        });
    }
});
