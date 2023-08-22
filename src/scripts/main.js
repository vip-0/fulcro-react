if (window.innerWidth < 993) {

    $(".icon-menu").click(function () {
        $(".menu").toggle();
    });

    $(".menu ul li a").click(function () {
        $(this).next().toggle();
        $(this).toggleClass("rotate");
    });

    function mobileicon(x) {
        x.classList.toggle("change");
        $(".second-menu").toggleClass("open-mobile-menu");
    }
}

$(".open-search").click(function () {
    $(".search-overlay").addClass("search-overlay-active");
});
$(".close-search").click(function () {
    $(".search-overlay").removeClass("search-overlay-active");
});

$(function () {
    $(".lazyload").lazyload();
});
$('#more-casestudy').owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    margin: 30,
    loop: true,
    navText: ['', ''],
    autoplay: false,
    responsive: {
        0: {
            items: 1,
            dots: true
        },
        600: {
            items: 3,
            margin: 10
        },
        1000: {
            items: 3
        }
    }
});

$('#seo-slider').owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    margin: 30,
    loop: true,
    navText: ['', ''],
    autoplay: false,
    responsive: {
        0: {
            items: 1,
            dots: true
        },
        600: {
            items: 3,
            margin: 10
        },
        1000: {
            items: 4
        }
    }
});

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
            $("header").addClass("darkHeader");
        } else {
            $("header").removeClass("darkHeader");
        }
    });
});

$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });


(function () {
    $('.input_container')
        .find('.floatlabel')
        .each(function () {
            $(this).on('blur', function () {
                $this = $(this);
                if (this.value !== "") {
                    $this.addClass('filled');
                }
                else {
                    $this.removeClass('filled');
                }
            });
        });
})();


$(document).ready(function () {
    $('.filte-item').isotope(function () {
        itemSelector: '.item'
    });

    $('.filte-menu ul li').click(function () {
        $('.filte-menu ul li').removeClass('active');
        $(this).addClass('active');


        var selector = $(this).attr('data-filter');
        $('.filte-item').isotope({
            filter: selector
        })
        return false;
    });
});


$(".fixed-btn .next a").hover(function () {
    $(".open-next").toggleClass("next-btn");
});
$(".fixed-btn .previous a").hover(function () {
    $(".open-previous").toggleClass("previous-btn");
});


$('#ResumeFileName').bind('change', function () {
    var filename = $("#ResumeFileName").val();
    if (/^\s*$/.test(filename)) {
        $(".file-upload").removeClass('active');
        $("#noFile").text("No file chosen...");
    }
    else {
        $(".file-upload").addClass('active');
        $("#noFile").text(filename.replace("C:\\fakepath\\", ""));
    }
});

function Submit(e) {
    e.preventDefault();
    SubmitLeadTD();
}

function SubmitLeadTD() {
    if (validation()) {
        var location = window.location.href;
        $.ajax({
            type: "POST",
            url: "/API/Lead/CallBack",
            data: {
                Name: $('#full-name-calc').val(),
                Email: $('#email-calc').val(),
                MobileNo: $("#country_code").val() + $('#MobileNocalc').val(),
                CompanyName: $('#company-name-calc').val(),
                ProjectDetails: $('#ProjectDetails-calc').val(),
                Url: location,
                __RequestVerificationToken: $('input[name="__RequestVerificationToken"]').val()
                // Token: captchaToken,
            },
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            cache: false,
            success: function (result) {
                if (result.status == "success") {
                    //  $('.error').hide();
                    $('.contact-form').hide();
                    $('.success').show();
                    $("#full-name-calc").val(''); $("#email-calc").val(''); $("#MobileNocalc").val('');
                    $("#company-name-calc").val(''); $("#ProjectDetails-calc").val('');
                    $('#full-name-calc').removeClass("filled");
                    $('#email-calc').removeClass("filled");
                    $('#MobileNocalc').removeClass("filled");
                    $('#company-name-calc').removeClass("filled");
                    $('#ProjectDetails-calc').removeClass("filled");
                    $('#country_code').removeClass("country-code-error");
                    //   window.setTimeout()

                    //  window.setTimeout(function () { $('.success').hide(); }, 2000);
                }
                else {
                    if (result.status == "EmailError") {
                        $('#email-calc').addClass("error-border");
                        $('#email-calc-span').show();
                    }
                }
            },
            error: function (res) {
                console.log(res);
            }
        });
    }
    // grecaptcha.reset();
    // return false;
}

function validation() {


    $('#full-name-calc').removeClass("error-border");
    $('#email-calc').removeClass("error-border");
    $('#MobileNocalc').removeClass("error-border");
    $('#company-name-calc').removeClass("error-border");
    $('#ProjectDetails-calc').removeClass("error-border");
    $('#country_code').removeClass("country-code-error");
    $('#full-name-span').hide(); $('#email-calc-span').hide(); $('#MobileNocalc-span').hide(); $('#company-name-span').hide(); $('#ProjectDetails-span').hide();
    $('#check-span').hide();
    var isvalid = true;
    var RegEmail = /[-a-zA-Z0-9_\.]+@[-a-zA-Z0-9]+\.[-a-zA-Z0-9\.]+/;

    if ($('#full-name-calc').val() === undefined || $('#full-name-calc').val() === "") {
        $('#full-name-calc').addClass("error-border");
        $('#full-name-span').show();
        // $('.error').show();
        isvalid = false;
    }

    if ($('#email-calc').val() === undefined || $('#email-calc').val() === "" || $('#email-calc').val().match(RegEmail) != $('#email-calc').val()) {
        $('#email-calc').addClass("error-border");
        $('#email-calc-span').show();
        // $('.error').show();
        isvalid = false;
    }
    else {
        var domainArr = configdata.split(',');
        var emailValue = $('#email-calc').val();
        var domain = emailValue.split("@")[1];
        for (var j = 0; j < domainArr.length; j++) {
            if (domain == domainArr[j]) {
                $('#email-calc').addClass("error-border");
                $('#email-calc-span').show();
                isvalid = false;
            }
        }
    }
    if ($('#country_code').val() === undefined || $('#country_code').val() == "") {
        $('#country_code').addClass("country-code-error");
        $('#MobileNocalc-span').show();
        //  $('.error').show();
        isvalid = false;
    }

    if ($('#MobileNocalc').val().length != 10 || $('#MobileNocalc').val() == "") {
        $('#MobileNocalc').addClass("error-border");
        $('#MobileNocalc-span').show();
        //  $('.error').show();
        isvalid = false;
    }

    if ($('#company-name-calc').val() === undefined || $('#company-name-calc').val() === "") {
        $('#company-name-calc').addClass("error-border");
        $('#company-name-span').show();
        //   $('.error').show();
        isvalid = false;
    }

    if ($('#ProjectDetails-calc').val() === undefined || $('#ProjectDetails-calc').val() === "") {
        $('#ProjectDetails-calc').addClass("error-border");
        $('#ProjectDetails-span').show();
        //    $('.error').show();
        isvalid = false;
    }

    if ($('#chkAutorise').not(':checked').length) {
        $('#check-span').show();
        // $('.error').show();
        isvalid = false;
    }


    return isvalid;
}

function isNumberKey(evt) {
    var regex = new RegExp("^[0-9-.\t\b]+$");
    var str = String.fromCharCode(!evt.charCode ? evt.which : evt.charCode);
    if (regex.test(str)) {
        return true;
    }
    evt.preventDefault();
    return false;
}

function isNumberKeyCountryCode(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode != 43 && charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}


function PreventEnquirySubmit(e) {
    e.preventDefault();
    SubmitEnquiry();
}

function SubmitEnquiry() {
    var location = window.location.href;
    if (enquiryvalidation()) {
        $.ajax({
            type: "POST",
            url: "/API/Lead/CallBackEnquiry",
            data: {
                Name: $('#name-calc').val(),
                Email: $('#email-id-calc').val(),
                MobileNo: $("#country_code").val() + $('#MobileNocalc').val(),
                CompanyName: $('#company-name').val(),
                ProjectDetails: $('#Project-Details-calc').val(),
                Url: location,
                __RequestVerificationToken: $('input[name="__RequestVerificationToken"]').val()
                //  Token: captchaToken,
            },
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            cache: false,
            success: function (result) {
                if (result.status == "success") {
                    //  $('.error').hide();
                    $('.enquiry').hide();
                    $('.success').show();
                    $("#name-calc").val(''); $("#email-id-calc").val(''); $("#MobileNocalc").val('');
                    $("#company-name").val(''); $("#Project-Details-calc").val('');
                    $('#name-calc').removeClass("filled");
                    $('#email-id-calc').removeClass("filled");
                    $('#MobileNocalc').removeClass("filled");
                    $('#company-name').removeClass("filled");
                    $('#Project-Details-calc').removeClass("filled");
                    $('#country_code').removeClass("country-code-error");

                    //window.setTimeout(function () { $('.success').hide(); }, 2000);
                }
                else {
                    if (result.status == "EmailError") {
                        $('#email-id-calc').addClass("error-border");
                        $('#email-calc-span').show();
                    }
                }
            },
            error: function (res) {
                console.log(res);
            }
        });
    }
    //  grecaptcha.reset();
    //  return false;
}


function enquiryvalidation() {
    // $('.error').hide();
    $('#name-calc').removeClass("error-border");
    $('#email-id-calc').removeClass("error-border");
    $('#MobileNocalc').removeClass("error-border");
    $('#company-name').removeClass("error-border");
    $('#Project-Details-calc').removeClass("error-border");
    $('#country_code').removeClass("country-code-error");
    $('#full-name-span').hide(); $('#email-calc-span').hide(); $('#MobileNocalc-span').hide(); $('#company-name-span').hide(); $('#ProjectDetails-span').hide();
    $('#check-span').hide();
    var isvalid = true;
    var RegEmail = /[-a-zA-Z0-9_\.]+@[-a-zA-Z0-9]+\.[-a-zA-Z0-9\.]+/;

    if ($('#name-calc').val() === undefined || $('#name-calc').val() === "") {
        $('#name-calc').addClass("error-border");
        //$('.error').show();
        $('#full-name-span').show();
        isvalid = false;
    }




    if ($('#email-id-calc').val() === undefined || $('#email-id-calc').val() === "" || $('#email-id-calc').val().match(RegEmail) != $('#email-id-calc').val()) {
        $('#email-id-calc').addClass("error-border");
        // $('.error').show();
        $('#email-calc-span').show();
        isvalid = false;
    }
    else {
        var domainArr = configdata.split(',');
        var emailValue = $('#email-id-calc').val();
        var domain = emailValue.split("@")[1];
        for (var j = 0; j < domainArr.length; j++) {
            if (domain == domainArr[j]) {
                $('#email-id-calc').addClass("error-border");
                $('#email-calc-span').show();
                isvalid = false;
            }
        }
    }
    if ($('#country_code').val() === undefined || $('#country_code').val() == "") {
        $('#country_code').addClass("country-code-error");
        // $('.error').show();
        $('#MobileNocalc-span').show();
        isvalid = false;
    }

    if ($('#MobileNocalc').val().length != 10 || $('#MobileNocalc').val() == "") {
        $('#MobileNocalc').addClass("error-border");
        //  $('.error').show();
        $('#MobileNocalc-span').show();
        isvalid = false;
    }

    if ($('#company-name').val() === undefined || $('#company-name').val() === "") {
        $('#company-name').addClass("error-border");
        // $('.error').show();
        $('#company-name-span').show();
        isvalid = false;
    }

    if ($('#Project-Details-calc').val() === undefined || $('#Project-Details-calc').val() === "") {
        $('#Project-Details-calc').addClass("error-border");
        // $('.error').show();
        $('#ProjectDetails-span').show();
        isvalid = false;
    }

    if ($('#chkAutorise').not(':checked').length) {
        $('#check-span').show();
        isvalid = false;
    }


    return isvalid;
}

//var initialiseReCaptcha = function () {
//    if ($("#btnSubmitTD").length > 0) {
//       OnPageFormCaptchaId = grecaptcha.render('btnSubmitTD', {
//           'sitekey': '6LfOW8cUAAAAAJWHcJ_y0tRc-sHg_vfYsCA2dvvq',
//          'callback': SubmitLeadTD,
//      });
//  }
//   if ($("#btnEnquirySubmit").length > 0) {
//       EnquiryCaptcha = grecaptcha.render('btnEnquirySubmit', {
//          'sitekey': '6LfOW8cUAAAAAJWHcJ_y0tRc-sHg_vfYsCA2dvvq',
//         'callback': SubmitEnquiry,
//      });
//   }
//};

var search = document.getElementById("search-calc");
search.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        event.preventDefault();
        window.location.href = "/search?s=" + $('#search-calc').val();
    }
});

function searchevent(e) {
    e.preventDefault();
    var search = document.getElementById("search-calc");
    window.location.href = "/search?s=" + $('#search-calc').val();

}

//$(document).ready(function () {
//   setTimeout(function () {
//       $.getScript("https://www.google.com/recaptcha/api.js?onload=initialiseReCaptcha&render=explicit");
//  }, 4000);
//});

function getQueryString() {
    var url = window.parent.location.href;
    var splitURL = url.split('?');
    var queryString = "";
    if (splitURL.length == 2) {
        queryString = splitURL[1];
    }
    return queryString;
}
function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        a = document.createElement("span");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        a.setAttribute("data-simplebar", "");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                b = document.createElement("span");
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function (e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("span");
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) {
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

var countries = ["+93", "+91", "+355", "+213", "+1-684", "+376", "+244", "+1-264", "+672", "+1-268", "+54", "+374", "+297", "+61", "+43", "+994", "+1-242", "+973", "+880", "+1-246", "+375", "+32", "+501", "+229", "+1-441", "+975", "+591", "+387", "+267", "+55", "+673", "+359", "+226", "+257", "+855", "+237", "+1", "+238", "+1-345", "+236", "+235", "+56", "+86", "+53", "+61", "+57", "+269", "+243", "+242", "+682", "+506", "+225", "+385", "+53", "+357", "+420", "+45", "+253", "+1-767", "+1-809 ", "+1-829", "+670", "+593", "+20", "+503", "+240", "+291", "+372", "+251", "+500", "+298", "+679", "+358", "+33", "+594", "+689", "+241", "+220", "+995", "+49", "+233", "+350", "+30", "+299", "+1-473", "+590", "+1-671", "+502", "+224", "+245", "+592", "+509", "+504", "+852", "+36", "+354", "+91", "+62", "+98", "+964", "+353", "+972", "+39", "+1-876", "+81", "+962", "+7", "+254", "+686", "+850", "+82", "+965", "+996", "+856", "+371", "+961", "+266", "+231", "+218", "+423", "+370", "+352", "+853", "+389", "+261", "+265", "+60", "+960", "+223", "+356", "+692", "+596", "+222", "+230", "+269", "+52", "+691", "+373", "+377", "+976", "+1-664", "+212", "+258", "+95", "+264", "+674", "+977", "+31", "+599", "+687", "+64", "+505", "+227", "+234", "+683", "+672", "+1-670", "+47", "+968", "+92", "+680", "+970", "+507", "+675", "+595", "+51", "+63", "+48", "+351", "+1-787", "+1-939", "+974", "+262", "+40", "+7", "+250", "+290", "+1-869", "+1-758", "+508", "+1-784", "+685", "+378", "+239", "+966", "+221", "+248", "+232", "+65", "+421", "+386", "+677", "+252", "+27", "+34", "+94", "+249", "+597", "+268", "+46", "+41", "+963", "+886", "+992", "+255", "+66", "+690", "+676", "+1-868", "+216", "+90", "+993", "+1-649", "+688", "+256", "+380", "+971", "+44", "+1", "+598", "+998", "+678", "+418", "+58", "+84", "+1-284", "+1-340", "+681", "+967", "+260", "+263"];
autocomplete(document.getElementById("country_code"), countries);

function SubmitCareer(e) {

    e.preventDefault();

    if (validateCareer()) {
        var location = window.location.href;
        var formData = new FormData();
        var data = {
            Name: $('#full-name-calc').val(),
            Email: $('#email-calc').val(),
            MobileNo: $("#country_code").val() + $('#MobileNocalc').val(),
            CompanyName: $('#company-name-calc').val(),
            ProjectDetails: $('#ProjectDetails-calc').val(),
            Url: location,
        };

        formData.append("data", JSON.stringify(data));
        formData.append("document1", $("#ResumeFileName")[0].files[0]);
        

        formData.append("__RequestVerificationToken", $("input[name='__RequestVerificationToken']").val());
        $.ajax({
            url: '/API/Lead/SaveCareer',
            type: 'POST',
            async: true,
            processData: false,
            contentType: false,
            data: formData,
            beforeSend: function () {
              //  ShowLoader();
            },
            success: function (result) {
                if (result.status == "success") {
                    $('.contact-form').hide();
                    $('.success').show();
                    $("#full-name-calc").val(''); $("#email-calc").val(''); $("#MobileNocalc").val('');
                    $("#company-name-calc").val(''); $("#ProjectDetails-calc").val('');
                    $('#full-name-calc').removeClass("filled");
                    $('#email-calc').removeClass("filled");
                    $('#MobileNocalc').removeClass("filled");
                    $('#company-name-calc').removeClass("filled");
                   /* $('#file-name-span').removeClass("filled");*/
                    $('#ProjectDetails-calc').removeClass("filled");
                    $('#country_code').removeClass("country-code-error");
                }
                else {
                    if (result.status == "EmailError") {
                        $('#email-calc').addClass("error-border");
                        $('#email-calc-span').show();
                    }
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
            }
        });
    }    
}

function validateCareer() {

    $('#full-name-calc').removeClass("error-border");
    $('#email-calc').removeClass("error-border");
    $('#MobileNocalc').removeClass("error-border");
    $('#company-name-calc').removeClass("error-border");
    $('#file-name-span').removeClass("error-border");
    $('#ProjectDetails-calc').removeClass("error-border");
    $('#country_code').removeClass("country-code-error");
    $('#full-name-span').hide(); $('#email-calc-span').hide(); $('#MobileNocalc-span').hide(); $('#company-name-span').hide(); $('#ProjectDetails-span').hide();$('#check-span').hide();
    var isvalid = true;
    var RegEmail = /[-a-zA-Z0-9_\.]+@[-a-zA-Z0-9]+\.[-a-zA-Z0-9\.]+/;

    if ($('#full-name-calc').val() === undefined || $('#full-name-calc').val() === "") {
        $('#full-name-calc').addClass("error-border");
        $('#full-name-span').show();
        // $('.error').show();
        isvalid = false;
    }

    if ($('#email-calc').val() === undefined || $('#email-calc').val() === "" || $('#email-calc').val().match(RegEmail) != $('#email-calc').val()) {
        $('#email-calc').addClass("error-border");
        $('#email-calc-span').show();
        // $('.error').show();
        isvalid = false;
    }
    else {
       
    }
    if ($('#country_code').val() === undefined || $('#country_code').val() == "") {
        $('#country_code').addClass("country-code-error");
        $('#MobileNocalc-span').show();
        //  $('.error').show();
        isvalid = false;
    }

    if ($('#MobileNocalc').val().length != 10 || $('#MobileNocalc').val() == "") {
        $('#MobileNocalc').addClass("error-border");
        $('#MobileNocalc-span').show();
        //  $('.error').show();
        isvalid = false;
    }

    if ($('#company-name-calc').val() === undefined || $('#company-name-calc').val() === "") {
        $('#company-name-calc').addClass("error-border");
        $('#company-name-span').show();
        //   $('.error').show();
        isvalid = false;
    }

    if ($('#ResumeFileName')[0].files.length == 0) {
        $('#file-name-span').addClass("error-border");
        $('#file-name-span').show();
        //   $('.error').show();
        isvalid = false;
    }



    if ($('#ProjectDetails-calc').val() === undefined || $('#ProjectDetails-calc').val() === "") {
        $('#ProjectDetails-calc').addClass("error-border");
        $('#ProjectDetails-span').show();
        //    $('.error').show();
        isvalid = false;
    }

    if ($('#chkAutorise').not(':checked').length) {
        $('#check-span').show();        
        isvalid = false;
    }

    return isvalid;
}
