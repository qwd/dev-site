function getUrlKey(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ''])[1].replace(/\+/g, '%20')) || null
}
$(function () {
    var token = getUrlKey("token");
    if (!token || token === '') {
        token = Cookies.get('__LE__');
    }
    if (token && token !== '') {
        $.get('https://id.heweather.com/v1.0/app/login/check', {token: token}, function (data) {
            if (data.code === '100') {
                window.token = token;
                window.logged = true;
                $('#logout').show();
                $('#login').hide();
            } else {
                window.logged = false;
                window.token = undefined;
                $('#logout').hide();
                $('#login').show();
            }
        })
    }
});
