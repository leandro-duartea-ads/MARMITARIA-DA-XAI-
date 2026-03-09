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
    <div style={{ fontFamily:'sans-serif', background:'#1E0F05', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'20px' }}>
      <div style={{ width:'100%', maxWidth:'400px', textAlign:'center' }}>
        <div style={{ marginBottom:'32px' }}>
          <h1 style={{ fontSize:'1.8rem', fontWeight:'700', color:'#F5A623' }}>Marmitaria da Xai</h1>
          <p style={{ fontSize:'.82rem', color:'rgba(255,255,255,.4)', marginTop:'6px' }}>Versão de demonstração</p>
        </div>
        <div style={{ background:'#2B1A0A', border:'1px solid rgba(245,166,35,.18)', borderRadius:'22px', padding:'36px 30px' }}>
          <h2 style={{ color:'#fff', fontSize:'1.25rem', marginBottom:'8px' }}>Acesso Restrito</h2>
          <p style={{ color:'rgba(255,255,255,.45)', fontSize:'.84rem', marginBottom:'24px' }}>Digite a senha para visualizar.</p>
          {erro && <div style={{ background:'rgba(239,68,68,.12)', border:'1px solid rgba(239,68,68,.35)', borderRadius:'10px', padding:'11px 14px', color:'#FCA5A5', fontSize:'.82rem', marginBottom:'14px' }}>Senha incorreta. Tente novamente.</div>}
          <input
            type={verSenha ? 'text' : 'password'}
            value={digitado}
            onChange={e => setDigitado(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && entrar()}
            placeholder="Digite a senha..."
            autoFocus
            style={{ width:'100%', padding:'14px 18px', background:'#1E0F05', border:'1.5px solid rgba(245,166,35,.2)', borderRadius:'12px', color:'#fff', fontSize:'.98rem', outline:'none', marginBottom:'14px', fontFamily:'sans-serif' }}
          />
          <button onClick={entrar} style={{ width:'100%', background:'#F5A623', color:'#1E0F05', border:'none', cursor:'pointer', padding:'15px', borderRadius:'50px', fontSize:'1rem', fontWeight:'800', fontFamily:'sans-serif' }}>
            Acessar o Site
          </button>
        </div>
      </div>
    </div>
  );
}
