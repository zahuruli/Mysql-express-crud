import express from "express";
import {
  createStudentController,
  deleteStudentController,
  getMysqlByIdController,
  getMysqlController,
  updateStudentController,
} from "../controllers/sqlController.js";
const Router = express.Router();

//Routing:
Router.get("/getAllSql", getMysqlController);
Router.get("/getAllSqlbyId/:id", getMysqlByIdController);
Router.post("/create", createStudentController);
Router.put("/update/:id", updateStudentController);
Router.delete("/delete/:id", deleteStudentController);

export default Router;
