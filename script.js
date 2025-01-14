// スムーズスクロールの設定
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// スクロール時のヘッダー変化
window.addEventListener('scroll', () => {
  const headerHeight = header.offsetHeight;
  if (window.scrollY > headerHeight) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// セクションのアクティブ状態管理
const sections = document.querySelectorAll('.slide');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// 初期化処理
document.addEventListener('DOMContentLoaded', () => {
  // 最初のセクションをアクティブにする
  if (sections.length > 0) {
    const firstSectionId = sections[0].getAttribute('id');
    const correspondingLink = document.querySelector(`nav a[href="#${firstSectionId}"]`);
    if (correspondingLink) {
      correspondingLink.classList.add('active');
    }
  }
});