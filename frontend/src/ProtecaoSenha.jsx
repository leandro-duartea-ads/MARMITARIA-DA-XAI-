import React, { useState, useEffect } from 'react';

const SENHA = 'marmitaxai';

export default function ProtecaoSenha({ children }) {
  const [liberado, setLiberado] = useState(false);
  const [digitado, setDigitado] = useState('');
  const [erro, setErro] = useState(false);
  const [verSenha, setVerSenha] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('xai_ok') === '1') setLiberado(true);
  }, []);

  function entrar() {
    if (digitado === SENHA) {
      sessionStorage.setItem('xai_ok', '1');
      setLiberado(true);
    } else {
      setErro(true);
      setDigitado('');
      setTimeout(() => setErro(false), 3000);
    }
  }

  if (liberado) return children;

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      background: 'linear-gradient(135deg, #fff5f5 0%, #fff 50%, #fff5f5 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{ width: '100%', maxWidth: '420px', textAlign: 'center' }}>

        {/* LOGO */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{
            width: '80px', height: '80px',
            background: 'linear-gradient(135deg, #EA1D2C, #c4111f)',
            borderRadius: '24px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 16px',
            boxShadow: '0 8px 24px rgba(234,29,44,.35)',
            transform: 'rotate(-3deg)'
          }}>
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
              <line x1="6" y1="17" x2="18" y2="17"/>
              <line x1="6" y1="21" x2="18" y2="21"/>
            </svg>
          </div>
          <h1 style={{
            fontSize: '1.5rem', fontWeight: '800',
            color: '#3E3E3E', margin: '0 0 6px',
            letterSpacing: '-0.5px'
          }}>
            Marmitaria da <span style={{ color: '#EA1D2C' }}>Xai</span>
          </h1>
          <span style={{
            display: 'inline-block',
            background: '#FEE2E2',
            color: '#EA1D2C',
            fontSize: '.72rem',
            fontWeight: '700',
            padding: '4px 12px',
            borderRadius: '50px',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}>
            🔒 Versão de demonstração
          </span>
        </div>

        {/* CARD */}
        <div style={{
          background: '#fff',
          borderRadius: '20px',
          padding: '36px 32px',
          boxShadow: '0 8px 40px rgba(0,0,0,.10)',
          border: '1px solid #f0f0f0'
        }}>
          <h2 style={{ color: '#3E3E3E', fontSize: '1.15rem', fontWeight: '700', marginBottom: '6px' }}>
            Acesso Exclusivo
          </h2>
          <p style={{ color: '#999', fontSize: '.85rem', marginBottom: '24px', lineHeight: '1.5' }}>
            Este site está em fase de aprovação.<br/>Digite a senha para visualizar.
          </p>

          {erro && (
            <div style={{
              background: '#FEE2E2', border: '1px solid #FECACA',
              borderRadius: '10px', padding: '12px 14px',
              color: '#DC2626', fontSize: '.82rem', fontWeight: '600',
              marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px'
            }}>
              <span>⚠️</span> Senha incorreta. Tente novamente.
            </div>
          )}

          {/* INPUT */}
          <div style={{ position: 'relative', marginBottom: '14px' }}>
            <input
              type={verSenha ? 'text' : 'password'}
              value={digitado}
              onChange={e => setDigitado(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && entrar()}
              placeholder="Digite a senha de acesso..."
              autoFocus
              style={{
                width: '100%', padding: '14px 48px 14px 16px',
                background: '#F7F7F7', border: '2px solid #EFEFEF',
                borderRadius: '12px', color: '#3E3E3E',
                fontSize: '.95rem', outline: 'none',
                fontFamily: 'Inter, sans-serif', boxSizing: 'border-box',
                transition: 'border-color .2s'
              }}
              onFocus={e => e.target.style.borderColor = '#EA1D2C'}
              onBlur={e => e.target.style.borderColor = '#EFEFEF'}
            />
            <button
              onClick={() => setVerSenha(!verSenha)}
              style={{
                position: 'absolute', right: '14px', top: '50%',
                transform: 'translateY(-50%)',
                background: 'none', border: 'none', cursor: 'pointer',
                color: '#999', fontSize: '16px', padding: '4px'
              }}
            >
              {verSenha ? '🙈' : '👁️'}
            </button>
          </div>

          {/* BOTÃO */}
          <button
            onClick={entrar}
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #EA1D2C, #c4111f)',
              color: '#fff', border: 'none', cursor: 'pointer',
              padding: '16px', borderRadius: '50px',
              fontSize: '1rem', fontWeight: '800',
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 6px 20px rgba(234,29,44,.35)',
              letterSpacing: '.3px'
            }}
          >
            🍱 Acessar o Site
          </button>

          {/* DICA */}
          <p style={{ marginTop: '16px', fontSize: '.78rem', color: '#bbb' }}>
            Precisa da senha? Entre em contato com o responsável.
          </p>
        </div>

        <p style={{ marginTop: '20px', fontSize: '.72rem', color: '#ccc' }}>
          Marmitaria da Xai © 2024 — Acesso exclusivo para aprovação
        </p>
      </div>
    </div>
  );
}
