$(function () {
    // 获取商品 id 
    var productid = getSearch('product');

    // 发送 ajx 请求,获取商品详情数据
    render({
        url: 'api/getmoneyctrlproduct',
        parent: '.moneyproduct_product',
        son: 'cotent_tmp',
        data: {
            productid: productid
        }
    })

    // 发送 ajax 请求，
})