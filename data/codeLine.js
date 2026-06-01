export const codeLines = [
  [
    { text: "from", color: "c-success" },
    { text: " agentforge ", color: "c-white" },
    { text: "import", color: "c-success" },
    { text: " Agent, Tool", color: "c-info" },
  ],
  [
    { text: "# Create a research agent", color: "c-primary" },
  ],
  [
    { text: "agent = ", color: "c-white" },
    { text: "Agent", color: "c-info" },
    { text: "(", color: "c-white" },
  ],
  [
    { text: "    name=", color: "c-white" },
    { text: '"research-assistant"', color: "c-success" },
    { text: ",", color: "c-white" },
  ],
  [
    { text: "    model=", color: "c-white" },
    { text: '"gpt-4o"', color: "c-success" },
    { text: ",", color: "c-white" },
  ],
  [
    { text: "    tools=[", color: "c-white" },
    { text: "Tool", color: "c-info" },
    { text: ".web_search, ", color: "c-white" },
    { text: "Tool", color: "c-info" },
    { text: ".read_url],", color: "c-white" },
  ],
  [
    { text: "    memory=", color: "c-white" },
    { text: "True", color: "c-success" },
    { text: ")", color: "c-white" },
  ],
  [
    { text: "# Run the agent", color: "c-primary" },
  ],
  [
    { text: "result = agent.", color: "c-white" },
    { text: "run", color: "c-info" },
    { text: '("Find the latest AI research papers on multi-agent systems")', color: "c-white" },
  ],
  [
    { text: "print", color: "c-success" },
    { text: "(result.output)  ", color: "c-white" },
    { text: "# Autonomous research complete", color: "c-primary" },
  ],
];
export default codeLines