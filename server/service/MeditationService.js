import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { PutCommand, DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

const FIVE_MINUTES_IN_SECONDS = 300;

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const createMeditationQuery = async (meditatedTimeInSeconds = FIVE_MINUTES_IN_SECONDS) => {
  const currentTime = dayjs().format();

  const command = new PutCommand({
    TableName: 'Meditations',
    Item: {
      id: uuidv4(),
      userId: 'test',
      createdAt: currentTime,
      secondsMeditated: meditatedTimeInSeconds
    }
  });

  const response = await docClient.send(command);
  console.log(response);
  return response;
};