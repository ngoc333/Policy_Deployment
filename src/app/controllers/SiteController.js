// const dbConfig = require("../../config/db/config");
// const oracledb = require("oracledb");
// oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
const siteData = require("../Data/SiteData");

class SiteController {
  //[GET] /
   home(req, res) {
    // let data = await siteData.run();
    // console.log(data.length);
    // res.send(JSON.stringify(data));
    /*
    let connection = await oracledb.getConnection(dbConfig);
    const queryResult = await connection.execute(
      `BEGIN
          PKG_SMT_I_TMS_02.HR_DASBOARD_DATA_SELECT(:direct, :factory, :year, :cursor);
      END;`,
      {
        direct: "DIRECT",
        factory: "2110",
        year: "2020",
        cursor: { type: oracledb.CURSOR, dir: oracledb.BIND_OUT },
      }
    );
    var result = queryResult.outBinds.cursor;
    let row;
    while ((row = result.getRow())) {
      console.log(row);
    }
    */
    /* oracledb
      .getConnection(dbConfig)
      .then((conn) =>
        conn.execute(
            //"SELECT sysdate as dd, 'sss' ccc FROM dual"
          `BEGIN
                PKG_SMT_I_TMS_02.HR_DASBOARD_DATA_SELECT(:direct, :factory, :year, :cursor);
            END;`,
          {
            direct: "DIRECT",
            factory: "2110",
            year: "2020",
            cursor: { type: oracledb.CURSOR, dir: oracledb.BIND_OUT },
            
          },
        )
      )
      .then((queryResult) => {
        var result = queryResult.outBinds.cursor
        console.log(result.getRow(1));
        
        res.send(JSON.stringify(queryResult));
      })
      .catch((error) => console.log(error));
      */
    // console.log(queryResult);
    res.render("home");
  }
}

module.exports = new SiteController();
