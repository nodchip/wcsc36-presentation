import type { MermaidConfig } from 'mermaid'

export default function setupMermaid(): MermaidConfig {
  // Enable HTML labels so we can embed small images in nodes.
  // Note: this is for local slide rendering; avoid untrusted mermaid sources.
  return {
    securityLevel: 'loose',
    flowchart: {
      htmlLabels: true,
    },
  }
}
