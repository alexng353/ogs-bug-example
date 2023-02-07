import app from "../src";
import supertest from "supertest";

import { assert } from "chai";

import { expect } from "chai";

describe("GET /", () => {
  it("should return status 400 if no link provided", async () => {
    const response = await supertest(app).get("/");

    expect(response.status).to.equal(400);
  });

  it("should return error if no link provided", async () => {
    const response = await supertest(app).get("/");

    expect(response.body).deep.equal({
      error: "No link provided",
      success: false,
    });
  });

  it("status 200 if link provided", async () => {
    const response = await supertest(app).get(
      "/?link=https://music.youtube.com/watch?v=ytZet9iae1A&feature=share"
    );

    expect(response.status).to.equal(200);
  });

  it("should return OG data", async () => {
    const response = await supertest(app).get(
      "/?link=https://music.youtube.com/watch?v=ytZet9iae1A&feature=share"
    );
    expect(response.body).include({
      ogSiteName: "YouTube Music",
      ogUrl: "https://music.youtube.com/watch?v=ytZet9iae1A",
    });
  });
});
