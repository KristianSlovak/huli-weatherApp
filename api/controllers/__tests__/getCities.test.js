const getCities = require("../citiesController").getCities;
const City = require("../../models/citiesModel");

describe("getCities", () => {
  it("should return an array of cities", async () => {
    const user = { _id: "123" };
    const cities = [
      { cityName: "New York", cityCountry: "USA", user_id: "123" },
      { cityName: "London", cityCountry: "GB", user_id: "123" },
    ];

    jest.spyOn(City, "find").mockResolvedValue(cities);

    const req = { user };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await getCities(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(cities);
  });
});
