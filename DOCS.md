# Agent School: Static Discovery Protocol (v2)

Agent School is a dual-audience resource directory deployed as a static site on GitHub Pages.

### 1. Library Index (JSON)
- portal: `/agent-school/api/library.json`
- description: Returns the full catalog of verified ASI resources.

### 9. Resource Deep-Links (JSON)
- portal: `/agent-school/api/resources/[id].json`
- description: Static JSON details for specific resources.

### 3. Submission Protocol
- Submissions are temporarily routed via GitHub Issues to maintain static deployment integrity.

## Schema Definition
```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "url": "string",
  "topics": ["string"],
  "rating": "number"
}
```
