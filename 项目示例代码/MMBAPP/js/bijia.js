/**
 * Created by Jepson on 2017/5/30.
 */
$(function() {
    setProductListTitle($('.product-list-title'), $.getUrlParam('productid'));
    setBijiaProduct($('.product-bijia'), $.getUrlParam('productid'));
    setComList($('.product-com-list'), $.getUrlParam('productid'))

    function setBijiaProduct(dom, productid, callback) {
        productid = productid || 0;
        // 获取商品详情
        Route.getproduct( productid, function( res ) {
            var data = res.result;
            if (data.length > 0) {
                dom.find('.product-name').html(data[0].productName);
                dom.find('.product-img').html(data[0].productImg);
                dom.parent().find('.plist > a').html(data[0].bjShop);
            } else {
                window.location.href = "category.html";
            }
        })
    }

    function setComList(dom, productid, callback) {
        productid = productid || 0;
        Route.getproductcom( productid, function( res ) {
            var data = res.result;
            if (data.length > 0) {
                var comHtml = "<ul>"
                for (var i = 0; i < data.length; i++) {
                    comHtml += '<li>';
                    comHtml += '<div class="clearfix">';
                    comHtml += '<span class="pull-left com-name">' + data[i].comName + '</span>';
                    comHtml += '<span class="pull-right com-time">' + data[i].comTime + '</span>';
                    comHtml += '</div>';
                    comHtml += '<div class="clearfix">';
                    comHtml += '<span class="star pull-left com-star"><em class="star5"></em></span>';
                    comHtml += '<span class="pull-right com-from">' + data[i].comFrom + '</span>';
                    comHtml += '</div>';
                    comHtml += '<div class="com-content">' + data[i].comContent + '</div>';
                    comHtml += '</li>'; //data[i]
                }
                comHtml += "</ul>";
                comHtml += ' <div class="more"> <a class="morein" href="javascript:;">查看更多评价</a></div>';
                dom.html(comHtml);
            } else {
                window.location.href = "category.html";
            }
        })
    }

    function setProductListTitle(dom, productid, callback) {
        productid = productid || 0;
        // 获取商品详情
        Route.getproduct( productid, function( res ) {
            var data = res.result;
            if (data.length > 0) {
                var categoryid = data[0].categoryId || 0;
                Route.getcategorybyid( categoryid, function( res ) {
                    var result = res.result;
                    if (result) {
                        var titleHtml = "";
                        titleHtml += '  <a href="index.html" class="list-title1">首页</a> >'
                        titleHtml += '  <a href="productlist.html?categoryid=' + result[0].categoryId + '&category=' + result[0].category + '&pageid=1" class="list-title2">' + result[0].category + '</a> >'
                        titleHtml += '  <a href="#" class="list-title3">' + data[0].productName.split(' ')[0] + '</a> >'
                        titleHtml += '  <a href="" class="select">筛选</a>';
                        dom.html(titleHtml);
                    }
                })
            } else {
                window.location.href = "category.html";
            }
        })
    }
});
(function($) {
    $.getUrlParam = function(name) {
        var reg = new RegExp("(^|&)" +
            name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
})(jQuery);
