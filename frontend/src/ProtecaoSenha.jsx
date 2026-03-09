import React, { useState, useEffect } from 'react';

const SENHA = 'marmitaxai';

export default function ProtecaoSenha({ children }) {
  const [liberado, setLiberado] = useState(false);
  const [digitado, setDigitado] = useState('');
  const [erro, setErro] = useState(false);

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
    <div style={{ fontFamily:'Inter, sans-serif', background:'#f5f5f5', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'20px' }}>
      <div style={{ width:'100%', maxWidth:'420px', textAlign:'center' }}>

        <div style={{ marginBottom:'32px' }}>
          <div style={{ width:'64px', height:'64px', background:'#EA1D2C', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px' }}>
            <span style={{ fontSize:'28px' }}>🍱</span>
          </div>
          <h1 style={{ fontSize:'1.6rem', fontWeight:'800', color:'#3E3E3E', margin:'0 0 4px' }}>Marmitaria da Xai</h1>
          <p style={{ fontSize:'.85rem', color:'#999', margin:0 }}>Versão de demonstração</p>
        </div>

        <div style={{ background:'#fff', borderRadius:'16px', padding:'32px', boxShadow:'0 4px 20px rgba(0,0,0,.08)' }}>
          <h2 style={{ color:'#3E3E3E', fontSize:'1.1rem', fontWeight:'700', marginBottom:'8px' }}>Acesso Restrito</h2>
          <p style={{ color:'#999', fontSize:'.85rem', marginBottom:'24px' }}>Digite a senha para visualizar o site.</p>

          {erro && (
            <div style={{ background:'#FEE2E2', border:'1px solid #FECACA', borderRadius:'8px', padding:'10px 14px', color:'#DC2626', fontSize:'.82rem', marginBottom:'14px' }}>
              Senha incorreta. Tente novamente.
            </div>
          )}

          <input
            type="password"
            value={digitado}
            onChange={e => setDigitado(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && entrar()}
            placeholder="Digite a senha..."
            autoFocus
            style={{ width:'100%', padding:'14px 16px', background:'#F5F5F5', border:'2px solid #E8E8E8', borderRadius:'12px', color:'#3E3E3E', fontSize:'1rem', outline:'none', marginBottom:'14px', fontFamily:'Inter, sans-serif', boxSizing:'border-box' }}
          />

          <button
            onClick={entrar}
            style={{ width:'100%', background:'#EA1D2C', color:'#fff', border:'none', cursor:'pointer', padding:'15px', borderRadius:'50px', fontSize:'1rem', fontWeight:'800', fontFamily:'Inter, sans-serif' }}
          >
            Acessar o Site
          </button>
        </div>

        <p style={{ marginTop:'20px', fontSize:'.75rem', color:'#bbb' }}>
          Marmitaria da Xai © 2024 — Acesso exclusivo para aprovação
        </p>
      </div>
    </div>
  );
}
