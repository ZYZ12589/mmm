$(function () {
    // 发送 ajax 请求，获取品牌数据
    render({
        url: 'api/getbrandtitle',
        parent: '.mm_brandTitle ul',
        son: 'brandTitle_tmp'
    })
})