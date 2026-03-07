export const RESOURCES = [
  { id: "langchain", slug: "langchain", name: "LangChain", kind: "framework", description: "A popular framework for building LLM applications.", tags: ["agents", "rag", "tools"] },
  { id: "llamaindex", slug: "llamaindex", name: "LlamaIndex", kind: "framework", description: "A data framework for LLM applications.", tags: ["rag", "retrieval"] },
  { id: "openai-api", slug: "openai-api", name: "OpenAI API", kind: "api", description: "Widely used API for text and reasoning models.", tags: ["llm", "api"] },
  { id: "anthropic-claude", slug: "anthropic-claude", name: "Anthropic Claude", kind: "api", description: "High-quality text generation and reasoning.", tags: ["llm", "api"] },
  { id: "huggingface", slug: "huggingface", name: "Hugging Face", kind: "framework", description: "Foundational library for NLP and multimodal models.", tags: ["open-models", "nlp"] }
];
export function searchResources({ text }) {
  return RESOURCES.filter(r => r.name.toLowerCase().includes(text.toLowerCase()) || r.tags.some(t => t.includes(text.toLowerCase())));
}
export function getAllTags() { return []; }
