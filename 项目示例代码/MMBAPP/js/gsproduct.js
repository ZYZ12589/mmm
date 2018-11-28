/**
 * Created by Jepson on 2017/5/31.
 */

// 获取凑单品的店铺的信息 并渲染到店铺的下拉列表
setShop($('.popsort'));
// 获取凑单品的区域的信息 并渲染到区域的下拉列表
setArea($('.popcat'));
// 根据店铺的id和区域的id获取该店铺该区域的商品列表信息
setProductList($('.gs-product-list'), { "shopid": 0, "areaid": 0 });

setFilter($('.filter'));

function setShop(dom, callback) {
    Route.getgsshop(function( data ) {
        var html = template('gsShop', data);
        dom.html(html);
    })
}

function setArea(dom, callback) {
    Route.getgsshoparea(function( data ) {
        var html = template('gsArea', data);
        dom.html(html);
    })
}

function setProductList(dom, data, callback) {
    var shopid = data.shopid || 0;
    var areaid = data.areaid || 0;
    Route.getgsproduct( shopid, areaid, function( data ) {
        var html = template('gsProductList', data);
        dom.html(html);
    })
}

function setFilter(dom, data, callback) {
    var data = { "result": [{ "selected": "京东", "selectName": "shop" }, { "selected": "华北", "selectName": "area" }, { "selected": "全部价格", "selectName": "price" }] };
    var html = template('filter', data);
    dom.html(html);
}


function SelectShow(selectname) {
    $('#' + selectname).toggleClass('on');
}

function GetShopProduct(select, shopid, shopname) {
    $('.shop').html(shopname + "<i></i>");
    $('.shop').attr('data-id', shopid);
    $('[data-' + select + ']').parent().removeClass('on');
    $('[data-' + select + '=' + shopid + ']').parent().addClass('on');
    $('[data-' + select + '=' + shopid + ']').parent().parent().parent().removeClass('on');
    var areaid = $('.filter').find('.area').data('id');
    setProductList($('.gs-product-list'), { "shopid": shopid, "areaid": areaid });
}

function GetAreaProduct(select, areaid, areaname) {
    $('.area').html(areaname + "<i></i>");
    $('.area').attr('data-id', areaid);
    $('[data-' + select + ']').parent().removeClass('on');
    $('[data-' + select + '=' + areaid + ']').parent().addClass('on');
    $('[data-' + select + '=' + areaid + ']').parent().parent().parent().removeClass('on');
    var shopid = $('.filter').find('.shop').data('id');
    setProductList($('.gs-product-list'), { "shopid": shopid, "areaid": areaid });
}

