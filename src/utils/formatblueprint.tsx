export const formatBlueprintText = (text: string | Record<string, string>): string => {
  if (typeof text === 'string') {
    // Remove the "Structured JSON Format" section
    text = text.replace(/### 📦 Section 2: Structured JSON Format[\s\S]*?```json\n[\s\S]*?\n```/, '');

    // Format JSON section for better readability
    const jsonSectionMatch = text.match(/```json\n([\s\S]*?)\n```/);
    if (jsonSectionMatch) {
      try {
        const parsedJson = JSON.parse(jsonSectionMatch[1]);
        const formattedJson = JSON.stringify(parsedJson, null, 2); // Pretty-print JSON
        text = text.replace(jsonSectionMatch[0], `\`\`\`json\n${formattedJson}\n\`\`\``);
      } catch (error) {
        console.error('Error parsing JSON section:', error);
      }
    }

    return text
      .replace(/##+/g, '') // Remove all occurrences of "##"
      .replace(/\*\*/g, '') // Remove all occurrences of "**"
      .replace(/---+/g, '') // Remove all occurrences of "---"
      .replace(/####/g, '') // Remove all occurrences of "####"
      .replace(/\n{2,}/g, '\n\n') // Ensure no excessive line breaks
      .trim(); // Remove leading and trailing whitespace
  }

  if (typeof text === 'object' && text !== null) {
    return Object.entries(text)
      .map(([key, value]) => {
        const formattedKey = key.replace(/##+/g, '').replace(/\*\*/g, '').trim();
        const formattedValue = value.replace(/##+/g, '').replace(/\*\*/g, '').trim();
        return `<strong>${formattedKey}</strong>: ${formattedValue}`;
      })
      .join('<br/><br/>'); // Join formatted entries with line breaks
  }

  return '';
};