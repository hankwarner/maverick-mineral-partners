const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("./../config");

const { endpoint, key, databaseId } = config;

const client = new CosmosClient({ endpoint, key });

const database = client.database(databaseId);
const container = database.container("Company");

module.exports = async function (context, req) {
    try {
        console.log("company api reached.");
        const querySpec = {
            query: 'SELECT * from c WHERE c.id = "1"'
        };
        const { resources: items } = await container.items
            .query(querySpec)
            .fetchAll();
        console.log("resources " + JSON.stringify(items));

        context.res = {
            body: items[0],
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