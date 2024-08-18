export async function login(username: string, password: string) {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error(`Login failed: ${response.statusText}`);
    }

    const data = await response.json();
    // Assuming the response includes access and refresh tokens
    const { access, refresh } = data;

    // You can store the tokens in localStorage or cookies
    localStorage.setItem("access_token", access);
    localStorage.setItem("refresh_token", refresh);

    return data; // Return the data if needed for further use
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
}
