
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface WelcomeScreenProps {
  onStart: (name: string) => void;
}

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onStart(name.trim());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-sm shadow-xl border-0 animate-fade-in">
        <CardHeader className="text-center pb-2">
          <div className="text-6xl mb-4 animate-pulse">🌍</div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            EcoLife Survey
          </CardTitle>
          <p className="text-gray-600 mt-2">
            Discover your carbon footprint and get personalized eco-tips!
          </p>
        </CardHeader>
        
        <CardContent className="pt-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What's your name? 👋
              </label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full border-2 border-green-200 focus:border-green-400 rounded-lg px-4 py-3 text-lg"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
              disabled={!name.trim()}
            >
              Start Your Eco Journey 🚀
            </Button>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>📊 20 questions • 🕐 5 minutes • 🌱 Actionable insights</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomeScreen;
