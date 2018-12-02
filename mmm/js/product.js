$(function () {
    // 获取地址栏商品 id
    var productid = getSearch('productid');

    // 发送 ajx 请求，获取数据，渲染页面
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getproduct',
        data: {
            productid: productid
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);

            // 通过模板引擎，渲染页面
            $('.mm_product').html(template('product_tmp', info));

            // 获取数据分类 id
            var categoryId = info.result[0].categoryId;

            // 发送 ajax 请求，获取导航数据
            render({
                url: 'api/getcategorybyid',
                parent: '.category_box',
                son: 'crumbs_tmp',
                data: {
                    categoryid: categoryId
                }
            })
        }
    })

    // 发送 ajax 请求，获取商品评论信息
    render({
        url: 'api/getproductcom',
        parent: '.comment_content',
        son: 'comment_tmp',
        data: {
            productid: productid
        }
    })
})