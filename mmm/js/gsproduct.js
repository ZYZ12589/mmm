$(function () {
    // 发送 ajax 请求，获取标题数据
    render({
        url: 'api/getgsshop',
        parent: '.nav_content',
        son: 'content_one_tmp'
    })

    // 发送 ajax 请求，获取下拉菜单数据
    render({
        url: 'api/getgsshoparea',
        parent: '.down_nav',
        son: 'content_two_tmp'
    })

    // 声明店铺 id 和区域 id
    var shopid;
    var areaid;



    // 获取商品数据
    product();

    function product() {
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getgsproduct',
            data: {
                shopid: shopid || 0,
                areaid: areaid || 0
            },
            dataType: 'json',
            success: function (info) {
                console.log(info);
                // 通过模板引擎，渲染页面
                $('.gsproduct_content ul').html(template('productList_tmp', info));

            }
        })
    }


    // 点击店铺按钮，获取 id，显示下拉菜单
    $('.nav_content').on('click', 'li', function () {
        // 获取自身 id
        shopid = $(this).data('id');

        // 后显示
        $('.down_nav').slideToggle();

        // 给下拉菜单选项注册点击事件
        $('.down_nav').on('click', 'li', function () {
            // 获取自身 id
            areaid = $(this).data('id');

            // 根据双重 id，发送 ajax 请求，获取商品数据信息
            product();

            // 关闭下拉菜单
            $(this).parent().slideUp();

        })

    })
})