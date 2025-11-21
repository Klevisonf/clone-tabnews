test("POST to /api/v1/migrations returns 200 OK with correct body", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(response.status).toBe(200);

  const respondeBody = await response.json();

  expect(Array.isArray(respondeBody)).toBe(true);
});
