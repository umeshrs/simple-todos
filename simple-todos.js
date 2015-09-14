Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: function () {
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.body.events({
    'submit .new-task': function () {
      // Prevent default browser form submit
      event.preventDefault();
      console.log(event);

      // Get the value from the form input element
      var text = event.target.text.value;

      // Insert new task into the collection
      Tasks.insert({
        text: text,
        createdAt: new Date() // current time
      });

      // Clear form input element
      event.target.text.value = "";
    }
  });
}
