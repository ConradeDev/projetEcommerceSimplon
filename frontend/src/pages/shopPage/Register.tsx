import { useState,  } from 'react';
import './style.css';
import landingImg from "../../assets/monstera.jpg";

interface PasswordValidation {
  hasCapital: boolean;
  hasLetter: boolean;
  hasNumber: boolean;
  hasSpecialChar: boolean;
  hasMinLength: boolean;
}
import { usePopup } from '../../components/Common/Popup';

// import { Toaster, toast } from 'sonner';

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setlastName] = useState('')
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

   const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setlastName(value);
  };
   const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFirstName(value);
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



  const { showPopup, PopupComponent } = usePopup();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

     // Ajoutez ici votre logique de soumission
    console.log("User Register:", {lastName,firstName,email,password});

    // Validation email
    if (!isEmailValid) {
      showPopup("L'adresse email n'est pas valide", 'error');
      return;
    }

    // Validation mot de passe
    if (!Object.values(passwordValidation).every(Boolean)) {
      showPopup("Le mot de passe doit contenir :\n- 1 majuscule\n- 1 minuscule\n- 1 chiffre\n- 1 caractère spécial\n- 8 caractères minimum", 'error');
      return;
    }

    try {
      // Simulation d'enregistrement
      // Remplacez par votre appel API réel
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      showPopup("Inscription réussie ! Redirection...", 'success');
      
      // Réinitialisation du formulaire après succès
      setFirstName('');
      setlastName('');
      setEmail('');
      setPassword('');
      
    } catch (error) {
        console.error(error);
        
      showPopup("Erreur lors de l'inscription");
    }
      };
  
  return (
    <div className='loginSection'>
      <section className='m-4'>
        <form onSubmit={handleSubmit} className="form">
          <fieldset>
            <h1>INSCRIPTION</h1>
            
            <div className="input-box">
              <input 
                type="text" 
                value={lastName}
                onChange={handleLastName}
                placeholder="Nom utilisateur"  
                id="user" 
                required 
              />
              <label htmlFor="user">
                <img src={landingImg} alt="User icon"/>
              </label>
            </div>
            
            <div className="input-box">
              <input 
                type="text" 
                value={firstName}
                onChange={handleFirstName} 
                placeholder="Prénoms Utilisateur"  
                required 
              />
            </div>
            
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
                  <img src={landingImg} alt="Email icon" />
                </label>
              </div>
              {showEmailMessage && (
                <div className="messageEmail">
                  <p className={isEmailValid ? 'valid' : 'invalid'}>Adresse Email</p>
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
                <label htmlFor="passWord">
                  <img src={landingImg} alt="Password icon" />
                </label>
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
              // onClick={() => toast('My first toast')}
            >
       
              S'Inscrire
            </button>
            
            <div className="register-link">
              <p>Déjà un compte? <a href="login">Se Connecter</a></p>
            </div>
          </fieldset>
        </form>
      </section>
       {/* Ajoutez le composant Popup */}
      <PopupComponent />
    </div>
  );
};

export default Register;