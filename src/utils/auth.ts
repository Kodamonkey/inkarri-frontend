interface UserCredentials {
    name: string;
    email: string;
    password: string;
  }
  
  export async function registerUser(credentials: UserCredentials): Promise<boolean> {
      const { name, email, password } = credentials;
      
      // Simular autenticación
      console.log('Logging in with:', name, email, password);
      
      if (email === 'test@test.com' && password === 'test') {
          localStorage.setItem('authToken', 'fake-jwt-token');
          console.log('Login successful');
          return true;
      }
      return false;
  }
  
  export function logout(): void {
      localStorage.removeItem('authToken');
      window.location.href = "/login";
  }
  
  export function isAuthenticated(): boolean {
      return localStorage.getItem('authToken') !== null;
  }
  
  export function isValidEmail(email: string): boolean {
      // Aquí debes revisar si el email es válido o si hay alguna lógica más compleja
      if (email === 'test@test.com') {
          return true;
      }
      return false;
  }
  
  export function isRegistered(email: string): boolean {
      // Aquí debes añadir la lógica para verificar si el correo está registrado
      if (!email) { return false }
      return true; // Solo para pruebas
  }
  