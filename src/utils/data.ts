interface Question {
  question: string;
  answer: string;
}

interface Item {
  id: number;
  name: string;
  questions: Question[];
}

const generateRandomQuestion = (): Question => {
  const questions = [
    { question: 'What is your name?', answer: 'My name is John.' },
    { question: 'How old are you?', answer: 'I am 25 years old.' },
    { question: 'Where do you live?', answer: 'I live in New York.' },
    { question: 'What do you do?', answer: 'I am a software developer.' },
    { question: 'What is your favorite color?', answer: 'My favorite color is blue.' },
  ];
  return questions[Math.floor(Math.random() * questions.length)];
};

const generateItems = (count: number): Item[] => {
  const items: Item[] = [];
  for (let i = 0; i < count; i++) {
    const questions: Question[] = [];
    const numberOfQuestions = Math.floor(Math.random() * 5) + 1; // Random number of questions between 1 and 5
    for (let j = 0; j < numberOfQuestions; j++) {
      questions.push(generateRandomQuestion());
    }
    items.push({
      id: i + 1,
      name: `Item ${i + 1}`,
      questions: questions,
    });
  }
  return items;
};

export const data = generateItems(80);
