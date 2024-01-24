import { createMeditationQuery } from "../service/MeditationService.js";

export const createMeditationControl = async (secondsMeditated) => {
  try {
    const dynamoDBQuery = await createMeditationQuery(secondsMeditated);
    return dynamoDBQuery;
  } catch (error) {
    console.log('Encountered error creating meditation:', error);
    return undefined;
  }
};