$(function () {
    // 发送 ajax 请求，获取数据
    render({
        url: 'api/getcoupon',
        parent: '.coupon_content ul',
        son: 'coupon_tmp'
    })
})