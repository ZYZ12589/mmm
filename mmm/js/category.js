$(function () {
    // 发送 ajax 请求，渲染数据
    render({
        url: 'api/getcategorytitle',
        parent: '.mm_content',
        son: "category_tmp",
        fn: function () {
            // 给列表标题注册点击事件，根据分类标题 id 获取内容数据，渲染页面
            $('.mm_content').on('click', '.title', function () {
                // // 获取标题 id 
                var id = $(this).data('id');
                var that = $(this)

                // 根据当前标题的 id，找到对应的 ul ，进行针对性渲染
                var parent = $('.content').parent().eq(id).find('.content');

                // 判断标题是否有标记类名
                if (!$(this).hasClass('current')) {
                    // 发送 ajax 请求，渲染指定的 ul 
                    render({
                        url: 'api/getcategory',
                        parent: parent,
                        son: 'content_tmp',
                        data: {
                            titleid: id
                        },
                        // fn: function () {
                        //     // 渲染完成后，切换详情页的显示和隐藏
                        //     $('.content').eq(id).slideToggle();

                        //     $('.content').eq(id).find('li').on('click', function () {
                        //         // 获取当前按钮内容
                        //         var value = $(this).text().trim()

                        //     })

                        // }
                    })
                    // 添加自定义类名
                    $(this).addClass('current');
                }

                setTimeout(function () {
                    // 渲染完成后，切换详情页的显示和隐藏
                    $('.content').eq(id).slideToggle();

                    $('.content').eq(id).find('li').on('click', function () {
                        // 获取当前按钮内容
                        var value = $(this).text().trim()

                    })
                }, 50);
            })
        }
    });
})