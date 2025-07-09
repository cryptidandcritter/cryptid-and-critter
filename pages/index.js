import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cryptid & Critter</title>
        <meta name="description" content="Where legends walk the land and science listens." />
      </Head>
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Georgia, serif',
        backgroundColor: '#0b0f0f',
        color: '#e0e0e0',
        textAlign: 'center',
        padding: '2rem',
      }}>
        {/* Logo */}
        <img 
          src="/logo.png" 
          alt="Cryptid & Critter Logo" 
          style={{ 
            width: '200px', 
            marginBottom: '1rem',
            borderRadius: '12px',
            boxShadow: '0 0 20px rgba(0,255,255,0.2)'
          }} 
        />

        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Cryptid & Critter</h1>
        <p style={{ fontSize: '1.5rem', fontStyle: 'italic', color: '#8ff' }}>
          Where legends walk the land and science listens.
        </p>
        <p style={{ maxWidth: '600px', marginTop: '1.5rem' }}>
          Tracking the unknown, studying the rare, and preserving mystery with technology, passion, and care.
        </p>
      </main>
    </>
  );
}
