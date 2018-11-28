'use strict'

const express = require('express');
const router = express.Router();

const apiCtrl = require('../controllers/apiController.js');

//获取首页轮播数据 http://127.0.0.1:9090/api/getlunbo
router.get('/api/getlunbo', apiCtrl.getlunbo);

//获取首页标签页图片数据 :http://127.0.0.1:9090/api/gethometab/4
router.get('/api/gethometab/:type', apiCtrl.gethometab);

//获取连载动漫页面的列表数据 :http://127.0.0.1:9090/api/getlianzai
router.get('/api/getlianzai/', apiCtrl.getlianzai);

//获取专题页面的列表数据 :http://127.0.0.1:9090/api/gettopics
router.get('/api/gettopics/', apiCtrl.gettopics);

//获取主页菜单 :http://127.0.0.1:9090/api/getindexmenu
router.get('/api/getindexmenu/', apiCtrl.getindexmenu);

//获取分类标题 :http://127.0.0.1:9090/api/getcategorytitle
router.get('/api/getcategorytitle/', apiCtrl.getcategorytitle);

//获取分类列表 :http://127.0.0.1:9090/api/getcategory
router.get('/api/getcategory/', apiCtrl.getcategory);

//根据分类id获取分类列表 :http://127.0.0.1:9090/api/getcategorybyid
router.get('/api/getcategorybyid/', apiCtrl.getcategorybyid);

//根据分类id获取商品列表 :http://127.0.0.1:9090/api/getproductlist
router.get('/api/getproductlist/', apiCtrl.getproductlist);

//根据品牌id获取商品列表 :http://127.0.0.1:9090/api/getbrandproductlist
router.get('/api/getbrandproductlist/', apiCtrl.getbrandproductlist);

//获取商品 :http://127.0.0.1:9090/api/getproduct
router.get('/api/getproduct/', apiCtrl.getproduct);

//获取商品评论 :http://127.0.0.1:9090/api/getproductcom
router.get('/api/getproductcom/', apiCtrl.getproductcom);

//获取品牌标题 :http://127.0.0.1:9090/api/getbrandtitle
router.get('/api/getbrandtitle/', apiCtrl.getbrandtitle);

//获取品牌内容 :http://127.0.0.1:9090/api/getbrand
router.get('/api/getbrand/', apiCtrl.getbrand);

//获取国内折扣商品列表信息 :http://127.0.0.1:9090/api/getinlanddiscount
router.get('/api/getinlanddiscount/', apiCtrl.getinlanddiscount);

//根据商品id获取国内折扣商品信息 :http://127.0.0.1:9090/api/getdiscountproduct
router.get('/api/getdiscountproduct/', apiCtrl.getdiscountproduct);

//根据商品id获取国内折扣商品信息 :http://127.0.0.1:9090/api/getsitenav
router.get('/api/getsitenav/', apiCtrl.getsitenav);

//根据商品id获取省钱控商品信息 :http://127.0.0.1:9090/api/getmoneyctrlproduct
router.get('/api/getmoneyctrlproduct/', apiCtrl.getmoneyctrlproduct);

//获取省钱控列表数据 :http://127.0.0.1:9090/api/getmoneyctrl
router.get('/api/getmoneyctrl/', apiCtrl.getmoneyctrl);

//获取所有优惠券标题数据 :http://127.0.0.1:9090/api/getcoupon
router.get('/api/getcoupon/', apiCtrl.getcoupon);

//根据优惠券标题id获取优惠券列表 :http://127.0.0.1:9090/api/getcouponproduct
router.get('/api/getcouponproduct/', apiCtrl.getcouponproduct);

//获取凑单品店铺信息 :http://127.0.0.1:9090/api/getgsshop
router.get('/api/getgsshop/', apiCtrl.getgsshop);

//获取凑单品区域信息 :http://127.0.0.1:9090/api/getgsshoparea
router.get('/api/getgsshoparea/', apiCtrl.getgsshoparea);

//根据店铺id和区域id凑单品商品信息 :http://127.0.0.1:9090/api/getgsproduct
router.get('/api/getgsproduct/', apiCtrl.getgsproduct);

//获取白菜价标题信息 :http://127.0.0.1:9090/api/getbaicaijiatitle
router.get('/api/getbaicaijiatitle/', apiCtrl.getbaicaijiatitle);

//根据白菜价标题id获取白菜价商品信息 :http://127.0.0.1:9090/api/getbaicaijiaproduct
router.get('/api/getbaicaijiaproduct/', apiCtrl.getbaicaijiaproduct);

//将路由对象导出
module.exports = router;
