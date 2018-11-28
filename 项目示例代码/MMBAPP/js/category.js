/**
 * Created by Jepson on 2017/5/30.
 */

$(function() {
    setCategoryTitle($('#category > .row'));

    function setCategoryTitle(dom, callback) {
        Route.getcategorytitle(function( res ) {
            var data = res.result;
            var titleHtml = '<ul class="category-title">';
            data.forEach(function( item, index ){
                titleHtml += '<li>'
                            +   '<a href="javascript:void(0)" data-title-id="' + item.titleId + '" style="background-image:url(http://www.zuyushop.com/wap/images/arrow1.gif);">'
                            +       item.title
                            +    '</a>'
                            +'</li>';
            })
            titleHtml += "</ul>";
            $(dom).html(titleHtml);

            setCategory( $(dom).find('.category-title > li > a') );
        })
    }

    function setCategory(dom, callback) {
        $(dom).one('click', function() {
            var self = this;
            var titleId = $(this).data('title-id');
            $(this).parent().find('ul').toggleClass('hide');

            Route.getcategory( titleId, function( res ) {
                var data = res.result;
                var categoryHtml = '<ul class="category-content clearfix">';
                data.forEach(function( item, index ){
                    categoryHtml += '<li>'
                                    +   '<a href="productlist.html?categoryid='+item.categoryId+'&category='+item.category+'&pageid=1" data-category-id="' + item.categoryId + '">'
                                    +       item.category
                                    +   '</a>'
                                    +'</li>';
                })
                categoryHtml += "</ul>";
                $(self).parent().append(categoryHtml);
            });
        })
        $(dom).on('click', function() {
            $(this).parent().find('ul').toggleClass('hide');
        })
    }
});
