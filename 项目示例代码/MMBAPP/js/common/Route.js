/**
 * Created by Jepson on 2017/5/30.
 */

/* 接口地址管理 Route，ajax请求封装，请求基于 jquery */
(function(window) {

    var Route = {
        /* 提出 URL 以备 提取接口 可以集中管理 */
        baseUrl : 'http://127.0.0.1:9090',

        /* ------ 首页 api 数据请求 ------ */
        // 获取首页上面的菜单栏数据
        getindexmenu: getindexmenu,


        /* ------ 分类功能界面 ------- */
        // 获取商品分类标题
        getcategorytitle: getcategorytitle,
        // 获取分类列表
        getcategory: getcategory,


        /* ------ 商品列表功能界面 ------- */
        // 根据分类的id 获取分类的名称
        getcategorybyid: getcategorybyid,
        // 根据分类id 和 pageid 获取该分类的商品列表
        getproductlist: getproductlist,


        /* ------ 商品详情 ------- */
        // 根据商品id 获取商品的详细信息
        getproduct: getproduct,
        // 根据商品id 获取该商品的评论信息
        getproductcom: getproductcom,


        /* ------ 省钱控页面 ------- */
        // 根据页数用来获取省钱控的每一页的商品列表, 不传参默认获取第一页
        getmoneyctrl: getmoneyctrl,
        // 根据商品id获取省钱控商品的详细信息
        getmoneyctrlproduct : getmoneyctrlproduct,


        /* ------- 国内折扣商品详情页 --------- */
        // 国内折扣商品列表信息
        getinlanddiscount: getinlanddiscount,
        // 根据商品id获取国内折扣商品的详细信息
        getdiscountproduct: getdiscountproduct,


        /* ------- 白菜价商品页面 -------- */
        // 获取白菜价页面的tab栏标题数据
        getbaicaijiatitle: getbaicaijiatitle,
        // 根据标题id获取该标题对应的商品列表
        getbaicaijiaproduct: getbaicaijiaproduct,



        /* -------- 优惠券页面 -------- */
        // 获取优惠券标题信息
        getcoupon: getcoupon,
        // 根据优惠券标题id获取该标题对应的列表
        getcouponproduct: getcouponproduct,


        /* ------- 凑单品页面 --------- */
        // 获取凑单品的店铺的信息
        getgsshop: getgsshop,
        // 获取凑单品的区域的信息
        getgsshoparea: getgsshoparea,
        // 根据店铺的id和区域的id获取该店铺该区域的商品列表信息
        getgsproduct: getgsproduct,



        /* -------- 商城导航页面 ---------- */
        // 获取所有商城导航的列表信息
        getsitenav: getsitenav,



        /* ------- 品牌大全页面 --------- */
        // 获取品牌大全的标题信息
        getbrandtitle: getbrandtitle,
        // 根据品牌的标题id获取该品牌标题下的十大品牌列表
        getbrand: getbrand,
        // 根据品牌的标题id获取该品牌标题下的十大品牌的销量排行列表商品
        getbrandproductlist: getbrandproductlist

    }


    /* 可扩展功能 */
    Route.extend = function(obj) {
        for (var k in obj) {
            // 一般还会进行一个判断 if obj.hasOwnProperty( k )
            // 这里只是简单的 工具类，先简单来写
            this[k] = obj[k];
        }
    };

    /**
     * 获取首页上面的菜单栏数据
     * 方法名：getindexmenu
     * 请求方式：get
     * 传参:无
     * 返回数据样例：
     *     {
                "result": [{
                    "indexmenuId": “菜单的id”,
                    "name": "菜单的名称",
                    "img": "菜单的图片",
                    "titlehref": "菜单的链接地址"
                }]
            }
     */
    function getindexmenu(callback) {
        var url = Route.baseUrl + '/api/getindexmenu';
        $.get( url, function( res ) {
            callback && callback( res );
        }, 'json');
    }


    /**
     * 获取折扣列表内容
     * 方法名：getmoneyctrl
     * 请求方式：get
     * 传入参数：pageid : 页数id   (Number) 不传默认返回第一页数据
     * 返回数据样例：
     * {
             "result": [{
                 "productId": "商品id",
                 "productName": "商品名称",
                 "productPinkage": "商品价格",
                 "productFrom": "商品来源",
                 "productTime": "商品发布事件",
                 "productImgSm": "商品图片小图",
                 "productComCount": "商品评论"
             }]
          }
    * */
    // getmoneyctrl( callback ) 请求第一页数据， pageid 默认为 0
    // getmoneyctrl( pageid, callback ) 请求 pageid+1 页数据
    function getmoneyctrl() {
        var pageid;
        var callback;
        if ( arguments.length === 1 ) {
            pageid = 0;
            callback = arguments[ 0 ];
        } else {
            pageid = arguments[ 0 ];
            callback = arguments[ 1 ];
        }

        var url = Route.baseUrl + '/api/getmoneyctrl';
        $.get( url, { pageid : pageid }, function( res ) {
            callback && callback( res );
        }, 'json');
    }

    /**
     * 获取分类的标题信息
     * 方法名：getcategorytitle
     * 请求方式：get
     * 传入参数：无
    *  返回参数: {
                     "result": [{
                     "indexmenuId": “菜单的id”,
                     "name": "菜单的名称",
                     "img": "菜单的图片",
                     "titlehref": "菜单的链接地址"
                     }]
                 }
     * */
    function getcategorytitle( callback ) {
        var url = Route.baseUrl + '/api/getcategorytitle';
        $.get( url, function( res ) {
            callback && callback( res );
        }, 'json');
    }

    /**
     * 根据分类的标题获取标题对应的分类列表
     * 方法名：getcategory
     * 请求方式：get
     * 传入参数：titleid 分类标题的 id ( Number 类型 )
     * 返回参数:
     *       {
                 "result": [{
                     "productId": "商品id",
                     "productName": "商品名称",
                     "productPinkage": "商品价格",
                     "productFrom": "商品来源",
                     "productTime": "商品发布事件",
                     "productImgSm": "商品图片小图",
                     "productComCount": "商品评论"
                 }]
             }
     * */
    function getcategory( titleid, callback ) {
        var url = Route.baseUrl + '/api/getcategory';
        $.get( url, { titleid: titleid }, function( res ) {
            callback && callback( res );
        }, 'json');
    }

    /**
     * 根据分类的id获取分类的名称
     * 方法名：getcategorybyid
     * 请求方式：get
     * 传入参数：categoryid 分类的 id ( Number 类型 )
     * 返回参数:
     *       {
                 "result": [{
                     "categoryId": "分类id",
                     "category": "分类名称",
                     "titleId": "分类标题id"
                 }]
             }
     * */
    function getcategorybyid( categoryid, callback ) {
        var url = Route.baseUrl + '/api/getcategorybyid';
        $.get( url, { categoryid: categoryid }, function( res ) {
            callback && callback( res );
        }, 'json');
    }

    /**
     * 根据分类id 和 pageid 获取该分类的商品列表
     * 方法名：getproductlist
     * 请求方式：get
     * 传入参数：titleid 分类标题的 id ( Number 类型 )
     * 返回参数:
     *       {
                 "pagesize": "每页大小",
                 "totalCount": "总条数"
                 "result": [{
                     "productId": "商品id",
                     "categoryId": "商品分类id",
                     "productListId": "商品列表id",
                     "productName": "商品名称",
                     "productImg": "商品图片",
                     "productPrice": "商品价格",
                     "productQuote": "商品报价",
                     "productCom": "商品评论数",
                     "brandName": "品牌名称",
                     "brandTitleId": "品牌标题id"
                 }]
            }
     * */
    function getproductlist( categoryid, pageid, callback ) {
        var url = Route.baseUrl + '/api/getproductlist';
        var data = {
            categoryid : categoryid ? categoryid : 0,
            pageid: pageid ? pageid : 1
        }
        $.get( url, data, function( res ) {
            callback && callback( res );
        }, 'json');
    }




    /**
     * 根据商品 id 获取商品的详细信息
     * 方法名：getproduct
     * 请求方式：get
     * 传入参数：productid  商品id ( Number 类型 )
     * 返回参数:
             {
                 "result": [{
                     "productId": "商品id",
                     "productName": "商品名称",
                     "productImg": "商品图片",
                     "bjShop": "商品比价购买店铺",
                     "categoryId": "分类id"
                 }]
             }
    * */
    function getproduct( productid, callback ) {
        var url = Route.baseUrl + '/api/getproduct';
        $.get( url, { productid: productid }, function( res ) {
            callback && callback( res );
        }, "json")
    }

    /**
     * 根据商品id 获取该商品的评论信息
     * 方法名：getproductcom
     * 请求方式：get
     * 传入参数：productid  商品id ( Number 类型 )
     * 返回参数:
             {
                 "result": [{
                     "comId": "商品评论id",
                     "comName": "商品评论人名",
                     "comTime": "商品评论时间",
                     "comFrom": "商品评论来源",
                     "comContent": "商品评论内容",
                     "productId": "商品id",
                     "categoryId": "分类id"
                 }]
             }
     * */
    function getproductcom( productid, callback ) {
        var url = Route.baseUrl + '/api/getproductcom';
        $.get( url, { productid : productid }, function( res ) {
            callback && callback( res );
        }, 'json' );
    }

    /**
     * 根据商品id获取国内折扣商品的详细信息
     * 方法名：getmoneyctrlproduct
     * 请求方式：get
     * 传入参数：productid  商品id ( Number 类型 )
     * 返回参数:
        *{
             "result": [{
                 "productId": "商品id",
                 "productName": "商品名称",
                 "productPinkage": "商品价格",
                 "productFrom": "商品来源",
                 "productTime": "商品发布时间",
                 "productTips": "商品发布小编",
                 "productInfo": "商品的描述信息1",
                 "productInfo1": "商品的描述信息2",
                 "productImgSm": "商品的图片小图",
                 "productImgLg": "商品的图片大图",
                 "productCity": "商品的库存城市",
                 "productInfo2": "商品的描述信息3",
                 "productImg2": "商品第2张图片",
                 "productImg3": "商品第3张图片",
                 "productComment": "",
                 "productComCount": "商品评论数量"
             }]
        }
     * */
    function getmoneyctrlproduct( productid, callback ) {
        var url = Route.baseUrl + '/api/getmoneyctrlproduct';
        $.get( url, { productid : productid }, function( res ) {
            callback && callback( res );
        }, "json" );
    }



    /**
     * 国内折扣商品列表信息
     * 方法名：getinlanddiscount
     * 请求方式：get
     * 传参: 无
     * 返回数据示例：
     *  {
            "result": [{
                "productId":  "商品id",
                "productName": "商品名称",
                "productPrice": "商品价格",
                "productFrom": "商品来源",
                "productTime": "商品发布时间",
                "productImg": "商品的图片",
            }]
        }
     * */
    function getinlanddiscount( callback ) {
        var url = Route.baseUrl + '/api/getinlanddiscount';
        $.get( url, function( res ) {
            callback && callback( res );
        });
    }

    /**
     * 根据商品id获取国内折扣商品的详细信息
     * 方法名：getdiscountproduct
     * 请求方式：get
     * 传入参数：productid : 商品id (Number类型)
     * 返回参数：
     * {
            "result": [{
                "productId": "商品id",
                "productName": "商品名称",
                "productPinkage": "商品价格",
                "productFrom": "商品来源",
                "productTime": "商品发布时间",
                "productTips": "商品发布小编",
                "productInfo": "商品的描述信息1",
                "productInfo1": "商品的描述信息2",
                "productImgSm": "商品的图片小图",
                "productImgLg": "商品的图片大图",
                "productCity": "商品的库存城市",
                "productInfo2": "商品的描述信息3",
                "productImg2": "商品第2张图片",
                "productImg3": "商品第3张图片",
                "productComment": "",
                "productComCount": "商品评论数量"
            }]
        }
     **/
    function getdiscountproduct( productid, callback ) {
        var url = Route.baseUrl + '/api/getdiscountproduct';
        $.get( url, { productid: productid }, function( res ) {
            callback && callback( res );
        }, "json" );
    }




    /**
     * 获取白菜价页面的tab栏标题数据
     * 方法名：getbaicaijiatitle
     * 请求方式：get
     * 传入参数：无
     * 返回参数：
     *  {
            "result": [{
                "titleId": "标题id",
                "title": "标题内容"
            }]
        }
     **/
    function getbaicaijiatitle( callback ) {
        var url = Route.baseUrl + '/api/getbaicaijiatitle';
        $.get( url, function( res ) {
            callback && callback( res );
        })
    }

    /**
     * 根据标题id获取该标题对应的商品列表
     * 方法名：getbaicaijiaproduct
     * 请求方式：get
     * 传入参数：titleid : 标题id (Number)
     * 返回参数：
     *     {
                "result": [{
                    "titleId": "标题id",
                    "productId": "商品id",
                    "productName": "商品名称",
                    "productPrice": "商品价格",
                    "productImg": "商品图片",
                    "productCoupon": "点击领取优惠券",
                    "productHref": "下单链接",
                    "productCouponRemain": "已领数量"
                }]
            }
     **/
    function getbaicaijiaproduct( titleid, callback ) {
        var url = Route.baseUrl + "/api/getbaicaijiaproduct";
        $.get( url, { titleid : titleid }, function( res ) {
            callback && callback( res );
        }, 'json' );
    }




    /**
     * 获取优惠券标题信息
     * 方法名：getcoupon
     * 请求方式：get
     * 传入参数：无
     * 返回参数：
     *  {
            "result": [{
                "couponId": "优惠券标题id",
                "couponImg": "优惠券标题图片",
                "couponLink": "优惠券列表链接",
                "couponTitle": "优惠券标题名称"
            }]
        }
     **/
    function getcoupon( callback ) {
        var url = Route.baseUrl + '/api/getcoupon';
        $.get( url, function( res ) {
            callback && callback( res );
        }, 'json' );
    }

    /**
     * 根据优惠券标题id获取该标题对应的列表
     * 方法名：getcouponproduct
     * 请求方式：get
     * 传入参数：couponid：优惠券标题id  (Number)
     * 返回参数：
     *      {
                "result": [{
                    "couponProductId": "优惠券商品id",
                    "couponId": "优惠券标题id",
                    "couponProductTime": "优惠券商品有效期",
                    "couponProductImg": "优惠券商品图片",
                    "couponProductName": "优惠券商品名称",
                    "couponProductPrice": "优惠券商品价格"
                }]
            }
     **/
    function getcouponproduct( couponid, callback ) {
        var url = Route.baseUrl + '/api/getcouponproduct';
        $.get( url, { couponid: couponid }, function( res ) {
            callback && callback( res );
        }, "json" );
    }




    /**
     * 获取凑单品的店铺的信息
     * 方法名：getgsshop
     * 请求方式：get
     * 传入参数：无
     * 返回参数：
     *  {
            "result": [{
                "shopId": "店铺id",
                "shopName": "店铺名称"
            }]
        }
     **/
    function getgsshop( callback ) {
        var url = Route.baseUrl + '/api/getgsshop';
        $.get( url, function( res ) {
            callback && callback( res );
        }, 'json' );
    }

    /**
     * 获取凑单品的区域的信息
     * 方法名：getgsshoparea
     * 请求方式：get
     * 传入参数：无
     * 返回参数：
     *      {
                "result": [{
                    "areaId": "区域id",
                    "areaName": "区域名称"
                }]
            }
     **/
    function getgsshoparea( callback ) {
        var url = Route.baseUrl + '/api/getgsshoparea';
        $.get( url, function( res ) {
            callback && callback( res );
        }, 'json' );
    }

    /**
     * 根据店铺的id和区域的id获取该店铺该区域的商品列表信息
     * 方法名：getgsproduct
     * 请求方式：get
     * 传入参数：shopid : 店铺id  (Number)
     *          areaid : 区域id  (Number)
     * 返回参数：
     *  {
            "result": [{
                "productId": "商品id",
                "areaId": "区域id",
                "shopId": "店铺id",
                "productPrice": "商品价格",
                "productImg": "商品图片",
                "productName": "商品名称"
            }]
        }
     **/
    function getgsproduct( shopid, areaid, callback ) {
        var url = Route.baseUrl + '/api/getgsproduct';
        var data = {
            shopid: shopid,
            areaid: areaid
        };
        $.get( url, data, function( res ) {
            callback && callback( res );
        }, 'json');
    }



    /**
     * 获取所有商城导航的列表信息
     * 方法名：getsitenav
     * 请求方式：get
     * 传入参数：无
     * 返回数据格式：
     *      {
                "result": [{
                    "navId": "导航id",
                    "navImg": "导航图片",
                    "navTitle": "导航名称",
                    "navHref": "导航链接	"
                }]
            }
     **/
    function getsitenav( callback ) {
        var url = Route.baseUrl + '/api/getsitenav';
        $.get( url, function( res ) {
            callback && callback( res );
        }, 'json' );
    }



    /**
     * 获取品牌大全的标题信息
     * 方法名：getbrandtitle
     * 请求方式：get
     * 传入参数：无
     * 返回数据格式：
     *      {
                "result": [{
                    "brandTitleId": "品牌标题id",
                    "brandTitle": "品牌标题名称",
                    "categoryId": "分类id"
                }]
            }
     **/
    function getbrandtitle( callback ) {
        var url = Route.baseUrl + '/api/getbrandtitle';
        $.get( url, function( res ) {
            callback && callback( res );
        }, 'json' );
    }

    /**
     * 根据品牌的标题id获取该品牌标题下的十大品牌列表
     * 方法名：getbrand
     * 请求方式：get
     * 传入参数：brandtitleid：品牌标题id  (Number)
     * 返回数据格式：
     *       {
                "result": [{
                    "brandId": "品牌id",
                    "brandTitleId": "品牌标题id",
                    "brandName": "品牌名称",
                    "brandInfo": "品牌全网销售量",
                    "categoryId": "分类id"
                }]
            }
     **/
    function getbrand( brandtitleid, callback ) {
        var url = Route.baseUrl + '/api/getbrand';
        $.get(url, { brandtitleid : brandtitleid }, function( res ) {
            callback && callback( res );
        }, 'json' )
    }



    /**
     * 根据品牌的标题id获取该品牌标题下的十大品牌的销量排行列表商品
     * 方法名：getbrandproductlist
     * 请求方式：get
     * 传入参数：brandtitleid：品牌标题id  (Number)
                pagesize ：展示的数据量 默认为4个 (Number)
     * 返回数据格式：
     *      {
                "pagesize": "每页大小",
                "totalCount": "总条数"
                "result": [{
                    "productId": "商品id",
                    "categoryId": "商品分类id",
                    "productListId": "商品列表id",
                    "productName": "商品名称",
                    "productImg": "商品图片",
                    "productPrice": "商品价格",
                    "productQuote": "商品报价",
                    "productCom": "商品评论数",
                    "brandName": "品牌名称",
                    "brandTitleId": "品牌标题id",
                    "brandId": "品牌id"
                }]
            }
     **/
    function getbrandproductlist( brandtitleid, pagesize, callback ) {
        var url = Route.baseUrl + '/api/getbrandproductlist';
        var data = {
            brandtitleid : brandtitleid,
            pagesize : pagesize
        };
        $.get( url, data, function( res ) {
            callback && callback( res );
        }, 'json' );
    }




    window.Route = Route; /* 向外暴露 Route */

})(window);