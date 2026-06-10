// src/Pages/Home.jsx
import React from 'react';

// CORREÇÃO: Adicionei "../" para voltar uma pasta para trás (saindo de Pages e indo para src)
import logoIn from '../assets/in.svg';

export default function Home() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <img src={logoIn} alt="IN Logo" height="70" />
          <div className="logo-sub">Discover Local<br />Experiences</div>
        </div>
        <nav className="main-nav">
          <a href="#" className="nav-link active">Início</a>
          <a href="#" className="nav-link">Para Turistas</a>
          <a href="#" className="nav-link">Para Empreendedores</a>
          <a href="#" className="nav-link">Como Funciona</a>
        </nav>
        <div className="header-actions">
          <button className="btn btn-outline">Entrar</button>
          <button className="btn btn-primary">Quero me cadastrar</button>
        </div>
      </header>

      <main className="hero">
        <div className="hero-left">
          <h1 className="headline">
            Conectamos<br />pessoas às melhores<br />experiências locais.
          </h1>
          <p className="subtitle">
            A IN é a plataforma que valoriza o que é nosso.<br />
            Descubra, divulgue e viva o melhor da sua região.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary btn-large">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              Sou Empreendedor
            </button>
            <button className="btn btn-secondary btn-large">
              Conhecer a Plataforma
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#003B52" />
                <path d="M15.5 12L9.5 15.5V8.5L15.5 12Z" fill="white" />
              </svg>
            </button>
          </div>
          <div className="region-section">
            <span className="region-title">Já estamos em:</span>
            <div className="region-badges">
              <div className="badge">
                <div className="badge-logo">IN<span>SE</span></div>
                <span className="badge-text">Sergipe</span>
              </div>
              <div className="badge badge-subtle">
                <span className="badge-text">e em breve muito mais!</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="brand-stroke">
            <svg viewBox="0 0 1000 680" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g transform="rotate(12, 550, 340)"></g>
              <path d="M 180,220 C 320,500 820,110 920,100 C 1060,90 1020,230 1030,480 C 940,800 1000,590 280,530 C 80,410 20,260 280,220 Z" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="floating-image top-left">
            <img src="/concert.png" alt="Concert" />
          </div>
          <div className="floating-image bottom-left">
            <img src="/food.png" alt="Food" />
          </div>
          <div className="floating-image right-edge">
            <img src="/city.png" alt="City" />
          </div>

          <div className="phone">
            <div className="notch"></div>
            <div className="phone-screen">
              <div className="status-bar">
                <span className="time">9:41</span>
                <div className="status-icons">
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9.5C0.5 9.5 0 9 0 8.5V3.5C0 3 0.5 2.5 1 2.5H12C12.5 2.5 13 3 13 3.5V8.5C13 9 12.5 9.5 12 9.5H1ZM14 4.5V7.5C14.5 7.5 15 7 15 6.5V5.5C15 5 14.5 4.5 14 4.5Z" />
                  </svg>
                </div>
              </div>
              <div className="phone-header">
                <div className="greeting">
                  <h2>Olá, Douglas 👋</h2>
                  <p>O que você vai descobrir hoje?</p>
                </div>
                <div className="avatar">
                  <img src="https://ui-avatars.com/api/?name=Douglas&background=003B52&color=fff" alt="Avatar" />
                </div>
              </div>
              <div className="search-bar">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="11" r="8" stroke="#A0AEC0" strokeWidth="2" />
                  <path d="M16.5 16.5L22 22" stroke="#A0AEC0" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>Buscar experiências, lugares...</span>
              </div>

              <div className="phone-section">
                <div className="section-header">
                  <h3>Destaques</h3>
                  <a href="#">Ver todos</a>
                </div>
                <div className="promo-banner">
                  <img src="/beer.png" alt="Happy Hour" />
                  <div className="promo-overlay">
                    <div className="promo-content">
                      <h4>Happy Hour</h4>
                      <p>até <span>50% OFF</span></p>
                      <small>em drinks selecionados</small>
                      <div className="promo-location">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        Aracaju - SE
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="phone-section">
                <h3>Categorias</h3>
                <div className="categories">
                  <div className="category">
                    <div className="cat-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V6z" />
                      </svg>
                    </div>
                    <span>Eventos</span>
                  </div>
                  <div className="category">
                    <div className="cat-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#003B52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                        <path d="M7 2v20" />
                        <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                      </svg>
                    </div>
                    <span>Gastronomia</span>
                  </div>
                  <div className="category">
                    <div className="cat-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#003B52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 22h8" />
                        <path d="M12 15v7" />
                        <path d="M5 3h14l-2 12H7L5 3z" />
                      </svg>
                    </div>
                    <span>Happy Hour</span>
                  </div>
                  <div className="category">
                    <div className="cat-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#003B52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 20h20" />
                        <path d="M4 20V8" />
                        <path d="M20 20V8" />
                        <path d="M12 2L2 8h20L12 2z" />
                        <path d="M8 20v-5a4 4 0 0 1 8 0v5" />
                      </svg>
                    </div>
                    <span>Passeios</span>
                  </div>
                  <div className="category">
                    <div className="cat-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#003B52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12a10 10 0 0 0-20 0Z" />
                        <path d="M12 12v8" />
                        <path d="M8 20h8" />
                      </svg>
                    </div>
                    <span>Praias</span>
                  </div>
                </div>
              </div>

              <div className="phone-section">
                <div className="section-header">
                  <h3>Em alta agora</h3>
                  <a href="#">Ver todos</a>
                </div>
                <div className="trending-list">
                  <div className="trending-card">
                    <img src="/city.png" alt="Caranguejo" />
                    <div className="trend-overlay">
                      <h5>Caranguejo do Assis</h5>
                      <p>📍 5 min • $$</p>
                    </div>
                  </div>
                  <div className="trending-card">
                    <img src="/concert.png" alt="Sunset" />
                    <div className="trend-overlay">
                      <h5>Sunset Music Bar</h5>
                      <p>📍 12 min • $$</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
