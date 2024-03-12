const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'Super Mario Bros',
  description: "Videojuego de prueba para el testing",
  platforms: "PC"
};

xdescribe('Videogame routes', () => {
  describe("GET /videogames", function(){
    it('should get 200', () =>
      agent.get('/videogames').expect(200)
    );
    it("should get 404", () => 
       agent.get("/videojuegos").expect(404)
    );
    it("should get results related to the search", () =>
       agent.get("/videogame?name=Age")
       .then(res=>{
         expect(res.body[0].name).includes("Age")
       })
    );
    it("should get an empty", () =>
       agent.get("/videogames?name=jsadj")
       .then(res=>{
         expect(res.body[0].name).equal("Videogames no encontrados")
       })
    );
  });
})
