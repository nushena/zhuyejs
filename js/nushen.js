/* 存活时间*/
function siteTime() {
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
    var t1 = Date.UTC('2020', '05', '20', '12', '00', '00')
    var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond)
    var diff = t2 - t1
    var diffYears = Math.floor(diff / years)
    var diffDays = Math.floor((diff / days) - diffYears * 365)
    var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours)
    var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes)
    var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours - diffMinutes * minutes) / seconds)
    document.getElementById("sitetime").innerHTML = "" + diffYears + " 年 " + diffDays + " 天 " + diffHours + " 小时 " + diffMinutes + " 分钟 " + diffSeconds + " 秒"
    /* document.getElementById("sitetime").innerHTML=""+(diffYears*365+diffDays)+" 天 "+diffHours+" 小时 "+diffMinutes+" 分钟 "+diffSeconds+" 秒" */
}
siteTime()

/*以下内容自定义修改
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
*/
function disappear() {
    if (document.getElementById("page-info").style.display == "block") {
        document.getElementById("page-info").style.display = "none";
    } else {
        document.getElementById("page-info").style.display == "block"
    }
}

/* 首页文案 打字机形式加载 配合typewriter.min.js*/
var app = document.getElementById('chakhsu');
var typewriter = new Typewriter(chakhsu, {
    loop: true
});

function showyiyan(yiyan = '') {
    typewriter.typeString('青衫烟雨客，似是故人来。')
        .pauseFor(3500)
        .deleteAll()
    for (var i = 0; i < yiyan.length; i++) {
        typewriter.typeString(yiyan[i])
        typewriter.pauseFor(3000)
        typewriter.deleteAll()
            .start()
    }
}


//判断节假日期
function changeDengLong(name1, name2) {
    var html1 = '<div class="deng-box2"><div class="deng"><div class="xian"></div><div class="deng-a"><div class="deng-b"><div class="deng-t">' + name2 + '</div></div></div><div class="shui shui-a"><div class="shui-c"></div><div class="shui-b"></div></div></div></div><div class="deng-box3"><div class="deng"><div class="xian"></div><div class="deng-a"><div class="deng-b"><div class="deng-t">' + name1 + '</div></div></div><div class="shui shui-a"><div class="shui-c"></div><div class="shui-b"></div></div></div></div><div class="deng-box1"><div class="deng"><div class="xian"></div><div class="deng-a"><div class="deng-b"><div class="deng-t">乐</div></div></div><div class="shui shui-a"><div class="shui-c"></div><div class="shui-b"></div></div></div></div><div class="deng-box"><div class="deng"><div class="xian"></div><div class="deng-a"><div class="deng-b"><div class="deng-t">快</div></div></div><div class="shui shui-a"><div class="shui-c"></div><div class="shui-b"></div></div></div></div><style type="text/css">.deng-box {position: fixed;top: -40px;right: 180px;z-index: 9999;pointer-events: none;}.deng-box1 {position: fixed;top: -30px;right: 10px;z-index: 9999;pointer-events: none}.deng-box2 {position: fixed;top: -40px;left: 180px;z-index: 9999;pointer-events: none}.deng-box3 {position: fixed;top: -30px;left: 10px;z-index: 9999;pointer-events: none}.deng-box1 .deng,.deng-box3 .deng {position: relative;width: 120px;height: 90px;margin: 50px;background: #d8000f;background: rgba(216, 0, 15, .8);border-radius: 50% 50%;-webkit-transform-origin: 50% -100px;-webkit-animation: swing 5s infinite ease-in-out;box-shadow: -5px 5px 30px 4px #fc903d}.deng {position: relative;width: 120px;height: 90px;margin: 50px;background: #d8000f;background: rgba(216, 0, 15, .8);border-radius: 50% 50%;-webkit-transform-origin: 50% -100px;-webkit-animation: swing 3s infinite ease-in-out;box-shadow: -5px 5px 50px 4px #fa6c00}.deng-a {width: 100px;height: 90px;background: #d8000f;background: rgba(216, 0, 15, .1);margin: 12px 8px 8px 8px;border-radius: 50% 50%;border: 2px solid #dc8f03}.deng-b {width: 45px;height: 90px;background: #d8000f;background: rgba(216, 0, 15, .1);margin: -4px 8px 8px 26px;border-radius: 50% 50%;border: 2px solid #dc8f03}.xian {position: absolute;top: -20px;left: 60px;width: 2px;height: 20px;background: #dc8f03}.shui-a {position: relative;width: 5px;height: 20px;margin: -5px 0 0 59px;-webkit-animation: swing 4s infinite ease-in-out;-webkit-transform-origin: 50% -45px;background: orange;border-radius: 0 0 5px 5px}.shui-b {position: absolute;top: 14px;left: -2px;width: 10px;height: 10px;background: #dc8f03;border-radius: 50%}.shui-c {position: absolute;top: 18px;left: -2px;width: 10px;height: 35px;background: orange;border-radius: 0 0 0 5px}.deng:before {position: absolute;top: -7px;left: 29px;height: 12px;width: 60px;content: " ";display: block;z-index: 999;border-radius: 5px 5px 0 0;border: solid 1px #dc8f03;background: orange;background: linear-gradient(to right, #dc8f03, orange, #dc8f03, orange, #dc8f03)}.deng:after {position: absolute;bottom: -7px;left: 10px;height: 12px;width: 60px;content: " ";display: block;margin-left: 20px;border-radius: 0 0 5px 5px;border: solid 1px #dc8f03;background: orange;background: linear-gradient(to right, #dc8f03, orange, #dc8f03, orange, #dc8f03)}.deng-t {font-family: 黑体, Arial, Lucida Grande, Tahoma, sans-serif;font-size: 3.2rem;color: #dc8f03;font-weight: 700;line-height: 85px;text-align: center}.night .deng-box,.night .deng-box1,.night .deng-t {background: 0 0 !important}@-moz-keyframes swing {0% {-moz-transform: rotate(-10deg)}50% {-moz-transform: rotate(10deg)}100% {-moz-transform: rotate(-10deg)}}@-webkit-keyframes swing {0% {-webkit-transform: rotate(-10deg)}50% {-webkit-transform: rotate(10deg)}100% {-webkit-transform: rotate(-10deg)}}</style>';
    return html1;
}

$.get('https://timor.tech/api/holiday/info/', function (wyfanhui) {
    // console.log(wyfanhui);
    if (wyfanhui.holiday != null) {
        if (wyfanhui.code == 0 && wyfanhui.holiday.holiday == true) {
            // 判断返回成功  判断是否节日
            jieri = wyfanhui.holiday.name.substr(0, 2);
            jieri1 = jieri.substr(0, 1);
            jieri2 = jieri.substr(1, 2);
            changeDengLong(jieri1, jieri2);
            document.getElementById('Denglong').innerHTML = changeDengLong(jieri1, jieri2)
        }
    }
    // 获取月份
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    currentMonth += 1;
    //默认为红旗
    page_SuUrl = ['./static/images/hongqi.png']
    if (currentMonth >= 3 & currentMonth <= 5) {
        //春
        page_SuUrl = ['./static/images/hongqi.png']
    } else if (currentMonth >= 6 & currentMonth <= 8) {
        //夏
        page_SuUrl = ['./static/images/bing1.png']
    } else if (currentMonth >= 9 & currentMonth <= 11) {
        //秋
        page_SuUrl = ['./static/images/feng1.png', './static/images/feng3.png', './static/images/feng2.png']
    } else if (currentMonth == 12 | currentMonth == 1 | currentMonth == 1) {
        //冬天
        page_SuUrl = ['./static/images/snow1.gif', './static/images/snow0.gif']
    }
    //调用su.js中的wpSuperSnow
    $('body').wpSuperSnow({
        flakes: page_SuUrl,
        totalFlakes: '120',
        zIndex: '999999',
        maxSize: '30',
        maxDuration: '20',
        useFlakeTrans: false
    })
})


// 	{
//   "code": 0,              // 0服务正常。-1服务出错
//   "type": {
//     "type": enum(0, 1, 2, 3), // 节假日类型，分别表示 工作日、周末、节日、调休。
//     "name": "周六",         // 节假日类型中文名，可能值为 周一 至 周日、假期的名字、某某调休。
//     "week": enum(1 - 7)    // 一周中的第几天。值为 1 - 7，分别表示 周一 至 周日。
//   },
//   "holiday": {            //工作日时为null
//     "holiday": false,     // true表示是节假日，false表示是调休
//     "name": "国庆前调休",  // 节假日的中文名。如果是调休，则是调休的中文名，例如'国庆前调休'
//     "wage": 1,            // 薪资倍数，1表示是1倍工资
//     "after": false,       // 只在调休下有该字段。true表示放完假后调休，false表示先调休再放假
//     "target": '国庆节'     // 只在调休下有该字段。表示调休的节假日
//   }
// }
