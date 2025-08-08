export const CheckHeading = (str) => {
  const trimmed = str.trim();
  return (
    /^[A-Z][A-Za-z\s/']{3,40}$/.test(trimmed) ||
    /^\d+\..*/.test(trimmed) ||
    /^([A-Z][a-z]+):$/.test(trimmed)
  );
};

export const getLocalResponse = (q) => {
  const question = q.trim().toLowerCase();

  if (["hi", "hello", "hey"].includes(question)) {
    return "Hello! How can I assist you today?";
  }

  if (question.includes("how are you")) {
    return "I'm just code, but I'm functioning perfectly. How can I help you?";
  }

  if (
    question.includes("today's date") ||
    question.includes("what is the date") ||
    question.includes("current date")
  ) {
    const today = new Date().toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    return `Today's date is ${today}`;
  }

  if (question.includes("time") || question.includes("current time")) {
    const time = new Date().toLocaleTimeString('en-IN');
    return `Current time is ${time}`;
  }

  return null; // Fallback to API
};
