const homelist = (req, res) => {
res.render('locations-list', { title: 'Srida' });
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