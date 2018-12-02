$(function () {
    // 获取优惠券 id 
    var couponId = getSearch('couponId');

    // 根据优惠券 id，获取数据
    render({
        url: 'api/getcouponproduct',
        parent: '.couponproduct_content ul',
        son: 'couponproduct_tmp',
        data: {
            couponid: couponId
        }
    })

    // 获取标题名
    var name = getSearch('name');

    // 设置头部标题
    $('.header_title .title').text(name + '优惠券');

    // 点击商品，显示模态框
    $('.couponproduct_content ul').on('click', '.couponproduct_son', function () {
        // 管理模态框
        $('.modal').show();

        // 获取商品id
        var couponProductId = $(this).data('id');

        // 重新获取商品数据
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getcouponproduct',
            data: {
                couponid: couponId
            },
            dataType: 'json',
            success: function (info) {
                // 根据商品 id ，找到对应图片
                var src = info.result[couponProductId].couponProductImg;
                console.log(src);

                // 将图片地址赋值给 img
                $('.modal_img').html(src)

                // 点击上下页按钮，增减商品id，重新获取图片地址
                $('.left_btn').click(function () {

                    if (couponProductId < 0) {
                        couponProductId = 0;
                    }

                    couponProductId--;


                    // 根据商品 id ，找到对应图片
                    var src = info.result[couponProductId].couponProductImg;

                    // 将图片地址赋值给 img
                    $('.modal_img').html(src)

                })
                $('.right_btn').click(function () {

                    if (couponProductId > info.result.length) {
                        couponProductId = info.result.length;
                    }

                    couponProductId++;


                    // 根据商品 id ，找到对应图片
                    var src = info.result[couponProductId].couponProductImg;

                    // 将图片地址赋值给 img
                    $('.modal_img').html(src)

                })

            }
        })


    })

    // 点击关闭，隐藏模态框
    $('.close').click(function () {
        $(".modal").hide();
    })

})