const db = require("../database/connect");

class Date {
    constructor({date_id, account_id, habits, date}){
        this.id = date_id;
        this.account_id = account_id;
        this.habits = habits;
        this.date = date;
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM dates");
        return response.rows.map((p) => new Date(p));
      }

    static async getOneById(id) {
        const response = await db.query(
          "SELECT * FROM dates WHERE date_id = $1",
          [id]
        );
        if (response.rows.length != 1) {
          throw new Error("Unable to locate date.");
        }
        return new Date(response.rows[0]);
      }

    static async create(data) {
    const { account_id, habits } = data;
    let response = await db.query(
        `INSERT INTO habits (account_id, habits) 
                                        VALUES ($1, $2) RETURNING date_id;`,
                                        [account_id, habits]
    );
    const newId = response.rows[0].date_id;
    const newDate = await Date.getOneById(newId);
    return newDate;
    }

    async destroy() {
        let response = await db.query(
          "DELETE FROM dates WHERE date_id = $1 RETURNING *;",
          [this.id]
        );
        return new Date(response.rows[0]);
      }

}

module.exports = Date;