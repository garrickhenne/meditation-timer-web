const { CreateTableCommand, DynamoDBClient, ListTablesCommand } = require('@aws-sdk/client-dynamodb');

const client = new DynamoDBClient({});

const checkMeditationsTableExists = async () => {
  const command = new ListTablesCommand({});
  const response = await client.send(command);
  console.log(response);
  return response;
};

const createMeditationsTable = async () => {
  const command = new CreateTableCommand({
    TableName: 'Meditations',

    AttributeDefinitions: [
      {
        AttributeName: 'id',
        AttributeType: 'S'
      },
      {
        AttributeName: 'createdAt',
        AttributeType: 'S'
      }
    ],
    KeySchema: [
      {
        AttributeName: 'id',
        KeyType: 'HASH'
      },
      {
        AttributeName: 'createdAt',
        KeyType: 'RANGE'
      }
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1
    },
  });

  const response = await client.send(command);
  console.log(response);
  return response;
};

module.exports = {
  createMeditationsTable,
  checkMeditationsTableExists
};