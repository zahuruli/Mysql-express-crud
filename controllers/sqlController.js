import pool from "../config/db.js";

//get all:
export const getMysqlController = async (req, res) => {
  try {
    const data = await pool.query("select * from student");
    if (!data) {
      res.status(401).json({
        success: false,
        message: "No Data Found!",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Data Found successfully",
        totalData: data[0].length,
        data: data[0],
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//get all by id:
export const getMysqlByIdController = async (req, res) => {
  try {
    const sid = req.params.id;
    if (!sid) {
      res.status(500).json({
        success: false,
        message: "Invalid id",
      });
    } else {
      // const data = await pool.query(`select * from student where id=` + sid);
      const data = await pool.query(`select * from student where id=?`, [sid]);

      if (!data) {
        res.status(401).json({
          success: false,
          message: "No Data Found!",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Singele Data Found successfully",
          totalData: data[0].length,
          data: data[0],
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

//createStudentController:
export const createStudentController = async (req, res) => {
  try {
    const { name, roll_no, fees, medium, class_name } = req.body;
    if ((!name, !roll_no, !fees, !medium, !class_name)) {
      res.status(500).json({
        success: false,
        message: "please provide all fields!",
      });
    } else {
      const data = await pool.query(
        `insert into student(name,roll_no,fees ,medium,class_name) values(?,?,?,?,?)`,
        [name, roll_no, fees, medium, class_name]
      );
      if (!data) {
        res.status(401).json({
          success: false,
          message: "Can't create data!",
          data: data[0],
        });
      } else {
        res.status(200).json({
          success: true,
          message: " Data Created successfully",
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

//createStudentController:
export const updateStudentController = async (req, res) => {
  try {
    const { name, roll_no, fees, medium, class_name } = req.body;
    const studentId = req.params.id;
    if (!studentId) {
      res.status(500).json({
        success: false,
        message: "please provide valid student id fields!",
      });
    } else {
      const data = await pool.query(
        `update student set name=?,roll_no=?,fees=?,medium=?,class_name=? where id=?`,
        [name, roll_no, fees, medium, class_name, studentId]
      );
      if (!data) {
        res.status(401).json({
          success: false,
          message: "Can't update data!",
        });
      } else {
        res.status(200).json({
          success: true,
          message: " Data updated successfully",
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

//deleteStudentController:
export const deleteStudentController = async (req, res) => {
  try {
    const studentId = req.params.id;
    if (!studentId) {
      res.status(500).json({
        success: false,
        message: "please provide valid student id fields!",
      });
    } else {
      const data = await pool.query(`delete from student where id=?`, [
        studentId,
      ]);
      if (!data) {
        res.status(401).json({
          success: false,
          message: "Can't delete data!",
        });
      } else {
        res.status(200).json({
          success: true,
          message: " Data deleted successfully",
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
