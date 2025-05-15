export const formatBlueprintText = (text: string | Record<string, string>): string => {
  if (typeof text === 'string') {
    // Remove the "📦 Structured JSON Format" section and its JSON block
    text = text.replace(/📦 Structured JSON Format[\s\S]*?```json\n[\s\S]*?\n```/, '');

    // Handle **bold** text: remove ** and wrap in <span> with font-semibold
    text = text.replace(/\*\*(.*?)\*\*/g, '<span class="font-semibold">$1</span>');

    // Escape HTML to prevent XSS
    let formatted = text
      .replace(/&/g, '&')
      .replace(/</g, '<')
      .replace(/>/g, '>');

    // Convert markdown-like headers (🌟, ###) to HTML
    formatted = formatted.replace(
      /🌟\s*(.*)/g,
      '<h2 class="text-xl font-bold">$1</h2>',
    );
    formatted = formatted.replace(
      /###\s*(.*)/g,
      '<h3 class="text-lg font-semibold">$1</h3>',
    );

    // Convert lists (•) to HTML unordered lists
    formatted = formatted.replace(/•\s*(.*)/g, '<li>$1</li>');
    formatted = formatted.replace(/(<li>.*<\/li>\n)+/g, '<ul class="list-disc ml-6">$&</ul>');

    // Step 1: Remove -------- from table headers before converting to HTML
    formatted = formatted.replace(
      /\|([^|\n]*?)--------([^|\n]*?)\|/g,
      (before, after) => `${before}${after}`, // Removed unused 'match' parameter
    );

    // Step 2: Remove entire rows consisting of ------- (separator rows)
    formatted = formatted.replace(
      /^\s*\|-+\|\s*$/gm,
      '', // Matches rows with only dashes between | characters, globally and multiline
    );

    // Step 3: Convert tables (| ... |) to HTML tables
    formatted = formatted.replace(
      /\|([^|\n]+)\|([^|\n]+)\|([^|\n]+)\|/g,
      '<tr><th class="border px-2 py-1">$1</th><th class="border px-2 py-1">$2</th><th class="border px-2 py-1">$3</th></tr>',
    );
    formatted = formatted.replace(
      /\|([^|\n]+)\|([^|\n]+)\|([^|\n]*)\|/g,
      '<tr><td class="border px-2 py-1">$1</td><td class="border px-2 py-1">$2</td><td class="border px-2 py-1">$3</td></tr>',
    );
    formatted = formatted.replace(
      /(<tr>.*<\/tr>\n)+/g,
      '<table class="border-collapse border w-full">$&</table>',
    );

    // Step 4: Fallback - Remove any remaining -------- from the HTML output
    formatted = formatted.replace(/--------/g, '');

    // Convert newlines to <br> for paragraph breaks
    formatted = formatted.replace(/\n/g, '<br>');

    // Remove stray --- sequences (especially at the end)
    formatted = formatted.replace(/---+<br>/g, '').replace(/---+/, '');

    // Remove excessive line breaks and trim
    formatted = formatted.replace(/(<br>){2,}/g, '<br><br>').trim();

    return formatted;
  }

  if (typeof text === 'object' && text !== null) {
    return Object.entries(text)
      .map(([key, value]) => {
        const formattedKey = key.trim();
        const formattedValue = value.trim();
        return `<strong>${formattedKey}</strong>: ${formattedValue}`;
      })
      .join('<br><br>'); // Join formatted entries with line breaks
  }

  return '';
};