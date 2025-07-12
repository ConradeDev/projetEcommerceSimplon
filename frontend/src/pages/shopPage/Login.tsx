import { useState,  } from 'react';
import './style.css';
  // import landingImg from "../assets/monstera.jpg";
// import {loginUser} from "../redux/slices/authSlice.js";
// import { useDispatch } from 'react-redux';

interface PasswordValidation {
  hasCapital: boolean;
  hasLetter: boolean;
  hasNumber: boolean;
  hasSpecialChar: boolean;
  hasMinLength: boolean;
}

const Login= () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValidation, setPasswordValidation] = useState<PasswordValidation>({
    hasCapital: false,
    hasLetter: false,
    hasNumber: false,
    hasSpecialChar: false,
    hasMinLength: false
  });

  const [showPasswordMessage, setShowPasswordMessage] = useState(false);
  const [showEmailMessage, setShowEmailMessage] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  //  const dispatch=useDispatch();

  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  const validatePassword = (value: string) => {
    setPasswordValidation({
      hasCapital: /[A-Z]/.test(value),
      hasLetter: /[a-z]/.test(value),
      hasNumber: /[0-9]/.test(value),
      hasSpecialChar: /[@$!%*?&]/.test(value),
      hasMinLength: value.length >= 8
    });
  };



  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(emailRegex.test(value));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ajoutez ici votre logique de soumission
    console.log("User Register:", {email,password});
    // dispatch(loginUser({email,password}));
    
  };

  return (
    <div className='loginSection '>
      <section className='m-4'>
        <form onSubmit={handleSubmit} className="form">
          <fieldset>
            <h1>LOGIN</h1>
            
            <div className="input-regex">
              <div className="input-box">
                <input 
                  type="email"  
                  name="email"
                  placeholder="adresse Email" 
                  id="email" 
                  value={email}
                  onChange={handleEmailChange}
                  onFocus={() => setShowEmailMessage(true)}
                  onBlur={() => setShowEmailMessage(false)}
                  required 
                />
                <label htmlFor="email">
                  {/* <img src={} alt="Email icon" /> */}
                </label>
              </div>
              {showEmailMessage && (
                <div className="messageEmail">
                  <p className={isEmailValid ? 'valid' : 'invalid'}>Adresse Email {isEmailValid ? 'valid' : 'invalid'}</p>
                </div>
              )}
            </div>
            
            <div className="input-regex">
              <div className="input-box">
                <input 
                  type="password" 
                  name="password" 
                  placeholder="Mot de passe" 
                  id="passWord" 
                  value={password}
                  onChange={handlePasswordChange}
                  onFocus={() => setShowPasswordMessage(true)}
                  onBlur={() => setShowPasswordMessage(false)}
                  required 
                />
                {/* <label htmlFor="passWord">
                  <img src={} alt="Password icon" 
                  />
                </label> */}
              </div>
              
              {showPasswordMessage && (
                <div className="messagePassword">
                  <h3>Mot de passe doit contenir</h3>
                  <p className={passwordValidation.hasCapital ? 'valid' : 'invalid'}>Majuscule</p>
                  <p className={passwordValidation.hasLetter ? 'valid' : 'invalid'}>Une lettre minuscule</p>
                  <p className={passwordValidation.hasNumber ? 'valid' : 'invalid'}>Un chiffre</p>
                  <p className={passwordValidation.hasSpecialChar ? 'valid' : 'invalid'}>Un caractère spécial</p>
                  <p className={passwordValidation.hasMinLength ? 'valid' : 'invalid'}>Au moins 8 caractères</p>
                </div>
              )}
            </div>
            
            <div className="remenber_forget">
              <label>
                <input type="checkbox" />
                Se souvenir de moi
              </label>
              <a href="#">Mot de passe oublié</a>
            </div>
            
            <button 
              className="login-btn" 
              type="submit"
              disabled={!isEmailValid || !Object.values(passwordValidation).every(Boolean)}
            >
              Se Connecter
            </button>
            
            <div className="register-link">
              <p>Déjà un compte? <a href="register">S'Inscrire</a></p>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default Login;