<template>
  <div class="home-container">
    <header class="hero">
      <h1 class="title">🎧 听说-影子跟读</h1>
      <p class="subtitle">用影子跟读提升你的英语听说能力，让英语学习变得更自然、高效。</p>
    </header>

    <section class="content-section">
      <h2>✨ 产品简介</h2>
      <p>这是一款专为英语学习者打造的 <strong>Mac 英语播放器</strong>，通过 <strong>视频播放 + 字幕切换 + 跟读录音</strong> 等功能，帮助你沉浸式提升英语听说水平。</p>
    </section>

    <section class="content-section">
      <h2>🔧 核心功能</h2>
      <ul class="feature-list">
        <li>🎬 <strong>视频播放</strong>：支持导入本地视频，随时随地边看边学</li>
        <li>📝 <strong>字幕切换</strong>：支持中英文字幕自由切换，助你精准理解</li>
        <li>🕒 <strong>变速播放</strong>：语速自由调节，听不清就放慢，再也不怕难句</li>
        <li>🎙 <strong>跟读录音</strong>：一键录音影子跟读，对比原声，找出发音差距</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>📌 适合人群</h2>
      <ul class="target-list">
        <li>正在备考四六级、雅思、托福的学生</li>
        <li>想提升口语、听力表达的上班族</li>
        <li>英语视频/播客爱好者</li>
        <li>喜欢模仿母语者说话方式的语言学习者</li>
      </ul>
    </section>

    <section class="content-section download-section">
      <h2>📥 下载方式</h2>
      <p>前往 <strong>Mac App Store</strong> 搜索"听说-影子跟读"即可下载使用。</p>
      <a href="https://apps.apple.com/cn/app/%E5%90%AC%E8%AF%B4-%E5%BD%B1%E5%AD%90%E8%B7%9F%E8%AF%BB/id6740522431?mt=12" 
         class="download-link" 
         target="_blank" 
         rel="noopener noreferrer">
        <span class="download-icon">⬇️</span>
        立即下载
      </a>
    </section>

    <section class="content-section support-section">
      <h2>📞 技术支持</h2>
      <p>如有问题，请发送邮件至：
        <a href="mailto:419094469@qq.com" class="support-link">419094469@qq.com</a>
      </p>
    </section>

    <footer class="footer">
      <p>© 2025 Lee Chen. 保留所有权利。</p>
    </footer>
  </div>
</template>

<style scoped>
.home-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  color: #2c3e50;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
  border-radius: 16px;
}

.title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 700;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.content-section {
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

h2 {
  color: #2c3e50;
  margin-bottom: 1.2rem;
  font-size: 1.8rem;
  font-weight: 600;
}

.feature-list, .target-list {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 1rem;
}

.feature-list li, .target-list li {
  padding: 1rem 1.2rem;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;
}

.feature-list li:hover, .target-list li:hover {
  transform: translateX(5px);
  background: #e9ecef;
  border-color: #dee2e6;
}

.download-section {
  text-align: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 2rem;
}

.download-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding: 1rem 2rem;
  background: #007AFF;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.download-link:hover {
  background: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.download-icon {
  font-size: 1.2rem;
}

.support-section {
  text-align: center;
  background: #f8f9fa;
}

.support-link {
  color: #007AFF;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.support-link:hover {
  color: #0056b3;
  text-decoration: underline;
}

.footer {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
  color: #666;
}

@media (max-width: 768px) {
  .home-container {
    padding: 1rem;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .content-section {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .download-link {
    padding: 0.8rem 1.5rem;
  }
}
</style>