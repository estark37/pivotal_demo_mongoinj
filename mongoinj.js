Users = new Meteor.Collection("users");

if (Meteor.isServer) {

  Meteor.methods({
    addUser: function (username, password) {
      check(username, String);
      check(password, String);
      Users.insert({
        username: username,
        password: password
      });
      console.log("Added user", username, password);
    },

    changePassword: function (username, oldPassword, newPassword) {
      check(username, String);
      check(oldPassword, String);
      check(newPassword, String);
      var numAffected = Users.update({
        username: username,
        password: oldPassword
      }, {
        $set: { password: newPassword }
      });
      if (numAffected)
        console.log("Set user", username, "to password", newPassword);
    }
  });

}
