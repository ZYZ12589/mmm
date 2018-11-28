'use strict'

const mongoose = require('mongoose');
let m_lunbo = mongoose.model('carousel');

//1.0 获取轮播
exports.getlunbo = (req, res) => {
    m_lunbo.find({}, (err, data) => {
        if (err) {
            res.end(err.message);
        }

        res.end(JSON.stringify(data));
    });
}

//2.0 获取首页标签页图片数据
let m_hometab = mongoose.model('hometab');
exports.gethometab = (req, res) => {
    //获取参数id值
    let type = req.params.type;
    m_hometab.find({ type: type }, (err, data) => {
        if (err) {
            res.end(err.message);
        }

        res.end(JSON.stringify(data));
    });
}

//3.0 获取连载动漫页面的列表数据
let m_lianzai = mongoose.model('lianzai');
exports.getlianzai = (req, res) => {
    m_lianzai.find({}, (err, data) => {
        if (err) {
            res.end(err.message);
        }

        res.end(JSON.stringify(data));
    });
}

//4.0 获取专题页面数据
let m_topics = mongoose.model('topics');
exports.gettopics = (req, res) => {
    m_topics.find({}, (err, data) => {
        if (err) {
            res.end(err.message);
        }

        res.end(JSON.stringify(data));
    });
}

//5.0 获取主页菜单数据
let m_indexMenu = mongoose.model('indexMenu');
exports.getindexmenu = (req, res) => {
    m_indexMenu.find({}, (err, data) => {
        // console.log(req.query.name);
        if (err) {
            res.end(err.message);
        }

        var result = { result: data };
        console.log(req.query.callback);
        if (req.query.callback) {
            res.end(req.query.callback + "(" + JSON.stringify(result) + ")");
        } else {
            res.end(JSON.stringify(result));
        }
    });
}

//6.0 获取分类标题
let m_categorytitle = mongoose.model('title');
exports.getcategorytitle = (req, res) => {
    m_categorytitle.find({}, (err, data) => {
        // console.log(req.query.name);
        if (err) {
            res.end(err.message);
        }

        var result = { result: data };
        if (req.query.callback) {
            res.end(req.query.callback + "(" + JSON.stringify(result) + ")");
        } else {
            res.end(JSON.stringify(result));
        }
    });
}

//5.0 获取分类列表
let m_category = mongoose.model('category');
exports.getcategory = (req, res) => {
    m_category.find({ "titleId": req.query.titleid }, (err, data) => {
        // console.log(req.query.name);
        if (err) {
            res.end(err.message);
        }


        var result = { result: data };
        if (req.query.callback) {
            res.end(req.query.callback + "(" + JSON.stringify(result) + ")");
        } else {
            res.end(JSON.stringify(result));
        }
    });
}

//5.0 获取分类列表
let m_categorybyid = mongoose.model('category');
exports.getcategorybyid = (req, res) => {
    m_categorybyid.find({ "categoryId": req.query.categoryid }, (err, data) => {
        // console.log(req.query.name);
        if (err) {
            res.end(err.message);
        }


        var result = { result: data };
        if (req.query.callback) {
            res.end(req.query.callback + "(" + JSON.stringify(result) + ")");
        } else {
            res.end(JSON.stringify(result));
        }
    });
}


//5.0 根据分类id获取商品列表
let m_productList = mongoose.model('productList');
exports.getproductlist = (req, res) => {
    m_productList.count({ "categoryId": req.query.categoryid }, (err, result) => {
        var skipCount = ((req.query.pageid-1) * 10) || 0;
        m_productList.find({ "categoryId": req.query.categoryid }, (err, data) => {
            // console.log(req.query.name);
            if (err) {
                res.end(err.message);
            }
            console.log(result);
            var data1 = {
                pagesize: 10,
                totalCount: result,
                result: data
            }
            if (req.query.callback) {
                res.end(req.query.callback + "(" + JSON.stringify(data1) + ")");
            } else {
                res.end(JSON.stringify(data1));
            }
        }).skip(skipCount).limit(10); //skip跳过多少条数据 limit获取多少条数据
    });
}

//5.0 根据品牌id获取商品列表
let m_brandproductlistist = mongoose.model('productList');
exports.getbrandproductlist = (req, res) => {
    m_brandproductlistist.count({ "brandTitleId": req.query.brandtitleid }, (err, result) => {
    	var skipCount = ((req.query.pageid-1) * 10) || 0;
        m_brandproductlistist.find({ "brandTitleId": req.query.brandtitleid }, (err, data) => {
            console.log(req.query.brandtitleid);
            if (err) {
                res.end(err.message);
            }
            // console.log(result);
            var data1 = {
                pagesize: 10,
                totalCount: result,
                result: data
            }
            if (req.query.callback) {
                res.end(req.query.callback + "(" + JSON.stringify(data1) + ")");
            } else {
                res.end(JSON.stringify(data1));
            }
        }).skip(skipCount).limit(req.query.pagesize || 10); //skip跳过多少条数据 limit获取多少条数据
    });
}

//5.0 获取商品详细信息
let m_product = mongoose.model('product');
exports.getproduct = (req, res) => {
    m_product.find({ productId: req.query.productid }, (err, data) => {
        // console.log(req.query.name);
        if (err) {
            res.end(err.message);
        }

        var result = { result: data };
        if (req.query.callback) {
            res.end(req.query.callback + "(" + JSON.stringify(result) + ")");
        } else {
            res.end(JSON.stringify(result));
        }
    });
}

//5.0 获取商品详细信息
let m_productcom = mongoose.model('productCom');
exports.getproductcom = (req, res) => {
    m_productcom.find({ productId: req.query.productid }, (err, data) => {
        // console.log(req.query.name);
        if (err) {
            res.end(err.message);
        }

        var result = { result: data };
        if (req.query.callback) {
            res.end(req.query.callback + "(" + JSON.stringify(result) + ")");
        } else {
            res.end(JSON.stringify(result));
        }
    });
}

// 获取品牌大全标题信息
let m_brandtitle = mongoose.model('brandTitle');
exports.getbrandtitle = (req, res) => {
    m_brandtitle.find({}, (err, data) => {
        // console.log(req.query.name);
        if (err) {
            res.end(err.message);
        }

        var result = { result: data };
        if (req.query.callback) {
            res.end(req.query.callback + "(" + JSON.stringify(result) + ")");
        } else {
            res.end(JSON.stringify(result));
        }
    });
}


// 获取品牌标题对应的品牌信息
let m_brand = mongoose.model('brand');
exports.getbrand = (req, res) => {
    m_brand.find({ brandTitleId: req.query.brandtitleid }, (err, data) => {
        // console.log(req.query.name);
        if (err) {
            res.end(err.message);
        }
        var result = { result: data };
        if (req.query.callback) {
            res.end(req.query.callback + "(" + JSON.stringify(result) + ")");
        } else {
            res.end(JSON.stringify(result));
        }
    });
}

// 获取国内折扣商品列表信息
let m_inlandDiscount = mongoose.model('inlandDiscount');
exports.getinlanddiscount = (req, res) => {
    m_inlandDiscount.find({}, (err, data) => {
        // console.log(req.query.name);
        if (err) {
            res.end(err.message);
        }
        var result = { result: data };
        if (req.query.callback) {
            res.end(req.query.callback + "(" + JSON.stringify(result) + ")");
        } else {
            res.end(JSON.stringify(result));
        }
    });
}

// 根据商品id获取国内折扣商品信息
let m_discountProduct = mongoose.model('inlandDiscount');
exports.getdiscountproduct = (req, res) => {
    m_discountProduct.find({ "productId": req.query.productid }, (err, data) => {
        // console.log(req.query.name);
        if (err) {
            res.end(err.message);
        }
        var result = { result: data };
        if (req.query.callback) {
            res.end(req.query.callback + "(" + JSON.stringify(result) + ")");
        } else {
            res.end(JSON.stringify(result));
        }
    });
}

// 获取所有网站导航信息
let m_sitenav = mongoose.model('siteNav');
exports.getsitenav = (req, res) => {
    m_sitenav.find({}, (err, data) => {
        // console.log(req.query.name);
        if (err) {
            res.end(err.message);
        }
        var result = { result: data };
        if (req.query.callback) {
            res.end(req.query.callback + "(" + JSON.stringify(result) + ")");
        } else {
            res.end(JSON.stringify(result));
        }
    });
}

// 获取省钱控列表数据
let m_moneyctrl = mongoose.model('moneyCtrl');
exports.getmoneyctrl = (req, res) => {
    m_moneyctrl.count({}, (err, result) => {
        var skipCount = (req.query.pageid * 10) || 0;
        // console.log(req.query.pageid+"skipCount"+skipCount);
        m_moneyctrl.find({}, (err, data) => {
            if (err) {
                res.end(err.message);
            }
            // console.log(result);
            var data1 = {
                pagesize: 10,
                totalCount: result,
                result: data
            }
            if (req.query.callback) {
                res.end(req.query.callback + "(" + JSON.stringify(data1) + ")");
            } else {
                res.end(JSON.stringify(data1));
            }
        }).skip(skipCount).limit(req.query.pagesize || 10); //skip跳过多少条数据 limit获取多少条数据
    });
}

// 根据商品id获取省钱控商品数据
let m_moneyctrlproduct = mongoose.model('moneyCtrl');
exports.getmoneyctrlproduct = (req, res) => {
    m_moneyctrlproduct.find({ 'productId': req.query.productid }, (err, data) => {
        // console.log(req.query.name);
        if (err) {
            res.end(err.message);
        }
        var result = { result: data };
        if (req.query.callback) {
            res.end(req.query.callback + "(" + JSON.stringify(result) + ")");
        } else {
            res.end(JSON.stringify(result));
        }
    });
}

// 获取所有优惠券标题数据
let m_coupon = mongoose.model('coupon');
exports.getcoupon = (req, res) => {
    m_coupon.find({}, (err, data) => {
        // console.log(req.query.name);
        if (err) {
            res.end(err.message);
        }
        var result = { result: data };
        if (req.query.callback) {
            res.end(req.query.callback + "(" + JSON.stringify(result) + ")");
        } else {
            res.end(JSON.stringify(result));
        }
    });
}

// 根据优惠券标题id获取优惠券列表
let m_couponProduct = mongoose.model('couponProduct');
exports.getcouponproduct = (req, res) => {
    m_couponProduct.find({ "couponId": req.query.couponid }, (err, data) => {
        // console.log(req.query.name);
        if (err) {
            res.end(err.message);
        }
        var result = { result: data };
        if (req.query.callback) {
            res.end(req.query.callback + "(" + JSON.stringify(result) + ")");
        } else {
            res.end(JSON.stringify(result));
        }
    });
}

// 获取凑单品店铺信息
let m_gsShop = mongoose.model('gsTitle');
exports.getgsshop = (req, res) => {
    m_gsShop.find({}, (err, data) => {
        // console.log(req.query.name);
        if (err) {
            res.end(err.message);
        }
        var result = { result: data };
        if (req.query.callback) {
            res.end(req.query.callback + "(" + JSON.stringify(result) + ")");
        } else {
            res.end(JSON.stringify(result));
        }
    });
}

// 获取凑单品区域信息
let m_gsShopArea = mongoose.model('gsShopArea');
exports.getgsshoparea = (req, res) => {
    m_gsShopArea.find({}, (err, data) => {
        // console.log(req.query.name);
        if (err) {
            res.end(err.message);
        }
        var result = { result: data };
        if (req.query.callback) {
            res.end(req.query.callback + "(" + JSON.stringify(result) + ")");
        } else {
            res.end(JSON.stringify(result));
        }
    });
}

// 根据店铺id和区域id凑单品商品信息
let m_gsProduct = mongoose.model('gsProduct');
exports.getgsproduct = (req, res) => {
    m_gsProduct.find({ "shopId": req.query.shopid, "areaId": req.query.areaid }, (err, data) => {
        if (err) {
            res.end(err.message);
        }
        var result = { result: data };
        if (req.query.callback) {
            res.end(req.query.callback + "(" + JSON.stringify(result) + ")");
        } else {
            res.end(JSON.stringify(result));
        }
    });
}

// 获取白菜价标题信息
let m_baicaijiaTitle = mongoose.model('baicaijiaTitle');
exports.getbaicaijiatitle = (req, res) => {
    m_baicaijiaTitle.find({}, (err, data) => {
        // console.log(req.query.name);
        if (err) {
            res.end(err.message);
        }
        var result = { result: data };
        if (req.query.callback) {
            res.end(req.query.callback + "(" + JSON.stringify(result) + ")");
        } else {
            res.end(JSON.stringify(result));
        }
    });
}

// 根据白菜价标题id获取白菜价商品信息
let m_baicaijiaProduct = mongoose.model('baicaijiaProduct');
exports.getbaicaijiaproduct = (req, res) => {
    m_baicaijiaProduct.find({ "titleId": req.query.titleid }, (err, data) => {
        // console.log(req.query.name);
        if (err) {
            res.end(err.message);
        }
        var result = { result: data };
        if (req.query.callback) {
            res.end(req.query.callback + "(" + JSON.stringify(result) + ")");
        } else {
            res.end(JSON.stringify(result));
        }
    });
}
