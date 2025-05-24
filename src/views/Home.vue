<template>
  <div class="home-container">
    <header class="hero">
      <h1 class="title">🎧 Read Aloud - Shadow Reading</h1>
      <p class="subtitle">Improve your English listening and speaking skills with shadowing. Make language learning more natural and effective.</p>
    </header>

    <section class="content-section">
      <h2>✨ Product Overview</h2>
      <p>A Mac app designed for English learners featuring <strong>video playback, subtitle switching, speed control, and shadowing recording</strong> to help you immerse and improve.</p>
    </section>

    <section class="content-section">
      <h2>🔧 Key Features</h2>
      <ul class="feature-list">
        <li>🎬 <strong>Video Playback</strong>: Import and play local videos anytime</li>
        <li>📝 <strong>Subtitle Switching</strong>: Switch between English and Chinese subtitles freely</li>
        <li>🕒 <strong>Speed Control</strong>: Adjust playback speed for better comprehension</li>
        <li>🎙 <strong>Shadowing & Recording</strong>: Record and compare your speech with native audio</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>📌 Who Is It For</h2>
      <ul class="target-list">
        <li>Students preparing for exams like IELTS, TOEFL, CET</li>
        <li>Professionals improving speaking and listening</li>
        <li>Fans of English videos and podcasts</li>
        <li>Learners who love imitating native pronunciation</li>
      </ul>
    </section>

    <section class="content-section download-section">
      <h2>📥 Download</h2>
      <p>Search <strong>"Read Aloud - Shadow Reading"</strong> on the <strong>Mac App Store</strong> to download.</p>
      <a href="https://apps.apple.com/cn/app/%E5%90%AC%E8%AF%B4-%E5%BD%B1%E5%AD%90%E8%B7%9F%E8%AF%BB/id6740522431?mt=12" 
         class="download-link" 
         target="_blank" 
         rel="noopener noreferrer">
        Download on Mac App Store
      </a>
    </section>

    <section class="content-section support-section">
      <h2>📞 Support</h2>
      <p>If you have any questions, contact us at: 
        <a href="mailto:419094469@qq.com" class="support-link">419094469@qq.com</a>
      </p>
    </section>

    <footer class="footer">
      <p>© 2025 Lee Chen. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
.home-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
}

.title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
}

.content-section {
  margin-bottom: 2.5rem;
}

h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.feature-list, .target-list {
  list-style: none;
  padding: 0;
}

.feature-list li, .target-list li {
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  transition: transform 0.2s;
}

.feature-list li:hover, .target-list li:hover {
  transform: translateX(5px);
}

.download-section {
  text-align: center;
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
}

.download-link {
  display: inline-block;
  margin-top: 1rem;
  padding: 1rem 2rem;
  background: #007AFF;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.2s;
}

.download-link:hover {
  background: #0056b3;
}

.support-section {
  text-align: center;
}

.support-link {
  color: #007AFF;
  text-decoration: none;
}

.support-link:hover {
  text-decoration: underline;
}

.footer {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
  color: #666;
}
</style>