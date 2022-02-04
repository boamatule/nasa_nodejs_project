const request = require("supertest");
const app = require("../../app");

describe("Test GET /launches", () => {
	test("It should respond with 200 success", async () => {
		const response = await request(app)
			.get("/launches")
			.expect("Content-Type", /json/)
			.expect(200);
		// expect(response.statusCode).toBe(200);
	});
});

describe("Test POST /launch", () => {
	const completeLaunchData = {
		mission: "Raw Gem Enterprize",
		rocket: "NCC 1701-D",
		target: "Kepler-186",
		launchDate: "July 9, 2030",
	};

	const lauchDataWithoutDate = {
		mission: "Raw Gem Enterprize",
		rocket: "NCC 1701-D",
		target: "Kepler-186",
	};

	test("It should responde with 201 created", async () => {
		const response = await request(app)
			.post("/launches")
			.send(completeLaunchData)
			.expect("Content-Type", /json/)
			.expect(201);

		const requestDate = new Date(completeLaunchData.launchDate).valueOf();
		const responseDate = new Date(response.body.launchDate).valueOf();
		expect(responseDate).toBe(requestDate);

		expect(response.body).toMatchObject(lauchDataWithoutDate);
	});
	test("It should catch missing required properties", () => {});
	test("It should catch invalid dates", () => {});
});
