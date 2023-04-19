import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import './App.css';

function App() {
  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      const accessToken = tokenResponse.access_token;
      const res = await axios.get(`http://localhost/api/auth/google/callback/${ accessToken }`);

      console.log(res);
    },
  });

  return (
    <div className="App">
      <button onClick={ () => login() }>
        <img
          src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png"
          alt="google login"
          width="200"
        />
      </button>
    </div>
  );
}

export default App;
