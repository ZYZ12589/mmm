$(function () {
    // 发送 ajax 请求，获取数据，渲染页面
    render({
        url: 'api/getinlanddiscount',
        parent: '.clearfix',
        son: 'inlanddiscount_tmp',
    })

    // 获取页面被卷去的高度，显示最后四个商品
    window.addEventListener('scroll', function () {
        var value = $(window).scrollTop();

        console.log(value);


        if (value >= 3700) {
            setTimeout(function () {
                $('.mm_inlanddiscount ul li:nth-last-child(-n+4)').show();
            }, 500)
        }
    })



})