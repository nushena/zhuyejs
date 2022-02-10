/* ----

小窝存活时间
---- */
function siteTime(){
window.setTimeout("siteTime()", 1000);
var seconds = 1000
var minutes = seconds * 60
var hours = minutes * 60
var days = hours * 24
var years = days * 365
var today = new Date()
var todayYear = today.getFullYear()
var todayMonth = today.getMonth()
var todayDate = today.getDate()
var todayHour = today.getHours()
var todayMinute = today.getMinutes()
var todaySecond = today.getSeconds()
/* Date.UTC() -- 返回date对象距世界标准时间(UTC)1970年1月1日午夜之间的毫秒数(时间戳) 
year - 作为date对象的年份,为4位年份值
month - 0-11之间的整数,做为date对象的月份
day - 1-31之间的整数,做为date对象的天数
hours - 0(午夜24点)-23之间的整数,做为date对象的小时数
minutes - 0-59之间的整数,做为date对象的分钟数
seconds - 0-59之间的整数,做为date对象的秒数
microseconds - 0-999之间的整数,做为date对象的毫秒数 */
var t1 = Date.UTC(2020,05,20,12,00,00)
var t2 = Date.UTC(todayYear,todayMonth,todayDate,todayHour,todayMinute,todaySecond)
var diff = t2-t1
var diffYears = Math.floor(diff/years)
var diffDays = Math.floor((diff/days)-diffYears*365)
var diffHours = Math.floor((diff-(diffYears*365+diffDays)*days)/hours)
var diffMinutes = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours)/minutes)
var diffSeconds = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours-diffMinutes*minutes)/seconds)
document.getElementById("sitetime").innerHTML=""+diffYears+" 年 "+diffDays+" 天 "+diffHours+" 小时 "+diffMinutes+" 分钟 "+diffSeconds+" 秒"
/* document.getElementById("sitetime").innerHTML=""+(diffYears*365+diffDays)+" 天 "+diffHours+" 小时 "+diffMinutes+" 分钟 "+diffSeconds+" 秒" */
}
siteTime()


/* 首页文案 */
var chakhsu = function (r) {
    function t() {
        return b[Math.floor(Math.random() * b.length)]
    }
    function e() {
        return String.fromCharCode(94 * Math.random() + 33)
    }
    function n(r) {
        for (var n = document.createDocumentFragment(), i = 0; r > i; i++) {
            var l = document.createElement("span");
            l.textContent = e(), l.style.color = t(), n.appendChild(l)
        }
        return n
    }
    function i() {
        var t = o[c.skillI];
        c.step ? c.step-- : (c.step = g, c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) : "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP], c.skillP++) : c.delay ? c.delay-- : (c.direction = "backward", c.delay = a) : c.skillP > 0 ? (c.text = c.text.slice(0, -1), c.skillP--) : (c.skillI = (c.skillI + 1) % o.length, c.direction = "forward")), r.textContent = c.text, r.appendChild(n(c.prefixP < l.length ? Math.min(s, s + c.prefixP) : Math.min(s, t.length - c.skillP))), setTimeout(i, d)
    }
    /*以下内容自定义修改*/
    var l = ""
    o = ["千篇一律的面具背后尽是伪善的人心。",
        "吾心吾行澄如明镜，所作所为皆为正义。",
        "离别长，欢聚短，若共把酒为歌，且斟余生一酌。",
        "昨夜星辰昨夜风，画楼西畔桂堂东。",
         "诸行无常、诸法无我、涅槃喧嚣。",
        "Everything ends. But everything begins again too."
        ].map(function (r) {
        return r + ""
    }), a = 2, g = 1, s = 5, d = 75,
        b = ["rgb(110,64,170)", "rgb(150,61,179)", "rgb(191,60,175)", "rgb(228,65,157)", "rgb(254,75,131)", "rgb(255,94,99)", "rgb(255,120,71)", "rgb(251,150,51)", "rgb(226,183,47)", "rgb(198,214,60)", "rgb(175,240,91)", "rgb(127,246,88)", "rgb(82,246,103)", "rgb(48,239,130)", "rgb(29,223,163)", "rgb(26,199,194)", "rgb(35,171,216)", "rgb(54,140,225)", "rgb(76,110,219)", "rgb(96,84,200)"],
        c = { text: "", prefixP: -s, skillI: 0, skillP: 0, direction: "forward", delay: a, step: g };
    i()
};
chakhsu(document.getElementById('chakhsu'));

function disappear() {
    if (document.getElementById("page-info").style.display == "block") {
        document.getElementById("page-info").style.display = "none";
    }
}
