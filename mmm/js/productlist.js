$(function () {
    //  获取地址栏信息
    var categoryid = getSearch('categoryid');
    var pageid = getSearch('pageid');

    // 发送 ajax 请求, 渲染面包屑导航
    render({
        url: 'api/getcategorybyid',
        parent: '.category_box',
        son: 'categoryName_tmp',
        data: {
            categoryid: categoryid
        }
    })

    // 发送 ajax 请求，获取商品数据
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getproductlist',
        data: {
            categoryid: categoryid,
            pageid: pageid
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);

            // 获取每页条数
            var pagesize = info.pagesize;
            // 获取总数
            var totalCount = info.totalCount;
            // 获取总页数
            var total = Math.ceil(totalCount / pagesize);
            // 通过模板引擎，渲染数据
            $('.product_box').html(template('goods_tmp', info));

            // 分页
            // 思路：点击上下页按钮，让 pageid 自增减，配置地址栏的值
            $('.mm_product').on('click', '.page_up', function () {

                // 判断页码最小值
                if (pageid <= 1) {
                    pageid = 1;
                } else {
                    pageid--;
                }

                // 拼接字符串页码
                var setUrl = '&pageid=' + pageid;

                // 获取地址栏
                var getUrl = location.href;

                // 替换地址栏页码
                getUrl = getUrl.replace('&pageid=' + (pageid + 1), setUrl);

                // 改变下拉框内容
                $('.select .pagenumber .total').text(' / ' + total);

                // 跳转页面
                location.href = getUrl;
            })
            $('.mm_product').on('click', '.page_down', function () {

                // 判断页码最小值
                if (pageid >= total) {
                    pageid = total;
                } else {
                    pageid++;
                }

                // 拼接字符串页码
                var setUrl = '&pageid=' + pageid;

                // 获取地址栏
                var getUrl = location.href;

                // 替换地址栏页码
                getUrl = getUrl.replace('&pageid=' + (pageid - 1), setUrl);

                // 跳转页面
                location.href = getUrl;
            })

            // 给下拉框按钮注册点击事件，显示或隐藏下拉菜单
            $('.dropDown_btn').click(function () {
                // 切换下拉菜单的显示和隐藏
                $('.dropDown').slideToggle();
                // 拼接字符串
                var str = '';
                for (var i = 1; i <= total; i++) {
                    // 根据当前页码，让对应下拉菜单高亮
                    if (i == pageid) {
                        str += "<li class='current'>" + i + "/" + total + "</li>"
                    } else {
                        str += "<li>" + i + "/" + total + "</li>"
                    }
                }

                // 修改下拉菜单内容
                $('.dropDown').html(str);

                // 点击下拉菜单，跳转指定页面
                $('.dropDown').on('click', 'li', function () {
                    var index = $(this).index();

                    // 拼接字符串页码
                    var setUrl = '&pageid=' + (index + 1);

                    // 获取地址栏
                    var getUrl = location.href;
                    if (index == 0) {
                        index == 1;
                    }

                    // 获取当前页码
                    var pageid = getSearch('pageid');

                    // 替换地址栏页码
                    getUrl = getUrl.replace('&pageid=' + pageid, setUrl);

                    // 跳转页面
                    location.href = getUrl;
                })
            })
            // 改变下拉框内容
            $('.select .pagenumber').text(pageid + '/' + total);
        }
    })
})