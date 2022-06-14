const mongoose = require('mongoose');

const WatchedListSchema = new mongoose.Schema({

  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  episodeID: { type: String },
  episodeName: { type: String },
}, { timestamps:true });

const WatchedList = mongoose.model('WatchedList', WatchedListSchema);

module.exports = WatchedList;