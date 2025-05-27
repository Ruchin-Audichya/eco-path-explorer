
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ResultsScreenProps {
  userName: string;
  results: {
    totalScore: number;
    categoryScores: Record<string, number>;
    answers: Record<string, number>;
  };
  onRestart: () => void;
}

const ResultsScreen = ({ userName, results, onRestart }: ResultsScreenProps) => {
  const { totalScore, categoryScores } = results;
  
  // Calculate badge and emissions
  const getBadge = (score: number) => {
    if (score >= 85) return { emoji: '🏆', title: 'Eco Hero', color: 'text-yellow-600', bg: 'bg-yellow-50' };
    if (score >= 65) return { emoji: '🌿', title: 'On the Path', color: 'text-green-600', bg: 'bg-green-50' };
    if (score >= 45) return { emoji: '🚶', title: 'Just Starting', color: 'text-blue-600', bg: 'bg-blue-50' };
    return { emoji: '⚠️', title: 'Time to Act', color: 'text-red-600', bg: 'bg-red-50' };
  };

  const badge = getBadge(totalScore);
  
  // Calculate CO2 emissions (12,000 kg worst to 4,000 kg best)
  const co2Emissions = Math.round(12000 - ((totalScore - 20) / 80) * 8000);
  
  // Calculate equivalences
  const flights = Math.round(co2Emissions / 250);
  const carComparison = (co2Emissions / 4000).toFixed(1);
  const treesNeeded = Math.round(co2Emissions / 22);

  // Prepare chart data
  const chartData = Object.entries(categoryScores).map(([category, score]) => ({
    category: category.replace(/([A-Z])/g, ' $1').trim(),
    score: score,
    emissions: Math.round((20 - score) * 400) // Rough emission per category
  }));

  const tips = {
    transport: "🚲 Try cycling or walking for short trips, use public transport, or consider an electric vehicle.",
    food: "🌱 Reduce meat consumption, buy local and seasonal produce, minimize food waste.",
    energy: "💡 Switch to LED bulbs, unplug devices when not in use, use renewable energy if possible.",
    waste: "♻️ Follow the 3 R's: Reduce, Reuse, Recycle. Compost organic waste and avoid single-use items.",
    lifestyle: "🛍️ Buy only what you need, choose quality over quantity, support sustainable brands."
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header with Badge */}
        <Card className={`${badge.bg} border-2 animate-fade-in`}>
          <CardContent className="text-center py-8">
            <div className="text-8xl mb-4 animate-pulse">{badge.emoji}</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Congratulations {userName}!
            </h1>
            <h2 className={`text-3xl font-bold ${badge.color} mb-4`}>
              You're an {badge.title}!
            </h2>
            <div className="text-2xl font-semibold text-gray-700">
              Your Eco Score: {totalScore}/100
            </div>
            <Progress value={totalScore} className="w-full max-w-md mx-auto mt-4 h-4" />
          </CardContent>
        </Card>

        {/* CO2 Emissions */}
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🌍 Your Annual Carbon Footprint
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">
                {co2Emissions.toLocaleString()} kg CO₂/year
              </div>
              <p className="text-gray-600">
                Global average: ~5,000 kg • Your impact compared to average: 
                <span className={co2Emissions > 5000 ? 'text-red-600 font-semibold' : 'text-green-600 font-semibold'}>
                  {co2Emissions > 5000 ? '+' : ''}{((co2Emissions - 5000) / 5000 * 100).toFixed(0)}%
                </span>
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl">✈️</div>
                <div className="font-semibold">{flights} flights</div>
                <div className="text-sm text-gray-600">Round-trip domestic</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl">🚗</div>
                <div className="font-semibold">{carComparison}x</div>
                <div className="text-sm text-gray-600">Average car emissions</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl">🌳</div>
                <div className="font-semibold">{treesNeeded} trees</div>
                <div className="text-sm text-gray-600">Needed to offset</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Category Breakdown Chart */}
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>📊 Category Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="score" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Personalized Tips */}
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>🎯 Your Personalized Eco Tips</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(tips).map(([category, tip]) => (
              <div key={category} className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold capitalize mb-2">{category}</h4>
                <p className="text-gray-700">{tip}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={onRestart}
            variant="outline"
            className="px-8 py-3"
          >
            Take Survey Again 🔄
          </Button>
          <Button 
            onClick={() => {
              const text = `I just completed the EcoLife Survey! My eco score is ${totalScore}/100 and I'm an ${badge.title}! 🌍 Check your carbon footprint too!`;
              if (navigator.share) {
                navigator.share({ text });
              } else {
                navigator.clipboard.writeText(text);
                alert('Results copied to clipboard!');
              }
            }}
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3"
          >
            Share Results 📱
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;
