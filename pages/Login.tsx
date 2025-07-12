
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../components/ui';
import { Button } from '../components/ui';
import { BrainCircuitIcon } from '../components/icons';

interface LoginProps {
  onLogin: () => void;
}

export const LoginPage: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('hr@example.com');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'hr@example.com' && password === 'password') {
      onLogin();
    } else {
      setError('Invalid credentials. Please use the provided details.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/40 dark:bg-dark-background/40">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
              <BrainCircuitIcon className="w-12 h-12 text-primary-btn dark:text-primary-btn-foreground"/>
          </div>
          <CardTitle>Unified Talent Platform</CardTitle>
          <CardDescription>Sign in to access the HR dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="email">Email</label>
              <input 
                id="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring" 
                placeholder="hr@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="password">Password</label>
              <input 
                id="password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
                placeholder="password"
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" className="w-full">
              Login
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Use email: <strong>hr@example.com</strong> and password: <strong>password</strong>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
