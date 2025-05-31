export interface LearningModule {
  id: number;
  title: string;
  description: string;
  level: number;
  unlocked: boolean;
  completed: boolean;
  progress: number;
  coins: number;
  path: string;
  lessons: number;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  topics: string[];
  image: string;
  character: string;
  characterName: string;
  color: string;
}

export interface UserStats {
  level: number;
  coins: number;
  progress: number;
}

export interface SparkleProps {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
  size: number;
}