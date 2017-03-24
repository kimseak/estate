import { check, Match  } from 'meteor/check';

Meteor.methods({
    addCategory: function (category) {
        check(category,{
            name : String,
        });
        var exists = Category.findOne({name:category.name})
        if(!exists){
            return Category.insert(category);
        }
    }
});
