import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if(req.method == 'POST') {
    const data = req.body;

    const client = await MongoClient.connect('mongodb+srv://palel00774:<admin>@cluster0.qeo5jiq.mongodb.net/meetups?retryWrites=true&w=majority');

    const db = client.db();

    const mettupsCollection = db.collection('meetups');
    const result = await mettupsCollection.insertOne(data);

    console.log(result);
    client.close();
    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;