//职责：定义user表结构和实例化model对象

'use strict'

const mongoose = require('mongoose');

//1.0 首页轮播图表定义
//数据来源于网址：https://hltm-api.tomoya.cn/carousel
let schema = new mongoose.Schema({
    img: String, //轮播图的地址
    url: String, //点击轮播图要跳转的地址
    title: String //标题
});


//2.0 首页tab标签数据
//数据来源于：https://hltm-api.tomoya.cn/addRecommend
let tabSchema = new mongoose.Schema({
    type: Number, //类型 1：新增连载 2：新增完结 3：推荐连载 4：推荐完结
    update: String, //标题
    name: String, //名称
    url: String, //地址
    img: String //图片地址
});

//3.0 连载动漫页面数据
let lzSchema = new mongoose.Schema({
    url: String, //点击跳转的地址
    img: String, //图片地址
    name: String, //名称
    updateTime: String, //更新时间
    downloadCount: Number, //下载次数
    episode: String //连载多少集

});

//4.0 专题列表页面数据
let topicsSchema = new mongoose.Schema({
    url: String, //点击跳转的地址
    img: String, //图片地址
    title: String //标题	
});
//4.0 主页菜单数据
let indexMenuSchema = new mongoose.Schema({
    indexmenuId: Number, //点击跳转的地址
    img: String, //图片地址
    name: String, //标题	
    titlehref: String //分类标题链接地址
});

//5.0 分类菜单数据
let categorySchema = new mongoose.Schema({
    categoryId: Number, //点击跳转的地址
    category: String, //图片地址
    titleId: Number //标题	
});
//6.0 分类菜单数据
let titleSchema = new mongoose.Schema({
    titleId: Number, //分类标题id
    title: String, //分类标题内容
});
//7.0 商品列表数据
let productListSchema = new mongoose.Schema({
    productListId: Number, //点击跳转的地址
    productId: Number, //商品id
    productName: String, //商品名称	
    productImg: String, //商品图片	
    productPrice: String, //商品价格	
    productQuote: String, //商品报价	
    productCom: String, //商品评论次数	
    categoryId: Number, //分类id	
    brandId: Number, //品牌id	
    brandTitleId: Number //品牌标题id	
});
//8.0 商品详情数据
let productSchema = new mongoose.Schema({
    productId: Number, //商品id
    productName: String, //商品名称	
    productImg: String, //商品图片	
    bjShop: String, //比价店铺	
    categoryId: Number //分类id
});
//8.0 商品评论数据
let productComSchema = new mongoose.Schema({
    comId: Number,
    bjShop: String, //比价店铺
    comName: String, //评论人
    comTime: String, //评论时间
    comFrom: String, //评论来源
    comContent: String, //评论内容	
    productId: Number, //评论内容	
    categoryId: Number //分类id
});
//9.0 品牌大全标题数据
let brandTitleSchema = new mongoose.Schema({
    brandTitleId: Number, //品牌标题id
    brandTitle: String, //品牌大全标题
    categoryId: Number //分类id
});
//10.0 品牌标题对应的品牌数据
let brandSchema = new mongoose.Schema({
    brandId: Number, //品牌id
    brandInfo: String, //品牌信息
    brandName: String, //品牌名称
    brandTitleId: Number, //品牌标题id
    categoryId: Number //分类id
});
//11.0 国内折扣商品列表数据
let inlandDiscountSchema = new mongoose.Schema({
    productId: Number, //商品id
    productName: String, //商品名称
    productPrice: String, //商品价格
    productFrom: String, //商品来源
    productTips: String, //商品小编
    productInfo: String, //商品信息
    productImg: String, //商品图片
    productComment: String //商品评论
});
//12.0 网站导航数据
let siteNavSchema = new mongoose.Schema({
    navId: Number, //导航id
    navImg: String, //导航图片
    navTitle: String, //导航名称
    navHref: String //导航链接    
});

//13.0 省钱控列表数据
let moneyCtrlSchema = new mongoose.Schema({
    productId: Number, //商品id
    productName: String, //商品名称
    productPinkage: String, //商品价格
    productFrom: String, //商品来源    
    productTime: String, //发布事件    
    productTips: String, //发布小编    
    productInfo: String, //商品信息1    
    productInfo1: String, //商品信息2    
    productImgSm: String, //商品图片小图    
    productImgLg: String, //商品图片大图    
    productCity: String, //商品购买城市    
    productInfo2: String, //商品信息3    
    productImg2: String, //商品图片2    
    productImg3: String, //商品图片3    
    productComment: String, //商品评论    
    productComCount: String //商品评论数量    
});

//12.0 优惠券菜单数据
let couponSchema = new mongoose.Schema({
    couponId: Number, //导航id
    couponImg: String, //导航图片
    couponLink: String, //导航名称
    couponTitle: String //导航链接    
});

//12.0 优惠券列表数据	
let couponProductSchema = new mongoose.Schema({
    couponId: Number, //导航id
    couponProductId: Number, //导航图片
    couponProductImg: String, //导航名称
    couponProductTime: String, //导航链接  
    couponProductName: String, //导航名称
    couponProductPrice: String //导航链接   
});
//12.0 凑单品店铺数据	
let gsShopSchema = new mongoose.Schema({
    shopId: Number, //店铺id
    shopName: String //店铺名称  
});
//12.0 凑单品区域数据	
let gsAreaSchema = new mongoose.Schema({
    areaId: Number, //区域id
    areaName: String //区域名字  
});

//12.0 凑单品商品数据	
let gsProductSchema = new mongoose.Schema({
    productId: Number, //商品id
    areaId: Number, //区域id
    shopId: Number, //店铺id
    productPrice: String, //商品价格   
    productImg: String, //商品图片  
    productName: String //商品名称  
});

//12.0 白菜价标题数据	
let bcTitleSchema = new mongoose.Schema({
    titleId: Number, //白菜价标题id
    title: String //白菜价标题名称  
});

//12.0 白菜价商品列表数据	
let bcProductSchema = new mongoose.Schema({
    productId: Number, //白菜价商品id
    titleId: Number, //白菜价标题id
    productName: String, //白菜价商品名称  
    productImg: String, //白菜价商品图片  
    productPrice: String, //白菜价商品价格   
    productCoupon: String, //白菜价商品优惠
    productHref: String, //白菜价商品链接   
    productCouponRemain: String //白菜价商品链接   
});
//实例化model对象
//这里不需要将model export出去因为创建好以后，自动已经加载在内存中
let m = mongoose.model('carousel', schema);
let m1 = mongoose.model('hometab', tabSchema);
let m2 = mongoose.model('lianzai', lzSchema);
let m3 = mongoose.model('topics', topicsSchema);
let m4 = mongoose.model('indexMenu', indexMenuSchema);
let m5 = mongoose.model('category', categorySchema);
let m6 = mongoose.model('title', titleSchema);
let m7 = mongoose.model('productList', productListSchema);
let m8 = mongoose.model('product', productSchema);
let m9 = mongoose.model('productCom', productSchema);
let m10 = mongoose.model('brandTitle', brandTitleSchema);
let m11 = mongoose.model('brand', brandSchema);
let m12 = mongoose.model('inlandDiscount', inlandDiscountSchema);
let m13 = mongoose.model('siteNav', siteNavSchema);
let m14 = mongoose.model('moneyCtrl', moneyCtrlSchema);
let m15 = mongoose.model('coupon', couponSchema);
let m16 = mongoose.model('couponProduct', couponProductSchema);
let m17 = mongoose.model('gsTitle', gsShopSchema);
let m18 = mongoose.model('gsShopArea', gsAreaSchema);
let m19 = mongoose.model('gsProduct', gsProductSchema);
let m20 = mongoose.model('baicaijiaTitle', bcTitleSchema);
let m21 = mongoose.model('baicaijiaProduct', bcProductSchema);

// m1.create({"type":1,"update":"连载至12集","name":"灵能百分百","url":"http://www.hltm.tv/view/12481.html","img":"http://pic.hltm.tv/uploads/editor/2016/06/20160625115909923.jpg"})
// m1.create({"type":1,"update":"连载至10集","name":"B-PROJECT～鼓动＊Ambitious～","url":"http://www.hltm.tv/view/12480.html","img":"http://pic.hltm.tv/uploads/editor/2016/06/20160625115550379.jpg"})
// m1.create({"type":1,"update":"连载至12集","name":"发条精灵战记 天镜的极北之星","url":"http://www.hltm.tv/view/12479.html","img":"http://pic.hltm.tv/uploads/editor/2016/06/20160625113056671.jpg"})
// m1.create({"type":1,"update":"连载至11集","name":"91天","url":"http://www.hltm.tv/view/12477.html","img":"http://pic.hltm.tv/uploads/editor/2016/06/20160625112124259.jpg"})
// m1.create({"type":1,"update":"连载至12集","name":"男子啦啦队!!","url":"http://www.hltm.tv/view/12475.html","img":"http://pic.hltm.tv/uploads/editor/2016/06/20160625111308985.jpg"})
// m1.create({"type":1,"update":"连载至12集","name":"吸血鬼仆人","url":"http://www.hltm.tv/view/12474.html","img":"http://pic.hltm.tv/uploads/editor/2016/06/20160625111122108.jpg"})
// m1.create({"type":1,"update":"连载至5集","name":"OZMAFIA!!","url":"http://www.hltm.tv/view/12472.html","img":"http://pic.hltm.tv/uploads/editor/2016/06/20160624115808709.jpg"})
// m1.create({"type":1,"update":"连载至12集","name":"代号Qualidea","url":"http://www.hltm.tv/view/12466.html","img":"http://pic.hltm.tv/uploads/editor/2016/06/20160622100210161.jpg"})
// m1.create({"type":1,"update":"连载至12集","name":"蓝海少女","url":"http://www.hltm.tv/view/12464.html","img":"http://pic.hltm.tv/uploads/editor/2016/06/20160622095833646.jpg"})
