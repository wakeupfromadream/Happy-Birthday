// 更新时间的函数
function updateClock() {
    var now = new Date(); // 获取当前时间
    var year = now.getFullYear(); // 年份
    var month = now.getMonth() + 1; // 月份，从0开始，所以加1
    var date = now.getDate(); // 日期
    var hours = now.getHours(); // 小时
    var minutes = now.getMinutes(); // 分钟
    var seconds = now.getSeconds(); // 秒数

    // 如果小于10，添加'0'前缀，以保持两位数字的格式
    month = month < 10 ? '0' + month : month;
    date = date < 10 ? '0' + date : date;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // 将时间格式化为 YYYY-MM-DD HH:MM:SS 的形式
    var timeString = year + '年' + month + '月' + date + '日' + hours + '时' + minutes + '分' + seconds + '秒';

    // 获取页面元素，并更新其内容
    var timeElement = document.getElementById('real-time');
    timeElement.textContent = timeString;

    // 每1000毫秒（1秒）更新时间
    setTimeout(updateClock, 1000);
}

// 页面加载完成后立即更新时间
window.onload = updateClock;