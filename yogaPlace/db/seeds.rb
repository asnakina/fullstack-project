# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Review.destroy_all
Location.destroy_all
TheClass.destroy_all
User.destroy_all

@user1 = User.create(username: 'one', password: '1', email: '1@gmail.com')
@user2 = User.create(username: 'two', password: '2', email: '2@gmail.com')
@location1 = Location.create(name: 'South', address: '1545 Collins Ave Miami Beach, FL, 33139', lat: 25.788251, lng: -80.129387)
@location2 = Location.create(name: 'North', address: '3611 Collins Ave Miami Beach, FL, 33140', lat: 25.809993, lng: -80.123235)
@class1 = @location1.the_classes.create(title:'class for location1', date: DateTime.parse('05/05/19'), description:'Hatha yoga is an old system, fast comlex yoga style. It includes the practice of asanas (yoga postures) and pranayama (breathing exercises), which help bring peace to the mind and body, preparing the body for deeper spiritual practices such as meditation.')
# @class2 = @location2.TheClass.create(title: 'kundalini', date: DateTime.parse('06/06/19'), description: 'Breathing, meditative and strong type of yoga. Be aware you might be addicted and love it forever.')
@class2 = @location2.the_classes.create(title: 'class for location2', date: DateTime.parse('06/06/19'), description: 'Breathing, meditative and strong type of yoga. Be aware you might be addicted and love it forever.')
@class3 = @location2.the_classes.create(title: 'class for location2', date: DateTime.parse('06/07/19'), description: 'Breathing, meditative and strong type of yoga. ')
@class4 = @location1.the_classes.create(title: 'class for location1', date: DateTime.parse('06/08/19'), description: 'Breathing, meditative and strong type of yoga. ')
@class5 = @location1.the_classes.create(title: 'class for location1', date: DateTime.parse('06/09/19'), description: 'Breathing, meditative and strong type of yoga. ')
@review1 = @location1.reviews.create(description: 'This is South location is nice, lovely rooms.', user_id: @user1.id)
@review2 = @location2.reviews.create(description: 'Lovely atmosphere in North location', user_id: @user2.id)
@review3 = @class1.reviews.create(description: 'This class was very effective', user_id: @user2.id)
@review4 = @location1.reviews.create(description: 'South location is next to the ocean. Wow!', user_id: @user2.id)

# Review.destroy_all
# Review.create([
#   {
#     description: "fisrt comment"
#   }
# ])
