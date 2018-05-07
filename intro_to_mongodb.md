# Mongo Commands
## Create a database called 'my_first_db'.
    use my_first_db

## Create students collection.
    db.createCollection('students')

## Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}}) Create 5 students with the appropriate info.
    db.students.insert({name: 'RON', home_state: "CA", lucky_number: 1, birthday: {month: 1, day: 1, year: 1111}})
    db.students.insert({name: "Walter", home_state: 'AL', lucky_number: 2, birthday: {month: 2, day: 2, year: 2222}})
    db.students.insert({name: "Ruth", home_state: 'CT', lucky_number: 3, birthday: {month: 3, day: 3, year: 3333}})
    db.students.insert({name: "Grace", home_state: 'AK', lucky_number: 4, birthday: {month: 4, day: 4, year: 4444}})
    db.students.insert({name: "Albert", home_state: 'FL', lucky_number: 5, birthday: {month: 5, day: 5, year: 5555}})

## Get all students.
    db.students.find()

## Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).
    db.students.find({home_state: "CA"})

## Get all students whose lucky number is:
### greater than 3
    db.students.find({lucky_number: {$gt: 3 }})
    
### less than or equal to 10
    db.students.find({lucky_number: {$lte: 10 }})

### between 1 and 9 (inclusive)
    db.students.find({lucky_number: {$gte: 1, $lte: 9 }})

## Add a field to each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
    db.students.updateMany({}, {$set: {interests: ['coding', 'brunch', 'MongoDB']} })

## Add some unique interests for each particular student into each of their interest arrays.
    db.students.update({name: 'RON'}, {$push: {interests: 'worms'}})
    db.students.update({name: 'Walter'}, {$push: {interests: 'Popeye'}})
    db.students.update({name: 'Ruth'}, {$push: {interests: 'stopping GC'}})
    db.students.update({name: 'Grace'}, {$push: {interests: 'Traveling'}})
    db.students.update({name: 'Albert'}, {$push: {interests: 'Running'}})

## Add the interest 'taxes' into someone's interest array.
    db.students.update({name: 'Albert'}, {$push: {interests: 'taxes'}})

## Remove the 'taxes' interest you just added.
    db.students.update({name: 'Albert'}, {$pull: {interests: 'taxes'}})

## Remove all students who are from California (or Washington).
    db.students.remove({home_state: 'CA'})

## Remove a student by name. 
    db.students.remove({name: 'Ruth'})

## Remove a student whose lucky number is greater than or equal to 5 (JUST ONE)
    db.students.remove({lucky_number: {$gte: 5}}, true)

## Add a field to each student collection called 'number_of_belts' and set it to 0.
    db.students.updateMany({}, {$set: {number_of_belts: 0} })

## Increment this field by 1 for all students in Washington (Seattle Dojo).
    db.students.updateMany({home_state: 'WA'}, {$inc: {number_of_belts: 1}})

## Rename the 'number_of_belts' field to 'belts_earned'
    db.students.updateMany({}, {$rename: {number_of_belts: 'belts_earned'}})

## Remove the 'lucky_number' field.
    db.students.updateMany({}, {$unset: {lucky_number: ""}})

## Add a 'updated_on' field, and set the value as the current date.
    db.students.updateMany({}, {$set: {updateOn: Date()}})
