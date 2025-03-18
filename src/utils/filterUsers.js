/**
 * Filters users based on a search query.
 * @param {Array} users - The list of users to filter.
 * @param {string} query - The search query.
 * @returns {Array} - The filtered list of users.
 */
export const filterUsers = (users, query) => {
  if (!query) return users; // Return all users if query is empty

  return users.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );
};
