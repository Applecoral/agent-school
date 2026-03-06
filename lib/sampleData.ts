export type Resource = {
  id: string;
  title: string;
  description: string;
  url: string;
  topics: string[];
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All';
  verified: boolean;
  score: number;
};

export const sampleData: Resource[] = [
  {
    id: 'foundations-aima',
    title: 'Artificial Intelligence: A Modern Approach (AIMA) — Book & Website',
    description: 'Comprehensive textbook covering core AI topics (search, planning, learning, reasoning, and agents).',
    url: 'https://aima.cs.berkeley.edu/',
    topics: ['Foundations', 'search', 'planning', 'learning', 'agents'],
    level: 'All',
    verified: true,
    score: 95,
  },
  {
    id: 'frameworks-langchain',
    title: 'LangChain — Framework for Building LLM Applications',
    description: 'A widely-used framework for composing LLMs, chains, agents, tool integrations, aand retrieval systems.',
    url: 'https://python.langchain.com/en/latest/',
    topics: ['Frameworks', 'agents', 'tooling', 'retrieval'],
    level: 'Intermediate',
    verified: true,
    score: 94,
  },
  {
    id: 'evaluations-openai-evals',
    title: 'OpenAI Evals — Evaluation Framework',
    description: 'Open-source evaluation harness designed for measuring LMM and agent behavior across tasks.',
    url: 'https://github.com/openai/evals',
    topics: ['Evaluations', 'benchmarks', 'metrics', 'testing'],
    level: 'Intermediate',
    verified: true,
    score: 93,
  }
];

export default sampleData;