import { MongoClient, GridFSBucket } from "mongodb";
import { mongoConfig } from "./settings.js";

let _connection = undefined;
let _db = undefined;
let _gfs = undefined;

export const dbConnection = async () => {
  if (!_connection) {
    _connection = await MongoClient.connect(mongoConfig.serverUrl);
    _db = _connection.db(mongoConfig.database);
  }

  return _db;
};

export const getGFS = async () => {
  if (!_gfs) {
    const db = await dbConnection();
    _gfs = new GridFSBucket(db, {
      bucketName: 'uploads'
    });
  }
  return _gfs;
};

export const closeConnection = async () => {
  await _connection.close();
};
