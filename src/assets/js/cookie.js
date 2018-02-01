// 设置cookie  
export function setCookie(name, value, s) {
    var exdate = new Date();
    if(!s) {s = 30 * 60;}
    exdate.setTime(exdate.getTime() + s * 1000);
    // console.log('set cookie: ' + name + "=" + value + "; " + s);
    document.cookie = name + "=" + escape(value) + ((s == null) ? "" : ";expires=" + exdate.toGMTString());
    // console.info('cookie info: ' + document.cookie);
}

// 读取cookie 
export function getCookie(name) {
    if (document.cookie.length > 0) {
        var start = document.cookie.indexOf(name + "=");
        if (start != -1) {
            start = start + name.length + 1;
            var end = document.cookie.indexOf(";", start);
            if (end == -1)
                end = document.cookie.length
            return unescape(document.cookie.substring(start, end))
        }
    }
    return ""
}

// 删除cookie 
export function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);

    var cval = '';
    if (document.cookie.length > 0) {
        var start = document.cookie.indexOf(name + "=");
        if (start != -1) {
            start = start + name.length + 1;
            var end = document.cookie.indexOf(";", start);
            if (end == -1)
                end = document.cookie.length
            cval = unescape(document.cookie.substring(start, end))
        }
    }

    if (cval != null) {
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
}

export const  authTokenKey = 'token';
