const dbConfig = require("../../config/db/config");
const oracledb = require("oracledb");
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
class SiteData {
  async run() {
    let connection = await oracledb.getConnection(dbConfig);
    const queryResult = await connection.execute(
      `BEGIN
        PKG_MSPD_MOLD_PCC_WMS.SEL_MOLD_LOCATED_MASTER(:arg_wh_cd, :cursor);
      END;`,
      {
        arg_wh_cd: "10",
        cursor: { type: oracledb.CURSOR, dir: oracledb.BIND_OUT },
      }
    );
    const resultSet = queryResult.outBinds.cursor;
    let row;
    let rtn =[];
    while ((row = await resultSet.getRow())) {
      rtn.push(row);
    }
    
    //console.log(rtn[0]);
    // always close the ResultSet
    await resultSet.close();

    return rtn;
    /*
    let connection;

    try {
      connection = await oracledb.getConnection(dbConfig);

      const stream = connection.queryStream(
        `BEGIN
                PKG_SMT_I_TMS_02.HR_DASBOARD_DATA_SELECT(:direct, :factory, :year, :cursor);
            END;`,
        {
          direct: "DIRECT",
          factory: "2110",
          year: "2020",
          cursor: { type: oracledb.CURSOR, dir: oracledb.BIND_OUT },
        }
        // [],  // no binds
        // {
        //   prefetchRows:   150,  // internal buffer sizes can be adjusted for performance tuning
        //   fetchArraySize: 150
        // }
      );

      const consumeStream = new Promise((resolve, reject) => {
        let rowcount = 0;

        stream.on("error", function (error) {
          // console.log("stream 'error' event");
          reject(error);
        });

        stream.on("metadata", function (metadata) {
          // console.log("stream 'metadata' event");
          console.log(metadata);
        });

        stream.on("data", function (data) {
          // console.log("stream 'data' event");
          console.log(data);
          rowcount++;
        });

        stream.on("end", function () {
          // console.log("stream 'end' event"); // all data has been fetched
          stream.destroy(); // clean up resources being used
        });

        stream.on("close", function () {
          // console.log("stream 'close' event");
          // The underlying ResultSet has been closed, so the connection can now
          // be closed, if desired.  Note: do not close connections on 'end'.
          resolve(rowcount);
        });
      });

      const numrows = await consumeStream;
      console.log("Rows selected: " + numrows);
    } catch (err) {
      console.error(err);
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
    */
  }
}

module.exports = new SiteData();
