export const formatBlueprintText = (text: string | Record<string, string>): string => {
    if (typeof text === 'string') {
      return text
        .replace(/##+/g, '') // Remove all occurrences of "##"
        .replace(/\*\*/g, '') // Remove all occurrences of "**"
        .replace(/---+/g, '') // Remove all occurrences of "---"
        .trim(); // Remove leading and trailing whitespace
    }
  
    if (typeof text === 'object' && text !== null) {
      return Object.entries(text)
        .map(([key, value]) => {
          const formattedKey = key.replace(/##+/g, '').replace(/\*\*/g, '').trim();
          const formattedValue = value.replace(/##+/g, '').replace(/\*\*/g,  '').trim();
          return `<strong>${formattedKey}</strong>: ${formattedValue}`;
        })
        .join('<br/><br/>'); // Join formatted entries with line breaks
    }
  
    return '';
  };