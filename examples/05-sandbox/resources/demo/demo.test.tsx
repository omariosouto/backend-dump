import express from "express";
import request from "supertest";
import { demo } from "./index";

describe("demo()", () => {
  it("should return 'demo'", () => {
    expect(demo()).toBe("demo");
  });
})

describe("server", () => {
  it("...", () => {    
    const app = express();
    
    app.get('/user', function(req, res) {
      res.status(400).json({ name: 'john' });
    });

    console.log(request(app)
    .get('/user'));
    
    request(app)
      .get('/user')
      .expect('Content-Type', /json/)
      .expect('Content-Length', '15')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
      });
  });
});