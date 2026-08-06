import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="home-header">
        <div className="header-title">
          <p className="product-label">ระบบตรวจสอบครุภัณฑ์</p>
          <h1>V.01</h1>
        </div>
        <div className="header-meta">
          <span className="meta-icon" aria-hidden="true">📅</span>
          <span>สวกว. ปีงบประมาณ 2569</span>
        </div>
      </header>

      <main className="home-main">
        <section className="scanner-card">
          <div className="scanner-top">
            <button type="button" className="camera-button" aria-label="แตะเพื่อเปิดกล้องสแกน">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M20 7h-3.17l-1.84-2.21A1 1 0 0 0 14 4h-4a1 1 0 0 0-.99.79L7.17 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-8 11a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm4.5-8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="currentColor" />
              </svg>
            </button>
          </div>

          <div className="qr-plate">
            <div className="qr-pattern"></div>
            <div className="qr-artifact">
              <div className="qr-corner top-left"></div>
              <div className="qr-corner top-right"></div>
              <div className="qr-corner bottom-left"></div>
              <div className="qr-corner bottom-right"></div>
              <div className="qr-grid">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>

          <div className="qr-tag">SMR@NECTEC</div>
        </section>

        <section className="home-actions">
          <button type="button" className="scan-button">เริ่มสแกน</button>
          <p className="scan-help">แตะปุ่มกล้องเพื่อเริ่มสแกน</p>
        </section>
      </main>
    </div>
  )
}

export default App
