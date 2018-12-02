$(function () {
    // 发送 ajax 请求，获取白菜价标题数据
    render({
        url: 'api/getbaicaijiatitle',
        parent: '.baicaijia_title ul',
        son: 'title_tmp',
        fn: function () {
            // 声明变量
            var value = 1;

            // 动态计算标题 ul 宽度
            $('.baicaijia_title ul li').each(function (i, v) {
                value += v.offsetWidth;
            })

            // 将 value 设置给 ul 
            $('.baicaijia_title ul').width(value);

            // 需要在动态计算渲染完成 ul 之后, 再进行初始化
            new IScroll(".baicaijia_title", {
                scrollX: true,
                scrollY: false
            });


        }
    })


    // 定义标题 id
    var titleid;

    // 发送 ajax 请求，获取白菜价商品列表数据
    render({
        url: 'api/getbaicaijiaproduct',
        parent: '.baicaijia_content ul ',
        son: 'content_tmp',
        data: {
            titleid: titleid || 1
        }
    })


    // 点击标题，获取当前标题 id，重新渲染数据
    $('.baicaijia_title ul').on('click', '.title_son', function () {
        titleid = $(this).data('id');

        // 重新渲染页面
        render({
            url: 'api/getbaicaijiaproduct',
            parent: '.baicaijia_content ul ',
            son: 'content_tmp',
            data: {
                titleid: titleid
            }
        })
    })
})