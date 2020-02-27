$(function() {

 
    // インデックスボタンクリック
    $('.index-btn').click(function() {
        $('.active').removeClass('active');
        $('.btn-active').removeClass('btn-active');
        let clickedIndex = $('.index-btn').index($(this));
        console.log(clickedIndex);
        $('.slide').eq(clickedIndex).addClass('active');
        $('.index-btn').eq(clickedIndex).addClass('btn-active');
        // $('.slide').eq(clickedIndex).addClass('active');
    });
});

 
