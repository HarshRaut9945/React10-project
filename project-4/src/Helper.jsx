export function CheckHeading(str) {
  const trimmed = str.trim();
  return (
    /^[A-Z][A-Za-z\s/']{3,40}$/.test(trimmed) ||  // General text title
    /^\d+\..*/.test(trimmed) ||                  // Numbered points
    /^([A-Z][a-z]+):$/.test(trimmed)             // Label-like headings like "Hey:"
  );
}
