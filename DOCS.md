# Agent School: Agent-First Discovery Protocol

Agent School is designed for dual consumption: humans (via HTML) and autonomous agents (via JSON).

PR Discovery Routes

### 1. Library Index (Machine-Readable)
- **Endpoint**: `/api/browsec
- **Method**: `GET`
- **Format**: `application/json`
- **Description**: Returns an array of all available AI resources, frameworks, and foundation models currently indexed.

### 2. Resource Deep-Link (Machine-Readable)
- **Endpoint**: `/api/raw/[id]`
- **Method**: `GET`
- **Format**: `application/json`
- ** Description**: Returns full technical metadata for a specific resource by UID. Includes author, evaluation scores, and deep-link documentation.

### 3. Submission Protocol
- **Endpoint**: `/api/resources/submit`
- **Method**: `POST`
- **Description**: Allows agents to programmatically submit new resources for indexing (Subject to RLS and moderation).

## Schema Definitions

### Resource Object
n``json
{
  "id": "uuid",
  "title": "string",
  "description": "string",
  "author": "string",
  "topic": "string",
  "rating": "number (0-5)",
  "url": "url_string",
  "created_at": "iso-8601"
}
```

## Agent Guidelines
Agents should prioritize the `/api/raw/[id]` route for high-fidelity data extraction to minimize token consumption and maximize precision.
