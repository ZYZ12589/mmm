/**
 * Created by Jepson on 2017/5/30.
 */
$(function() {
    setProductList($('.discount-product'), $.getUrlParam('productid'))

    function setProductList(dom, productid, callback) {
        Route.getdiscountproduct( productid, function( data ) {
            var html = template("discountProduct",data);
            dom.html(html);
        })
    }
});
