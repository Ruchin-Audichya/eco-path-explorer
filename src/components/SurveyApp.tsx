
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { surveyData } from '../data/surveyData';

interface SurveyAppProps {
  userName: string;
  onComplete: (results: any) => void;
}

const SurveyApp = ({ userName, onComplete }: SurveyAppProps) => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [currentCategory, setCurrentCategory] = useState(0);
  const [completedCategories, setCompletedCategories] = useState<Set<number>>(new Set());

  const categories = Object.keys(surveyData);
  const currentCategoryKey = categories[currentCategory];
  const currentQuestions = surveyData[currentCategoryKey];

  const progress = (Object.keys(answers).length / 20) * 100;

  const handleAnswerSelect = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const isCategoryComplete = (categoryIndex: number) => {
    const categoryKey = categories[categoryIndex];
    const categoryQuestions = surveyData[categoryKey];
    return categoryQuestions.every(q => answers[q.id] !== undefined);
  };

  useEffect(() => {
    const newCompleted = new Set<number>();
    categories.forEach((_, index) => {
      if (isCategoryComplete(index)) {
        newCompleted.add(index);
      }
    });
    setCompletedCategories(newCompleted);
  }, [answers]);

  const handleNext = () => {
    if (currentCategory < categories.length - 1) {
      setCurrentCategory(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentCategory > 0) {
      setCurrentCategory(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length === 20) {
      const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
      const categoryScores: Record<string, number> = {};
      
      categories.forEach(categoryKey => {
        const categoryQuestions = surveyData[categoryKey];
        const categoryTotal = categoryQuestions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
        categoryScores[categoryKey] = categoryTotal;
      });

      onComplete({
        totalScore,
        categoryScores,
        answers
      });
    }
  };

  const allQuestionsAnswered = Object.keys(answers).length === 20;

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome {userName}! 🌿
          </h1>
          <p className="text-gray-600">Let's discover your eco-footprint</p>
          <div className="mt-4">
            <Progress value={progress} className="w-full h-3" />
            <p className="text-sm text-gray-500 mt-2">
              {Object.keys(answers).length}/20 questions completed
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs value={currentCategory.toString()} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            {categories.map((category, index) => (
              <TabsTrigger 
                key={category}
                value={index.toString()}
                onClick={() => setCurrentCategory(index)}
                className={`relative ${completedCategories.has(index) ? 'bg-green-100 text-green-700' : ''}`}
              >
                {surveyData[category][0].icon} {category}
                {completedCategories.has(index) && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full text-white text-xs flex items-center justify-center">
                    ✓
                  </span>
                )}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={currentCategory.toString()}>
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  {currentQuestions[0].icon} {currentCategoryKey}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {currentQuestions.map((question) => (
                  <div key={question.id} className="space-y-3">
                    <h3 className="font-semibold text-lg text-gray-800">
                      {question.text}
                    </h3>
                    <div className="grid gap-2">
                      {question.options.map((option, index) => (
                        <Button
                          key={index}
                          variant={answers[question.id] === option.score ? "default" : "outline"}
                          className={`justify-start text-left h-auto p-4 transition-all duration-200 ${
                            answers[question.id] === option.score 
                              ? 'bg-green-500 text-white' 
                              : 'hover:bg-green-50 hover:border-green-300'
                          }`}
                          onClick={() => handleAnswerSelect(question.id, option.score)}
                        >
                          <span className="mr-2 text-lg">{option.emoji}</span>
                          {option.text}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-6">
          <Button 
            variant="outline" 
            onClick={handlePrev}
            disabled={currentCategory === 0}
            className="px-6"
          >
            ← Previous
          </Button>
          
          <div className="flex gap-2">
            {allQuestionsAnswered ? (
              <Button 
                onClick={handleSubmit}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-2 font-semibold"
              >
                See My Results 🎉
              </Button>
            ) : currentCategory < categories.length - 1 ? (
              <Button 
                onClick={handleNext}
                disabled={!isCategoryComplete(currentCategory)}
                className="px-6"
              >
                Next →
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyApp;
