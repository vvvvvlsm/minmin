// 在页面加载完成后执行的函数
window.onload = function() {
    // 获取页面元素
    var title = document.querySelector('h1');

    // 修改元素的内容
    title.textContent = '欢迎访问我的个人主页';

    // 添加事件监听器
    title.addEventListener('click', function() {
        alert('你点击了标题');
    });
};
