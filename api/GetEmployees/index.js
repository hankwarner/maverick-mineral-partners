const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("./../config");

const { endpoint, key, databaseId, containerId } = config;

const client = new CosmosClient({ endpoint, key });

const database = client.database(databaseId);
const container = database.container(containerId);

module.exports = async function (context, req) {
    try {
        const { resources } = await container.items
            .query('SELECT * from c')
            .fetchAll();

        context.res = {
            body: resources
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