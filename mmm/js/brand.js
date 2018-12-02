$(function () {
    // 获取品牌标题 id
    var brandtitleid = getSearch('brandtitleid');

    render({
        url: 'api/getbrand',
        parent: '.brand_list',
        son: 'list_tmp',
        data: {
            brandtitleid: brandtitleid
        }
    })

    // 发送 ajax 请求，获取商品列表数据
    render({
        url: 'api/getbrandproductlist',
        parent: '.brand_product ul',
        son: 'product_tmp',
        data: {
            brandtitleid: brandtitleid,
            pagesize: 4
        }
    })

    // 获取商品评论数据
    render({
        url: 'api/getproductcom',
        data: {
            productid: 1
        },
        parent: '.product_comment ul',
        son: 'comment_tmp'
    })

    // 给商品列表注册点击事件，获取商品id，渲染商品评论
    $('.brand_product ul').on('click', 'li', function () {
        // 获取商品id
        var productId = $(this).data('id');

        // 根据id 获取数据
        render({
            url: 'api/getproductcom',
            data: {
                productid: productId
            },
            parent: '.product_comment ul',
            son: 'comment_tmp'
        })
    })
})