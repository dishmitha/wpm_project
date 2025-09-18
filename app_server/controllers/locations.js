const homelist = (req, res) => {
 res.render('locations-list', {
 title: 'Srida - find a place to work with wifi',
 pageHeader: {
 title: 'Srida',
 strapline: 'Find places to work with wifi near you!'
 },
 sidebar: "Looking for wifi and a seat? Srida helps you find placesto work when out and about. Perhaps with coffee, cake or a pint?Let Srida help you find the place you're looking for.",
 locations: [{
 name: 'Burgerking',
 address: '34 street,nagole',
 rating: 3,
 facilities: ['Hot drinks', 'Food', 'Premium wifi'],
 distance: '100m'
 },{
 name: 'coffee',
 address: '125 High Street, Reading, RG6 1PS',
 rating: 4,
 facilities: ['Hot drinks', 'Food', 'Premium wifi'],
 distance: '200m'
 },{
 name: 'Star cups',
 address: '12 High Street, Gandi nagar ',
 rating: 2,
 facilities: ['Food', 'Premium wifi'],
 distance: '250m'
 }]
 });
};
/* GET 'Location info' page */
const locationInfo = (req, res) => {
res.render('location-info', { title: 'Location info' });
};
/* GET 'Add review' page */
const addReview = (req, res) => {
res.render('location-review-form', { title: 'Add review' });
};
module.exports = {
homelist,
locationInfo,
addReview
};