!function (l) {
    var e,
        n = '<svg><symbol id="iconsearch" viewBox="0 0 1024 1024"><path d="M903.97023332 957.6423243L751.68487532 761.5256913c7.884574-6.656607 15.529695-13.647835 22.890336-21.0095 33.348526-33.350572 59.533908-72.194252 77.8296-115.453499 18.948561-44.803415 28.555359-92.378967 28.555359-141.40659 0-49.021483-9.607822-96.593965-28.556383-141.393287-18.295692-43.256176-44.481074-82.09781-77.828576-115.446335S702.38709932 167.2815483 659.13092232 148.9858573C614.33262332 130.0372963 566.76321232 120.4294743 517.74275132 120.4294743c-49.021483 0-96.593965 9.607822-141.394311 28.556383-43.256176 18.295692-82.098833 44.482097-115.446335 77.830623-33.348526 33.347502-59.533908 72.189136-77.830623 115.446335-18.948561 44.800345-28.556383 92.371804-28.556383 141.393287 0 49.027623 9.607822 96.603175 28.556383 141.40659 18.295692 43.259246 44.481074 82.10395 77.8296 115.453499 33.347502 33.349549 72.189136 59.536978 115.446335 77.833693 44.800345 18.948561 92.371804 28.556383 141.394311 28.556383 49.019437 0 96.590895-9.608845 141.389194-28.557406 12.920264-5.465478 25.436322-11.649318 37.541011-18.502399l154.415882 198.860117c11.339256 14.603603 31.987528 17.545608 46.119387 6.572696l1.705851-1.325182C913.04695932 992.9791333 915.31051232 972.2459263 903.97023332 957.6423243zM517.74275132 785.5068713c-166.428473 0-301.82928-135.410016-301.82928-301.851792 0-166.428473 135.399783-301.828256 301.82928-301.828256 166.423357 0 301.818023 135.399783 301.818023 301.828256C819.56179832 650.0968553 684.16610832 785.5068713 517.74275132 785.5068713z"></path></symbol></svg>',
        t = (e = document.getElementsByTagName("script"))[e.length - 1].getAttribute("data-injectcss");
    if (t && !l.__iconfont__svg__cssinject__) {
        l.__iconfont__svg__cssinject__ = !0;
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
        } catch (e) {
            console && console.log(e)
        }
    }
    !function (e) {
        if (document.addEventListener) if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(e, 0); else {
            var t = function () {
                document.removeEventListener("DOMContentLoaded", t, !1), e()
            };
            document.addEventListener("DOMContentLoaded", t, !1)
        } else document.attachEvent && (o = e, i = l.document, c = !1, (d = function () {
            try {
                i.documentElement.doScroll("left")
            } catch (e) {
                return void setTimeout(d, 50)
            }
            n()
        })(), i.onreadystatechange = function () {
            "complete" == i.readyState && (i.onreadystatechange = null, n())
        });

        function n() {
            c || (c = !0, o())
        }

        var o, i, c, d
    }(function () {
        var e, t;
        (e = document.createElement("div")).innerHTML = n, n = null, (t = e.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", function (e, t) {
            t.firstChild ? function (e, t) {
                t.parentNode.insertBefore(e, t)
            }(e, t.firstChild) : t.appendChild(e)
        }(t, document.body))
    })
}(window);
