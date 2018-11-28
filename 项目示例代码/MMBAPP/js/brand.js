$(function() {
    setBrandList($('.brand-list'), $.getUrlParam("brandtitleid"))

    function setBrandList(dom, brandtitleid, callback) {
        Route.getbrand( brandtitleid, function( data ) {
            var html = template('brandList', data);
            dom.html(html);
            setBrandProduct($('.product-list'), data.result[0].brandTitleId);
        });
    }

    function setBrandProduct(dom, brandtitleid, callback) {
        var pagesize = 4;
        Route.getbrandproductlist( brandtitleid, pagesize, function( data ){
            var html = template('brandProduct', data);
            dom.html(html);
            setProductCom($('.product-com'), data.result);
        });
    }

    function setProductCom(dom, productlist, callback) {
        var productid = [];
        for (var i = 0; i < productlist.length; i++) {
            productid.push(productlist[i].productId);
        }
        Route.getproduct( productid[0], function( res ) {
            var result = res.result;
            for (var j = 0; j < result.length; j++) {
                Route.getproductcom( productid[0], function( resPro ) {
                    var data = resPro.result;
                    var productCom = []
                    for (var i = 0; i < data.length; i++) {
                        productCom.push({
                            "productName": result[0].productName,
                            "productImg": result[0].productImg,
                            "comContent": data[i].comContent,
                            "comTime": data[i].comTime,
                            "comFrom": data[i].comFrom,
                            "comName": data[i].comName
                        })
                    }
                    data = { result: productCom };
                    var html = template('ProductCom', data);
                    dom.html(html);
                })
            }
        })
    }
});
