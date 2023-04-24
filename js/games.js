var index = 0;

function onInactive(ms, cb) {

    var wait = setTimeout(cb, ms);

    document.onmousemove = document.mousedown = document.mouseup = document.onkeydown = document.onkeyup = document.focus = function() {
        clearTimeout(wait);
        wait = setTimeout(cb, ms);

    };
}

$(document).keydown(function(e) {

    switch (e.which) {


        case 37: // left


            activeRow = $(".active").parent().attr('id')
            index--;
            if (index == -1) {
                index = 0
                $($('.menu .menuParent')[0]).addClass('selected')
                if ($('.menuParent').hasClass("selected")) {

                    $('.menu').css("width", "350px")
                    $(".menuParent").removeClass("activeSelection")
                    $(".gameLibrary").css("filter", "blur(10px)").css("z-index", "1000")
                    $(".gameplay").css("filter", "blur(10px)")
                    $(".gameLogo").css("filter", "blur(10px)")
                    $(".gameDescription").css("filter", "blur(10px)")
                    d3.select("#home").append("div").classed("menuText", true).html("Home")
                    d3.select("#onePlayer").append("div").classed("menuText", true).html("Single Player Games")
                    d3.select("#twoPlayer").append("div").classed("menuText", true).html("Multiplayer Games")

                    blur = app.append("div").classed("blurWindow", true)
                } else if (!$('.menuParent').hasClass("selected")) {

                }

            }

            if (activeRow == $(".gamesContainer#" + activeRow + " .boxart").length) {

                index = $('.gamesContainer:eq(' + activeRow + ') .boxart').length + 1;

            }
            $('.boxart').removeClass('active');
            $($('.gamesContainer:eq(' + activeRow + ') .boxart')[index]).addClass('active');

            $(".gamesContainer#" + activeRow).each(
                function() {

                    if (index == ($(this).find('.boxart')).length || index > ($(this).find('.boxart')).length) {
                        index = ($(this).find('.boxart')).length - 1

                    } else {
                        length = ($(this).find('.boxart')).length
                        test = Array(length).fill(null).map((_, i) => i);

                        var total_width = $("#" + activeRow + " .boxart").length * $("#" + activeRow + " .boxart .boxart").outerWidth(true);
                        $("#" + activeRow).width(total_width);
                        var parentContainerWidth = $("#" + activeRow).parent().width();
                        let arr = test.filter((_, i) => i % tileAmount == 0);

                        var theRemovedElement = arr.shift()
                        for (var i = 0; i < arr.length; i++) {
                            if (index === arr[i] - 1) {
                                $(".gamesContainer#" + activeRow).css("margin-left", -((boxWidths * tileAmount) + (tileAmount * 10)) * (i))


                                // }
                            }
                        }

                    }
                }
            );
            break;

        case 38: // up
            activeRow = $(".active").parent().attr('id')

            if ($(".active").parent().attr('id') == 0 && !$('.menuParent').hasClass("selected")) {
                $($('.gamesContainer:eq(' + activeRow - 1 + ') .boxart')[index]).addClass('active');

                index = 0

            }
            if ($('.menuParent').hasClass("selected")) {

                if ($('.menuParent:eq(' + 0 + ')').hasClass("selected")) {

                    $('.menuParent').removeClass('selected');
                    $('.menuParent:eq(' + 2 + ')').addClass('selected')
                } else if ($('.menuParent:eq(' + 1 + ')').hasClass("selected")) {

                    $('.menuParent').removeClass('selected');
                    $('.menuParent:eq(' + 0 + ')').addClass('selected')
                } else if ($('.menuParent:eq(' + 2 + ')').hasClass("selected")) {


                    $('.menuParent').removeClass('selected');
                    $('.menuParent:eq(' + 1 + ')').addClass('selected')
                }

            } else {
                $(".gamesContainer#" + (activeRow - 1)).css("margin-left", "0px")
                index = 0

                scroll = $(".gamesCategory").height()
                window.scrollBy(0, -scroll)


                activeRow = parseInt($(".active").parent().attr('id')) - 1
                oldRow = parseInt($(".active").parent().attr('id'))
                if (index == -1) {
                    index = $('.gamesContainer:eq(' + activeRow + ') .boxart').length - 1;
                }
                $($('.gamesContainer:eq(' + activeRow + ')')).parent().css("opacity", "1")
                $('.boxart').removeClass('active');
                $($('.gamesContainer:eq(' + activeRow + ') .boxart')[index]).addClass('active');
            }
            break;

        case 39: // right



            $('.menuParent').removeClass('selected');
            var count = 0
            activeRow = $(".active").parent().attr('id')
            index++;
            if ($('.menuParent').hasClass("selected")) {
                $('.menu').css("width", "350px")

            } else {

                $($('.gamesContainer:eq(' + activeRow + ') .boxart')[index]).addClass('active');

                $('.menu').css("width", "")

                $(".menuText").remove()
                $(".gameLibrary").css("filter", "").css("z-index", "100")
                $('.menu').css("width", "")
                $("*").css("filter", "")

            }

            $(".gamesContainer#" + activeRow).each(
                function() {

                    if (index == ($(this).find('.boxart')).length || index > ($(this).find('.boxart')).length) {
                        index = ($(this).find('.boxart')).length - 1

                    } else {
                        length = ($(this).find('.boxart')).length
                        test = Array(length).fill(null).map((_, i) => i);

                        var total_width = $("#" + activeRow + " .boxart").length * $("#" + activeRow + " .boxart .boxart").outerWidth(true);
                        $("#" + activeRow).width(total_width);
                        var parentContainerWidth = $("#" + activeRow).parent().width();

                        let arr = test.filter((_, i) => i % tileAmount == 0);
                        var theRemovedElement = arr.shift()
                        for (var i = 0; i < arr.length; i++) {
                            if (index === arr[i]) {

                                $(".gamesContainer#" + activeRow).css("margin-left", -((boxWidths * tileAmount) + (tileAmount * 10)) * (i + 1))
                            }
                        }

                        if (activeRow == $(".gamesContainer#" + activeRow + " .boxart").length) {
                            index = 0;
                        }
                        $('.boxart').removeClass('active');
                        $($('.gamesContainer:eq(' + activeRow + ') .boxart')[index]).addClass('active');

                    }
                }
            );
            break;

        case 40: // down
            if (index == -1) {
                index = 0
                $($('.menu .menuParent')[0]).addClass('selected')


            }

            if ($('.menuParent').hasClass("selected")) {

                if ($('.menuParent:eq(' + 0 + ')').hasClass("selected")) {

                    $('.menuParent').removeClass('selected');
                    $('.menuParent:eq(' + 1 + ')').addClass('selected')
                } else if ($('.menuParent:eq(' + 1 + ')').hasClass("selected")) {

                    $('.menuParent').removeClass('selected');
                    $('.menuParent:eq(' + 2 + ')').addClass('selected')
                } else if ($('.menuParent:eq(' + 2 + ')').hasClass("selected")) {


                    $('.menuParent').removeClass('selected');
                    $('.menuParent:eq(' + 0 + ')').addClass('selected')
                }

            } else {

                totalCategories = $('.gameLibrary').find('.gamesCategory').length
                activeCategory = parseInt($(".active").parent().attr('id')) + 1

                if (activeCategory === totalCategories && e.keyCode == 40) {

                } else {
                    index = 0
                    scroll = $(".gamesCategory").height()
                    window.scrollBy(0, scroll)

                    activeRow = parseInt($(".active").parent().attr('id')) + 1
                    oldRow = parseInt($(".active").parent().attr('id'))
                    $(".gamesContainer#" + (activeRow)).css("margin-left", "0px")
                    if (index == $('.gamesContainer:eq(' + activeRow + ') .boxart').length) {
                        index - 1;
                    }
                    $('.boxart').removeClass('active');

                    $($('.gamesContainer:eq(' + oldRow + ')')).parent().css("opacity", "0")

                    $($('.gamesContainer:eq(' + activeRow + ') .boxart')[index]).addClass('active');
                }

            }

            break;

        default:
            return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

onInactive(3000, function() {
    altGameLogo3.remove()
    id = parseInt($(".active").attr("id"))
    selectedGame = gamesAll.filter(d => d.id === id)
    selectedGame = selectedGame[0]
    logo = boxartUrl.replace("large", "original") + 'clearlogo/' + selectedGame.id + ".png"
    AltLogo = boxartUrl.replace("large", "original") + 'clearlogo/' + selectedGame.id + "-2.png"
    AltLogo2 = boxartUrl.replace("large", "original") + 'clearlogo/' + selectedGame.id + "-1.png"
    gameLogo.style("background", d => "url(" + logo + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
    altGameLogo.style("background", d => "url(" + AltLogo + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
    altGameLogo2.style("background", d => "url(" + AltLogo2 + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
    altGameLogo3 = gameDetails.append("div").classed("gameLogo", true).style("background", d => "url(images/logos/" + selectedGame.id + ".png" + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
    gameplay.attr("src", "https://www.youtube.com/embed/" + selectedGame.youtube + "?autoplay=1&rel=0&mute=1&&enablejsapi=1&loop=1&controls=0&autohide=1&showinfo=0").attr("frameborder", "0").attr("autoplay", "1").attr("width", ($(".gameplay").width() / .75)).attr("height", $(".gameplay").height()).attr("allow", "autoplay")
    gameDescription.html(selectedGame.overview.slice(0, 250) + "...")
});

function resizeIframe(iframe) {
    iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
}
Promise.all([
    fetch('data/gamelist.json'),
    fetch('data/genre.json'),
    fetch('data/lastPlayed.json'),
    fetch('data/gameDirectory.json')
]).then(function(responses) {
    return Promise.all(responses.map(function(response) {
        return response.json();
    }));
}).then(function(data) {
    availableGames = data[3]
    lastPlayed = data[2]
    body = d3.select("body")
    help = body.append("div").classed("help", true)
    arrowContainer = help.append("div").classed("arrows", true).html("Navigation")
    aContainer = help.append("div").classed("a-button", true).html("Start")
    header = body.append("header")
    search = header.append('div').attr("id", "query").classed("autoComplete_wrapper", true)
        .append("input").attr("type", "search").attr("dir", "ltr").attr("spellcheck", "false").attr("autocomplete", "false").attr("autocapitalize", "off").attr("id", "autoComplete")

    var gameList = [];
    games = data[0].data.games
    genre = [data[1].data.genres]

    var yourGameLibrary = games.filter((el) => {
        return availableGames.some((f) => {
            return f.name.split(' (')[0] === el.game_title

        });
    });
    var yourGameLibrary = games.filter((el) => {
        return availableGames.some((f) => {
            if (f.name.split(' (')[0] === el.game_title) {
                return el['file'] = f.name;
            }

        });
    });

    gamesAll = yourGameLibrary
        // gamesAll = games



    function twoPlayer() {
        gamesAll = gamesAll.filter(function(d, x) {
            return d.players > 1

        })

        let randomGame = Math.floor(Math.random() * gamesAll.length);

        $(".gamesContainer").remove()

        randomHighlight = gamesAll[randomGame]
        gameplay.attr("src", "https://www.youtube.com/embed/" + randomHighlight.youtube + "?autoplay=1&rel=0&mute=1&&enablejsapi=1&loop=1&controls=0&autohide=1&showinfo=0").attr("frameborder", "0").attr("autoplay", "1").attr("width", ($(".gameplay").width() / .75)).attr("height", $(".gameplay").height()).attr("allow", "autoplay")
        gameLogo.style("background", d => "url(" + boxartUrl.replace("large", "original") + 'clearlogo/' + randomHighlight.id + ".png" + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
        altGameLogo.style("background", d => "url(" + boxartUrl.replace("large", "original") + 'clearlogo/' + randomHighlight.id + "-2.png" + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
        altGameLogo2.style("background", d => "url(" + boxartUrl.replace("large", "original") + 'clearlogo/' + randomHighlight.id + "-1.png" + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
        altGameLogo3 = gameDetails.append("div").classed("gameLogo", true).style("background", d => "url(images/logos/" + randomHighlight.id + ".png" + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")

        gameDescription.html(randomHighlight.overview.slice(0, 250) + "...")
        gamelist(gamesAll)
    }
    gamesAll = gamesAll.filter(v => !v.game_title.includes("["));


    boxartImage = data[0].include.boxart.data


    const key = 'game_title';
    games = [...new Map(games.map(item => [item[key], item])).values()]

    for (var i = 0; i < data[0].data.games.length; i++) {
        gameList.push(data[0].data.games[i].game_title)
    }
    gameList = gameList.filter(v => !v.includes("["));

    const autoCompleteJS = new autoComplete({
        placeHolder: "Search by Game",
        data: {
            src: gameList,
            cache: true,
        },
        resultItem: {
            highlight: true
        },
        events: {
            input: {
                selection: (event) => {
                    const ogquery = event.detail.selection.value;
                    run(ogquery)

                    autoCompleteJS.input.value = ogquery;
                }
            }
        }
    });
    load(gamesAll)


    function load(gamesAll) {

        gamesAll.filter(function(d) {
            return d.youtube !== null
        })
        boxartUrl = 'https://cdn.thegamesdb.net/images/large/'
        let randomGame = Math.floor(Math.random() * gamesAll.length);
        randomHighlight = gamesAll[randomGame]
        app = body.append("div").classed("app-container", true)

        menu = app.append("div").classed("menu", true)

        leogo = menu.append("div").classed("logo", true)
        $('.search').click(function() {
            $('#autoComplete').focus();
        });

        home = menu.append("div").classed("menuParent", true).attr("id", "home").append("div").classed("menuIcon", true).classed("home", true).attr("onClick", "window.location.href = '/GameCube';")

        onePlayer = menu.append("div").classed("menuParent", true).attr("id", "onePlayer").append("div").classed("menuIcon onePlayer", true).attr("onClick", "window.location.href = '/GameCube';")
        twoPlayer = menu.append("div").classed("menuParent", true).attr("id", "twoPlayer").append("div").classed("menuIcon twoPlayer", true).on("click", twoPlayer)
        gameDetails = app.append("div").classed("gameDetails", true)
        gameLibrary = app.append("div").classed("gameLibrary", true)

        gameDetails.append("div").classed("shadowOverlay", true)
        gameDetails.append("div").classed("bottomshadowOverlay", true)
        gameplay = gameDetails.append("div").classed("gameplay", true).append("iframe")
        gameplay.attr("src", "https://www.youtube.com/embed/" + randomHighlight.youtube + "?autoplay=1&rel=0&mute=1&&enablejsapi=1&loop=1&controls=0&autohide=1&showinfo=0").attr("frameborder", "0").attr("autoplay", "1").attr("width", ($(".gameplay").width() / .75)).attr("height", $(".gameplay").height()).attr("allow", "autoplay")
        gameLogo = gameDetails.append("div").classed("gameLogo", true).style("background", d => "url(" + boxartUrl.replace("large", "original") + 'clearlogo/' + randomHighlight.id + ".png" + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
        altGameLogo = gameDetails.append("div").classed("gameLogo", true).style("background", d => "url(" + boxartUrl.replace("large", "original") + 'clearlogo/' + randomHighlight.id + "-2.png" + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
        altGameLogo2 = gameDetails.append("div").classed("gameLogo", true).style("background", d => "url(" + boxartUrl.replace("large", "original") + 'clearlogo/' + randomHighlight.id + "-1.png" + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
        altGameLogo3 = gameDetails.append("div").classed("gameLogo", true).style("background", d => "url(images/logos/" + randomHighlight.id + ".png" + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")

        gameGenre = gameDetails.append("div").classed("gameGenre", true)
        gameDescription = gameDetails.append("div").classed("gameDescription", true).html(randomHighlight.overview.slice(0, 250) + "...")
        gamePlay = gameDetails.append("div").classed("play", true).html("Play")
        byGenre = genre[0]
    }



    var intervalId = window.setInterval(function() {

        let randomGame = Math.floor(Math.random() * gamesAll.length);
        d = gamesAll[randomGame]

        boxartImage[this.id]
        logo = boxartUrl.replace("large", "original") + 'clearlogo/' + d.id + ".png"
        AltLogo = boxartUrl.replace("large", "original") + 'clearlogo/' + d.id + "-2.png"
        AltLogo2 = boxartUrl.replace("large", "original") + 'clearlogo/' + d.id + "-1.png"

        gameLogo.style("background", d => "url(" + logo + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
        altGameLogo.style("background", d => "url(" + AltLogo + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
        altGameLogo2.style("background", d => "url(" + AltLogo2 + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")

        gameplay.attr("src", "https://www.youtube.com/embed/" + d.youtube + "?autoplay=1&rel=0&mute=1&enablejsapi=1&loop=1").attr("frameborder", "0").attr("autoplay", "1").attr("width", ($(".gameplay").width() / .75)).attr("height", $(".gameplay").height()).attr("allow", "autoplay")
        gameDescription.html(d.overview.slice(0, 250) + "...")
    }, 1200000);

    played(lastPlayed)

    function played(lastPlayed) {
        if (lastPlayed.length > 0) {
            lastPlayed.sort(function(a, b) {
                return new Date(b.date) - new Date(a.date);
            });
            var lastPlayed = lastPlayed.reduce((unique, o) => {
                if (!unique.some(obj => obj.game.id === o.game.id)) {
                    unique.push(o);
                }
                return unique;
            }, []);

            lastPlayed.slice(0, 9)

            tileAmount = 8
            boxHeightRatio = 1.4074
            boxWidths = (($(window).width() - (25 * tileAmount)) / tileAmount)
            boxHeights = boxWidths * boxHeightRatio
            boxWidth = boxWidths + "px"
            boxHeight = boxHeights + "px"

            gamesArt = gameLibrary.append("div").classed("gamesCategory", true)
            scroll = $(".gamesCategory").height() + "px"

            gamesArt.append("h1").html("Last Played")
            gamesTiles = gamesArt.append("div").classed("gamesContainer", true).attr("id", 0)
            gamesTiles.selectAll("div").data(lastPlayed).enter().append("div")
                .classed("boxart", true).style("background", function(d) {
                    if (boxartImage[d.game.id][0].side === 'front') {
                        return "url(" + boxartUrl + boxartImage[d.game.id][0].filename + ")"
                    } else {
                        return "url(" + boxartUrl + boxartImage[d.game.id][1].filename + ")"
                    }
                }).attr("id", d => d.game.id).style("width", boxWidth).style("height", boxHeight)
                .style("background-size", "cover").on("click", function(x, d) {
                    boxartImage[this.id]
                    logo = boxartUrl.replace("large", "original") + 'clearlogo/' + d.game.id + ".png"
                    AltLogo = boxartUrl.replace("large", "original") + 'clearlogo/' + d.game.id + "-2.png"
                    AltLogo2 = boxartUrl.replace("large", "original") + 'clearlogo/' + d.game.id + "-1.png"

                    gameLogo.style("background", d => "url(" + logo + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
                    altGameLogo.style("background", d => "url(" + AltLogo + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
                    altGameLogo2.style("background", d => "url(" + AltLogo2 + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
                    altGameLogo3 = gameDetails.append("div").classed("gameLogo", true).style("background", d => "url(images/logos/" + this.id + ".png" + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")

                    gameplay.attr("src", "https://www.youtube.com/embed/" + d.youtube + "?autoplay=1&rel=0&mute=1&&enablejsapi=1&loop=1&controls=0&autohide=1&showinfo=0").attr("frameborder", "0").attr("autoplay", "1").attr("width", ($(".gameplay").width() / .75)).attr("height", $(".gameplay").height()).attr("allow", "autoplay")
                    gameDescription.html(d.overview.slice(0, 250) + "...")
                })

            gamelist(gamesAll)
        } else {
            gamelist(gamesAll)
        }

    }

    function gamelist(gamesAll) {

        byGenre.forEach(function(x, i) {

            tileAmount = 8
            boxHeightRatio = 1.4074
            boxWidths = (($(window).width() - (25 * tileAmount)) / tileAmount)
            boxHeights = boxWidths * boxHeightRatio
            boxWidth = boxWidths + "px"
            boxHeight = boxHeights + "px"

            gamesArt = gameLibrary.append("div").classed("gamesCategory", true)
            scroll = $(".gamesCategory").height() + "px"

            gamesArt.append("h1").html(x.name)
            gamesTiles = gamesArt.append("div").classed("gamesContainer", true).attr("id", function() {
                if (lastPlayed.length > 0) {
                    return i + 1
                } else {
                    return i
                }

            })
            gamesTiles.selectAll("div").data(gamesAll.filter(function(d) {
                    return d.genres[0] === x.id
                })).enter().append("div")
                .classed("boxart", true).style("background", function(d) {
                    if (boxartImage[d.id][0].side === 'front') {
                        return "url(" + boxartUrl + boxartImage[d.id][0].filename + ")"
                    } else {
                        return "url(" + boxartUrl + boxartImage[d.id][1].filename + ")"
                    }
                }).attr("id", d => d.id).style("width", boxWidth).style("height", boxHeight)
                .style("background-size", "cover").on("click", function(x, d) {
                    boxartImage[this.id]
                    logo = boxartUrl.replace("large", "original") + 'clearlogo/' + d.id + ".png"
                    AltLogo = boxartUrl.replace("large", "original") + 'clearlogo/' + d.id + "-2.png"
                    AltLogo2 = boxartUrl.replace("large", "original") + 'clearlogo/' + d.id + "-1.png"

                    gameLogo.style("background", d => "url(" + logo + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
                    altGameLogo.style("background", d => "url(" + AltLogo + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
                    altGameLogo2.style("background", d => "url(" + AltLogo2 + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
                    altGameLogo3 = gameDetails.append("div").classed("gameLogo", true).style("background", d => "url(images/logos/" + this.id + ".png" + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")

                    gameplay.attr("src", "https://www.youtube.com/embed/" + d.youtube + "?autoplay=1&rel=0&mute=1&&enablejsapi=1&loop=1&controls=0&autohide=1&showinfo=0").attr("frameborder", "0").attr("autoplay", "1").attr("width", ($(".gameplay").width() / .75)).attr("height", $(".gameplay").height()).attr("allow", "autoplay")
                    gameDescription.html(d.overview.slice(0, 250) + "...")
                })

            body.on("keypress", function(e) {
                if ($('.boxart').hasClass("active") && !$('.menuParent').hasClass("selected")) {
                    activeGame = parseInt($(".active").attr("id"))
                    selectedGame = gamesAll.filter(d => d.id === activeGame)
                    selectedGame = selectedGame[0]
                    if (e.charCode === 13) {
                        $.post("/lastPlayed", {
                                "date": new Date(),
                                "game": selectedGame,
                                "os": navigator.platform
                            },
                            function(data) {});
                    }
                } else if ($('#twoPlayer').hasClass("selected")) {
                    twoPlayer()
                    $('#twoPlayer').removeClass("selected")
                    $('#twoPlayer').addClass("activeSelection")
                    $('#onePlayer').removeClass("activeSelection")
                } else if ($('#onePlayer').hasClass("selected")) {
                    // location.reload();
                    onePlayer()
                    $('#onePlayer').removeClass("selected")
                    $('#onePlayer').addClass("activeSelection")
                    $('#twoPlayer').removeClass("activeSelection")
                } else if ($('#search').hasClass("selected")) {
                    $('#autoComplete').focus();
                    $("#autocomplete").css("opacity", "1")
                } else if ($('#home').hasClass("selected")) {
                    location.reload();
                }
            })


            function twoPlayer() {

                $('.menu').css("width", "")
                $(".menuText").remove()
                $(".gameLibrary").css("filter", "").css("z-index", "100")
                $('.menu').css("width", "")
                $("*").css("filter", "")
                altGameLogo3.remove()
                bottomBuffer.remove()


                var yourGameLibrary = games.filter((el) => {
                    return availableGames.some((f) => {
                        return f.name.split(' (')[0] === el.game_title

                    });
                });
                var yourGameLibrary = games.filter((el) => {
                    return availableGames.some((f) => {
                        if (f.name.split(' (')[0] === el.game_title) {
                            return el['file'] = f.name;
                        }

                    });
                });
                if (yourGameLibrary.length === 0) {
                    location.reload();
                }

                gamesAll = yourGameLibrary


                twoPLayer = gamesAll.filter(function(d, x) {
                    return d.players > 1

                })
                twoPLayerLast = lastPlayed.filter(function(d, x) {
                    return d.players > 1

                })

                let randomGame = Math.floor(Math.random() * twoPLayer.length);

                $(".gamesCategory").not(':eq(0)').remove()
                $(".gamesCategory").css("opacity", 1)
                randomHighlight = twoPLayer[randomGame]
                gameplay.attr("src", "https://www.youtube.com/embed/" + randomHighlight.youtube + "?autoplay=1&rel=0&mute=1&enablejsapi=1&loop=1").attr("frameborder", "0").attr("autoplay", "1").attr("width", ($(".gameplay").width() / .75)).attr("height", $(".gameplay").height()).attr("allow", "autoplay")
                gameLogo.style("background", d => "url(" + boxartUrl.replace("large", "original") + 'clearlogo/' + randomHighlight.id + ".png" + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
                altGameLogo.style("background", d => "url(" + boxartUrl.replace("large", "original") + 'clearlogo/' + randomHighlight.id + "-2.png" + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
                altGameLogo2.style("background", d => "url(" + boxartUrl.replace("large", "original") + 'clearlogo/' + randomHighlight.id + "-1.png" + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
                altGameLogo3 = gameDetails.append("div").classed("gameLogo", true).style("background", d => "url(images/logos/" + randomHighlight.id + ".png" + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")

                gameDescription.html(randomHighlight.overview.slice(0, 250) + "...")
                gamelist(twoPLayer)
                bottomBuffer = d3.select(".gameLibrary").append("div").classed("spacer", true).style("height", scroll)
            }

            function onePlayer() {

                $('.menu').css("width", "")
                $(".menuText").remove()
                $(".gameLibrary").css("filter", "").css("z-index", "100")
                $('.menu').css("width", "")
                $("*").css("filter", "")
                $(".menuParent").removeClass("selected")
                altGameLogo3.remove()
                bottomBuffer.remove()

                var yourGameLibrary = games.filter((el) => {
                    return availableGames.some((f) => {
                        return f.name.split(' (')[0] === el.game_title

                    });
                });
                var yourGameLibrary = games.filter((el) => {
                    return availableGames.some((f) => {
                        if (f.name.split(' (')[0] === el.game_title) {
                            return el['file'] = f.name;
                        }

                    });
                });
                if (yourGameLibrary.length === 0) {
                    location.reload();
                }
                gamesAll = yourGameLibrary

                onePlayer = gamesAll.filter(function(d, x) {
                    return d.players === 1

                })
                console.log(onePlayer)
                let randomGame = Math.floor(Math.random() * onePlayer.length);

                $(".gamesCategory").not(':eq(0)').remove()
                $(".gamesCategory").css("opacity", 1)
                randomHighlight = onePlayer[randomGame]
                gameplay.attr("src", "https://www.youtube.com/embed/" + randomHighlight.youtube + "?autoplay=1&rel=0&mute=1&enablejsapi=1&loop=1").attr("frameborder", "0").attr("autoplay", "1").attr("width", ($(".gameplay").width() / .75)).attr("height", $(".gameplay").height()).attr("allow", "autoplay")
                gameLogo.style("background", d => "url(" + boxartUrl.replace("large", "original") + 'clearlogo/' + randomHighlight.id + ".png" + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
                altGameLogo.style("background", d => "url(" + boxartUrl.replace("large", "original") + 'clearlogo/' + randomHighlight.id + "-2.png" + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
                altGameLogo2.style("background", d => "url(" + boxartUrl.replace("large", "original") + 'clearlogo/' + randomHighlight.id + "-1.png" + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
                altGameLogo3 = gameDetails.append("div").classed("gameLogo", true).style("background", d => "url(images/logos/" + randomHighlight.id + ".png" + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")

                gameDescription.html(randomHighlight.overview.slice(0, 250) + "...")
                gamelist(onePlayer)
                bottomBuffer = d3.select(".gameLibrary").append("div").classed("spacer", true).style("height", scroll)
            }
            $('.gamesContainer#0 div:first').addClass('active');


            $('.gamesCategory .gamesContainer').filter(function(index) {
                return $(this).children().length === 0;
            }).parent().remove();

            function sortUsingNestedText(parent, childSelector, keySelector) {
                var items = parent.children(childSelector).sort(function(a, b) {
                    var vA = $(keySelector, a).text();
                    var vB = $(keySelector, b).text();
                    return (vA < vB) ? -1 : (vA > vB) ? 1 : 0;
                });
                parent.append(items);
            }

            sortUsingNestedText($('.app-container'), ".gamesContainer");

            test = gamesArt._groups[0][0]
            var count = 0
            if (test.offsetWidth > $(window).width()) {

            }
        })

    }
    bottomBuffer = d3.select(".gameLibrary").append("div").classed("spacer", true).style("height", scroll)

})

function run(ogquery) {
    var searched = d3.select("#autoComplete")
    searched.on("keypress", function(e) {
        ogquery = d3.select("#autoComplete").node().value
        if (e.charCode === 13) {
            run(ogquery)
        }
    })
    d = games.filter(function(d) {
        return d.game_title === ogquery
    })
    d = d[0]
    boxartImage[this.id]
    logo = boxartUrl.replace("large", "original") + 'clearlogo/' + d.id + ".png"
    AltLogo = boxartUrl.replace("large", "original") + 'clearlogo/' + d.id + "-2.png"
    AltLogo2 = boxartUrl.replace("large", "original") + 'clearlogo/' + d.id + "-1.png"

    gameLogo.style("background", d => "url(" + logo + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
    altGameLogo.style("background", d => "url(" + AltLogo + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
    altGameLogo2.style("background", d => "url(" + AltLogo2 + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")
    altGameLogo3 = gameDetails.append("div").classed("gameLogo", true).style("background", d => "url(images/logos/" + boxartImage + ".png" + ")").style("background-size", "contain").style("background-repeat", "no-repeat").style("background-position-y", "center")

    gameplay.attr("src", "https://www.youtube.com/embed/" + d.youtube + "?autoplay=1&rel=0&mute=1&enablejsapi=1&loop=1").attr("frameborder", "0").attr("autoplay", "1").attr("width", ($(".gameplay").width() / .75)).attr("height", $(".gameplay").height()).attr("allow", "autoplay")
    gameDescription.html(d.overview.slice(0, 250) + "...")


}