// 封装 ajax 请求
function render(person) {
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/' + person.url,
        data: person.data,
        dataType: 'json',
        success: function (info) {
            console.log(info);

            // 通过模板引擎渲染页面
            $(person.parent).html(template(person.son, info));
            if (person.fn) {
                person.fn();
            }
        }
    })
}

// 封装获取地址栏数据方法
function getSearch(key) {
    // 获取地址栏数据
    var str = location.search;

    // 转换编码格式
    str = decodeURI(str);

    // 截取字符串
    str = str.slice(1);

    // 分割字符串
    var arr = str.split('&');

    // 创建对象，保存对应数据
    var obj = {};

    // 遍历数组
    arr.forEach(function (v, i) {
        obj[v.split('=')[0]] = v.split('=')[1];
    })


    return obj[key];
}