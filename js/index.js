(() => {
    /* WOW LIBRARY */
    new WOW().init();

    /* SCROLL */
    (($) => {
        $(window).on("load", () => {
            $("#nav-bar a").mPageScroll2id();
        });
    })(jQuery);

    $("a[href='#top']").click(() => {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

    $("ul li a").click((e) => {
        clearHav();
        e.target.className += " active";
    });

    window.onscroll = () => {
        let height = $(".header").height();
        let heightNow = $('body,html').scrollTop();
        if (heightNow >= height) {
            $("a[href='#top']").css({
                display: "block"
            });
        } else {
            $(".back-to-top").css({
                display: "none"
            });
        }
        clearHav();
        if (heightNow >= height * 4) {
            $("ul li a")[4].className += " active";
        } else if (heightNow >= height * 3) {
            $("ul li a")[3].className += " active";
        } else if (heightNow >= height * 2) {
            $("ul li a")[2].className += " active";
        } else if (heightNow >= height) {
            $("ul li a")[1].className += " active";
        } else {
            $("ul li a")[0].className += " active";
        }
    }

    const clearHav = () => {
        for (let i = 0; i <= 4; i++) {
            $("ul li a")[i].className = "";
        }
    };

    /* SCREENSHOTS */
    $('#min-screenshots').delegate('img', 'click', function () {
        $('#largeImage').attr('src', $(this).attr('src'));
        $('#description').html($(this).attr('alt'));
    });

    $('#min-screenshots2').delegate('img', 'click', function () {
        $('#largeImage').attr('src', $(this).attr('src'));
        $('#description').html($(this).attr('alt'));
    });
})();