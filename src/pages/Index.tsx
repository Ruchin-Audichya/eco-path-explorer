
import { useState } from 'react';
import WelcomeScreen from '../components/WelcomeScreen';
import SurveyApp from '../components/SurveyApp';
import ResultsScreen from '../components/ResultsScreen';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'survey' | 'results'>('welcome');
  const [userName, setUserName] = useState('');
  const [surveyResults, setSurveyResults] = useState<any>(null);

  const handleStartSurvey = (name: string) => {
    setUserName(name);
    setCurrentScreen('survey');
  };

  const handleSurveyComplete = (results: any) => {
    setSurveyResults(results);
    setCurrentScreen('results');
  };

  const handleRestart = () => {
    setCurrentScreen('welcome');
    setUserName('');
    setSurveyResults(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {currentScreen === 'welcome' && (
        <WelcomeScreen onStart={handleStartSurvey} />
      )}
      
      {currentScreen === 'survey' && (
        <SurveyApp 
          userName={userName} 
          onComplete={handleSurveyComplete} 
        />
      )}
      
      {currentScreen === 'results' && (
        <ResultsScreen 
          userName={userName}
          results={surveyResults}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};

export default Index;
