/**
 * Created by Jepson on 2017/5/30.
 */

$(function() {
    setProductList($('.inland-discount-list'))

    function setProductList(dom, callback) {
        Route.getinlanddiscount(function( data ){
            var html = template("productList", data);
            dom.html(html);
            $('.loading').hide();
        });
    }
});
