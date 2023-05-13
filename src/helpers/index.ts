export const formatDate = (date: any) => {
  const now = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return now;
};
