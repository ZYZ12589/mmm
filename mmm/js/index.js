$(function () {

    // 1-获取首页菜单栏 API
    render({
        url: 'api/getindexmenu',
        parent: '.mm_nav ul',
        son: 'nav_tmp'
    });

    // 2-给更多注册点击事件，切换菜单的显示和隐藏
    $('.mm_nav ul').on('click', '.more', function () {
        $('.mm_nav ul li:nth-last-child(-n+4)').slideToggle();
    })

    // 3-折扣列表 API
    render({
        url: 'api/getmoneyctrl',
        parent: '.discount_content',
        son: 'discount_tmp',
        log: 'console.log(info)'
    });
})