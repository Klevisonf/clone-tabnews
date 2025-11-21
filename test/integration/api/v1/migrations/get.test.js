import database from "infra/database";

test("GET to /api/v1/migrations returns 200 OK with correct body", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations");
  expect(response.status).toBe(200);

  const respondeBody = await response.json();

  expect(Array.isArray(respondeBody)).toBe(true);
  expect(respondeBody.length).toBeGreaterThan(0);
});
