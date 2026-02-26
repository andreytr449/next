export async function getUserData() {
  const response = await fetch("/api/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch user data");
  }

  return data;
}
