
import { useState, useEffect, useCallback } from "react";
import useTypingGame from "react-typing-game-hook";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Redo, Play, Pause, Timer } from "lucide-react";
import { Link } from "react-router-dom";

const quotes = [
  "The quick brown fox jumps over the lazy dog.",
  "Life is what happens when you're busy making other plans.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Programming isn't about what you know; it's about what you can figure out.",
  "The best way to predict the future is to invent it.",
  "The only way to do great work is to love what you do.",
  "Code is like humor. When you have to explain it, it's bad.",
  "First, solve the problem. Then, write the code.",
  "It's not a bug; it's an undocumented feature.",
  "Talk is cheap. Show me the code."
];

const TypingTest = () => {
  const [quote, setQuote] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  const {
    states: {
      charsState,
      currIndex,
      phase,
      correctChar,
      errorChar,
    },
    actions: { insertTyping, resetTyping, deleteTyping, endTyping }
  } = useTypingGame(quote, {
    skipCurrentWordOnSpace: false,
    pauseOnError: false,
    countErrors: "everytime"
  });

  // Get a random quote when component mounts or when reset is clicked
  const getNewQuote = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
    resetTyping();
    setWpm(0);
    setAccuracy(100);
  }, [resetTyping]);

  // Initialize with a random quote
  useEffect(() => {
    getNewQuote();
  }, [getNewQuote]);

  // Start timer when typing begins
  useEffect(() => {
    if (phase === 1 && startTime === 0) {
      setStartTime(Date.now());
      // Count words and characters
      const words = quote.trim().split(/\s+/);
      setWordCount(words.length);
      setCharCount(quote.length);
    }

    // Calculate WPM and accuracy when done typing
    if (phase === 2) {
      const endTime = Date.now();
      const timeInMinutes = (endTime - startTime) / 60000;
      const calculatedWpm = Math.round(wordCount / timeInMinutes);
      
      // Calculate accuracy
      const totalChars = correctChar + errorChar;
      const calculatedAccuracy = totalChars > 0 
        ? Math.round((correctChar / totalChars) * 100) 
        : 100;
      
      setWpm(calculatedWpm);
      setAccuracy(calculatedAccuracy);
    }
  }, [phase, startTime, correctChar, errorChar, wordCount, quote]);

  // Handle key presses
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (phase === 2) return;
    
    const key = e.key;
    if (key === "Escape") {
      // Since pauseTyping is not available, we'll use endTyping instead
      endTyping();
    } else if (key === "Backspace") {
      deleteTyping();
    } else if (key.length === 1) {
      insertTyping(key);
    }
  }, [phase, deleteTyping, insertTyping, endTyping]);

  return (
    <div className="min-h-screen bg-white dark:bg-tech-darkBlue dark:text-gray-100 flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-1 flex flex-col">
        <div className="flex items-center mb-6">
          <Link to="/">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gradient">Typing Speed Test</h1>
        </div>

        {/* Instructions */}
        <div className="mb-8 text-center">
          <p className="text-lg mb-2">Type the text below to test your typing speed and accuracy</p>
          <p className="text-muted-foreground">Press ESC to pause, or Space to continue to the next word</p>
        </div>

        {/* Stats Display */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-100 dark:bg-tech-blue p-4 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">Speed</p>
            <p className="text-2xl font-bold">{wpm} WPM</p>
          </div>
          <div className="bg-gray-100 dark:bg-tech-blue p-4 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">Accuracy</p>
            <p className="text-2xl font-bold">{accuracy}%</p>
          </div>
          <div className="bg-gray-100 dark:bg-tech-blue p-4 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">Characters</p>
            <p className="text-2xl font-bold">{currIndex}/{charCount}</p>
          </div>
        </div>

        {/* Typing Area */}
        <div 
          className="bg-gray-100 dark:bg-tech-blue p-6 rounded-lg mb-6 flex-1 flex flex-col"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <div className="mb-6 text-xl leading-relaxed">
            {quote.split("").map((char, index) => {
              let color;
              if (index === currIndex) {
                color = "border-b-2 border-primary animate-pulse";
              } else if (charsState[index] === 0) {
                color = "";
              } else if (charsState[index] === 1) {
                color = "text-green-500 dark:text-green-400";
              } else {
                color = "text-red-500 dark:text-red-400 bg-red-100 dark:bg-red-900/20";
              }
              return (
                <span key={index} className={color}>
                  {char}
                </span>
              );
            })}
          </div>

          <div className="mt-auto">
            <p className="text-center text-sm text-muted-foreground mb-2">
              {phase === 0 && "Click here and start typing"}
              {phase === 1 && "Typing..."}
              {phase === 2 && "Completed! Try again?"}
            </p>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex justify-center gap-4">
          <Button onClick={getNewQuote} className="flex items-center gap-2">
            <Redo className="h-4 w-4" />
            New Quote
          </Button>
          {phase === 0 && (
            <Button onClick={() => phase === 0 && insertTyping(quote[0])} className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              Start
            </Button>
          )}
          {phase === 1 && (
            <Button onClick={endTyping} className="flex items-center gap-2">
              <Pause className="h-4 w-4" />
              Pause
            </Button>
          )}
          {phase === 1 || phase === 0 ? (
            <Button onClick={endTyping} variant="outline" className="flex items-center gap-2">
              <Timer className="h-4 w-4" />
              End Test
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TypingTest;
