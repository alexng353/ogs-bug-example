import app from "../src";
import supertest from "supertest";

describe("GET /", () => {
  test("should return status 400 if no link provided", async () => {
    const response = await supertest(app).get("/");

    expect(response.status).toBe(400);
  });

  test("should return error if no link provided", async () => {
    const response = await supertest(app).get("/");

    expect(response.body).toEqual({
      error: "No link provided",
      success: false,
    });
  });

  test("status 200 if link provided", async () => {
    const response = await supertest(app).get(
      "/?https://music.youtube.com/watch?v=ytZet9iae1A&feature=share"
    );

    expect(response.status).toBe(200);
  });

  test("should return OG data", async () => {
    // uses req.query.link
    const response = await supertest(app).get(
      "/?link=https://music.youtube.com/watch?v=ytZet9iae1A&feature=share"
    );

    const shouldres = `{"ogSiteName":"YouTube Music","ogUrl":"https://music.youtube.com/watch?v=ytZet9iae1A","ogTitle":"Pachelbel's Canon in D Major - Pachelbel - Classical Piano - Classical Music - Classical Study... - YouTube Music","ogDescription":"Provided to YouTube by Symphonic Distribution Pachelbel's Canon in D Major - Pachelbel - Classical Piano - Classical Music - Classical Study Music - Studyin...","alIosAppStoreId":"1017492454","alIosAppName":"YouTube Music","alIosUrl":"vnd.youtube.music://music.youtube.com/watch?v=ytZet9iae1A&feature=applinks","alAndroidUrl":"vnd.youtube.music://music.youtube.com/watch?v=ytZet9iae1A&feature=applinks","alAndroidAppName":"YouTube Music","alAndroidPackage":"com.google.android.apps.youtube.music","alWebShouldFallback":"false","ogType":"video.other","twitterCard":"player","twitterSite":"@YouTubeMusic","twitterUrl":"https://music.youtube.com/watch?v=ytZet9iae1A","twitterTitle":"Pachelbel's Canon in D Major - Pachelbel - Classical Piano - Classical Music - Classical Study... - YouTube Music","twitterDescription":"Provided to YouTube by Symphonic Distribution Pachelbel's Canon in D Major - Pachelbel - Classical Piano - Classical Music - Classical Study Music - Studyin...","twitterAppNameiPhone":"YouTube Music","twitterAppIdiPhone":"1017492454","twitterAppUrliPhone":"vnd.youtube.music://music.youtube.com/watch?v=ytZet9iae1A&feature=twitter-deep-link","twitterAppNameiPad":"YouTube Music","twitterAppIdiPad":"1017492454","twitterAppUrliPad":"vnd.youtube.music://music.youtube.com/watch?v=ytZet9iae1A&feature=twitter-deep-link","twitterAppNameGooglePlay":"YouTube Music","twitterAppIdGooglePlay":"com.google.android.apps.youtube.music","twitterAppUrlGooglePlay":"vnd.youtube.music://music.youtube.com/watch?v=ytZet9iae1A&feature=twitter-deep-link","ogImage":{"url":"https://i.ytimg.com/vi/ytZet9iae1A/maxresdefault.jpg","width":"1280","height":"720","type":"jpg"},"twitterImage":{"url":"https://i.ytimg.com/vi/ytZet9iae1A/maxresdefault.jpg","width":null,"height":null,"alt":null},"ogLocale":"en-GB","favicon":"https://music.youtube.com/favicon.ico","charset":"utf8","requestUrl":"https://music.youtube.com/watch?v=ytZet9iae1A","success":true}`;

    console.log(response.body);
  });
});
