// 菜单按钮
var menuTrigger = document.getElementById('menu-trigger');
// 菜单内容
var menuContent = document.getElementById('menu-content');

// 打开/关闭菜单
function toggleMenu() {
    menuContent.classList.toggle('open');
}

// 点击菜单按钮打开/关闭菜单
menuTrigger.addEventListener('click', toggleMenu);

// 点击菜单以外的区域关闭菜单
document.addEventListener('click', function(event) {
    var target = event.target;
    if (!menuContent.contains(target) && !menuTrigger.contains(target)) {
        menuContent.classList.remove('open');
    }
});

// 导航链接点击事件
var navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var targetSectionId = link.getAttribute('href').slice(1);
        var targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
            // 滚动到目标区域
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
            // 关闭菜单
            menuContent.classList.remove('open');
        }
    });
});
