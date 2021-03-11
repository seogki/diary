import express from 'express';

class App{
  public app: express.Application;

  public static bootstrap(): App{
    return new App();
  }

  constructor(){
    var a = [5, 2, 3, 1];
    a.sort((v1, v2) => {
      return v2 - v1
    });

    this.app = express();
    this.app.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.send("hello world");
    });
  }
}

export default App;