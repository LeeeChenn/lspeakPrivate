<template>
  <div class="home-container">
    <header class="hero">
      <h1 class="title">🎧 聽說-影子跟讀</h1>
      <p class="subtitle">透過影子跟讀提升你的英語聽說能力，讓語言學習更自然、高效。</p>
    </header>

    <section class="content-section">
      <h2>✨ 產品簡介</h2>
      <p>這是一款專為英語學習者打造的 <strong>Mac 英語播放器</strong>，透過 <strong>影片播放 + 字幕切換 + 跟讀錄音</strong> 等功能，幫助你沉浸式提升英語能力。</p>
    </section>

    <section class="content-section">
      <h2>🔧 核心功能</h2>
      <ul class="feature-list">
        <li>🎬 <strong>影片播放</strong>：支援匯入本地影片，隨時隨地學習</li>
        <li>📝 <strong>字幕切換</strong>：中英文字幕自由切換，提升理解</li>
        <li>🕒 <strong>變速播放</strong>：語速可調，掌握每一句</li>
        <li>🎙 <strong>跟讀錄音</strong>：錄音比對原聲，發音進步看得見</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>📌 適用對象</h2>
      <ul class="target-list">
        <li>準備考試如多益、雅思、托福的學生</li>
        <li>希望提升聽說能力的上班族</li>
        <li>英語影片與 Podcast 愛好者</li>
        <li>喜歡模仿母語者說話方式的學習者</li>
      </ul>
    </section>

    <section class="content-section download-section">
      <h2>📥 下載方式</h2>
      <p>請至 <strong>Mac App Store</strong> 搜尋「聽說-影子跟讀」下載使用。</p>
      <a href="https://apps.apple.com/cn/app/%E5%90%AC%E8%AF%B4-%E5%BD%B1%E5%AD%90%E8%B7%9F%E8%AF%BB/id6740522431?mt=12" 
         class="download-link" 
         target="_blank" 
         rel="noopener noreferrer">
        <span class="download-icon">⬇️</span>
        立即下載
      </a>
    </section>

    <section class="content-section support-section">
      <h2>📞 技術支援</h2>
      <p>如有任何問題，請聯繫：
        <a href="mailto:419094469@qq.com" class="support-link">419094469@qq.com</a>
      </p>
    </section>

    <footer class="footer">
      <p>© 2025 Lee Chen. 保留所有權利。</p>
    </footer>
  </div>
</template>

<style scoped>
.home-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang TC', 'Microsoft JhengHei', sans-serif;
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