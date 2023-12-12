class usersDAO {
    static async insertUser(client, user) {
      try {
        const result = await client
          .db("sneakers")
          .collection("snks")
          .insertOne(user);
        return result;
      } catch (err) {
        console.log(err);
        throw err; // Adicione um throw para propagar o erro
      } finally {
        await client.close();
      }
    }
  
    static async getUserByEmail(client, email) {
      try {
        const result = await client
          .db("sneakers")
          .collection("snks")
          .findOne({ email: email });
        return result;
      } catch (err) {
        console.log(err);
        throw err; // Adicione um throw para propagar o erro
      }
    }
  }
  
  module.exports = usersDAO;