const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("./../config");

const { endpoint, key, databaseId } = config;

const client = new CosmosClient({ endpoint, key });

const database = client.database(databaseId);
const container = database.container("Employees");

module.exports = async function (context, req) {
    try {
        console.log("employees api reached.");
        const { resources } = await container.items
            .query('SELECT * from c')
            .fetchAll();
        console.log("resources " + JSON.stringify(resources));

        context.res = {
            body: resources,
            headers: {
                'Access-Control-Allow-Origin': process.env.ORIGIN
            }
        };

    } catch (err) {
        console.log(err);
        context.res = {
            status: 400,
            body: err.message
        };
        
    } finally {
        context.done();
    }
};