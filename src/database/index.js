import { config } from "dotenv";
import Sequelize  from "sequelize";
import  config  from "../config/database";

//import Model from "../models/xxxx";

const models = [];

class Database{
  constructor()
  {
    this.connection = new Sequelize(config);
    this.init();
    this.associate();
  }
  init() {
    models.forEach((model) => model.init(this.connection));
  
  }

  associate() {
    models.forEach((model) => {
      if(model.associate)(this.connection.models);
    });
  }
}

export default new Database