import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from "@react-oauth/google"
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
        <AppRouter />
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default App;