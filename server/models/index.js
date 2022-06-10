const List = require('./listSchema');

const findAllLists = async () => {
  return await List.find({});
};

const createNewList = async (list) => {
  const newList = new List(list);
  return await newList.save();
}