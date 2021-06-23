const db = require('./conn');

class ExecutivesModel {
    constructor(id, name, slug, first_year_active) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.first_year_active = first_year_active;
    }

    static async getAllExecutiveData() {
        try {
            const response = await db.any(
                `SELECT * FROM ceos;`
            )
            console.log('query is:', response);
            return response;
        } catch (error) {
            console.error('ERROR: ', error);
            return error;
        }
    }
}

module.exports = ExecutivesModel;