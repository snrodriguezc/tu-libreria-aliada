import booksImage from '../books.png';
import React from 'react';

const Login = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'relative'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: `url(${booksImage}) center/cover`,
          filter: 'blur(10px)',
          zIndex: -1,
        }}
      ></div>

      <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'white',
            height: '70vh',
            width: '50vw',
        }}
      >
        <div 
            style={{ 
                width: '50%', 
                height: '100%', 
                backgroundColor: '#aac4bf', 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <img
                src={booksImage}
                alt="Books"
                style={{ width: '60%', height: '50%', objectFit: 'cover' }}
            />
            <h1 style={{color: 'white', fontWeight: 'normal', paddingLeft: '18px', paddingRight: '18px'}}>
                Encuentra hasta el libro que no estabas buscando
            </h1>
        </div>
        <div style={{ width: '50%'}}>
            <div style={{ padding: '10%' }}>
                <h1 style={{ fontSize: '46px', padding: '32px', margin: '0px'}}>
                    Tu Libreria Aliada
                </h1>
                <form style={{ width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: 'auto', textAlign: 'left', marginLeft: '20px', marginRight: '20px', marginBottom: '10px'}}>
                        <label htmlFor="username" style={{fontSize: '14px', color: '#636363'}}>User, name or email</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            style={{ 
                                border: 'none',
                                borderBottom: '1px solid #ccc',
                                fontSize: '16px',
                                padding: '4px',
                                width: '100%',
                            }}
                            placeholder='David Brooks'
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: 'auto', textAlign: 'left', marginLeft: '20px', marginRight: '20px', marginBottom: '10px'}}>
                        <label htmlFor="password" style={{fontSize: '14px', color: '#636363'}}>Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            style={{ 
                                border: 'none',
                                borderBottom: '1px solid #ccc',
                                fontSize: '16px',
                                padding: '4px',
                                width: '100%',
                            }}
                            placeholder='*********'
                        />
                    </div>
                    <div style={{ marginBottom: '24px', textAlign: 'right', fontSize: '12px', marginRight: '20px', color: '#636363' }}>
                        <a>Forgot password?</a>
                    </div>
                    <button type="submit" 
                        style={{ 
                            padding: '10px', 
                            borderRadius: '24px', 
                            border: 'none', 
                            backgroundColor: 'gray', 
                            color: 'white', 
                            width: '50%',
                            fontWeight: 'bold'
                        }}>Sign in</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
