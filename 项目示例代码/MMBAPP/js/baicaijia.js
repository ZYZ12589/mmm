/**
 * Created by Jepson on 2017/5/31.
 */
$(function() {
    setTitle($('.bcj-title'), $.getUrlParam('titleid'));
    setProductList($('.bcj-list'), $.getUrlParam('titleid'));

    function setTitle(dom, titleid) {
        // 获取白菜价页面的tab栏标题数据并渲染
        Route.getbaicaijiatitle( function( data ) {
            var html = template('bcjTitle', data);
            dom.html(html);
            var titleLi = dom.find('.ul-wapper .tabs li');
            var tabsUlWidth = 0;
            for (var i = 0; i < titleLi.length; i++) {
                tabsUlWidth += $(titleLi[i]).width();
            }
            var windowWidth = $(window).width();
            if (windowWidth < 768) {
                dom.find('.ul-wapper .tabs').css('width', tabsUlWidth + 38);
            }
            $(titleLi[titleid || 0]).addClass('active');
            topSwipe(dom.find('.ul-wapper .tabs'), titleid);
        })
    }

    function topSwipe(dom, titleid) {
        var domWidth = dom.width();
        var domParentWidth = dom.parent().width();
        var buffer = 50;
        var maxPosition = 0;
        var minPosition = domParentWidth - domWidth;
        var maxSwipe = 0 + buffer;
        var minSwipe = minPosition - 50;
        var startX = 0;
        var moveX = 0;
        var endX = 0;
        var distanceX = 0;
        var currentX = 0;
        var li = dom.find('li');
        for (var i = 0; i < titleid; i++) {
            currentX -= $(li[i]).width();
        }
        if (currentX < minPosition) {
            currentX = minPosition
        } else if (currentX > maxPosition) {
            currentX = maxPosition;
        }
        addTransition(dom);
        setTranslateX(dom, currentX)
        dom[0].addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
        });
        dom[0].addEventListener('touchmove', function(e) {
            moveX = e.touches[0].clientX;
            distanceX = moveX - startX;
            // removeTransition(dom);
            if ((currentX + distanceX) > minSwipe && (currentX + distanceX) < maxSwipe) {
                // console.log(currentX + distanceX);
                addTransition(dom);
                setTranslateX(dom, (currentX + distanceX));
            }
        });
        dom[0].addEventListener('touchend', function(e) {
            // endX = e.changedTouches[0].;
            if ((currentX + distanceX) > maxPosition) {
                currentX = maxPosition;
                addTransition(dom);
                setTranslateX(dom, currentX);
            }
            //小于最小定位的时候
            else if ((currentX + distanceX) < minPosition) {
                currentX = minPosition;
                addTransition(dom);
                setTranslateX(dom, currentX);
            } else {
                //记录当前滑动完成后的定位
                currentX = currentX + distanceX;
            }
        });

        function addTransition(dom) {
            dom.css('transition', "all 0.2s");
        }

        function removeTransition(dom) {
            dom.css('transition', "none");
        }

        function setTranslateX(dom, x) {
            dom.css('transform', "translateX(" + x + "px)");
        }
    }

    // 根据标题id获取该标题对应的商品列表然后渲染到页面
    function setProductList(dom, titleid, callback) {
        titleid = titleid || 0;
        Route.getbaicaijiaproduct( titleid, function( data ) {
            var html = template('bcjProductList', data);
            dom.html(html);
        })
    }
})
