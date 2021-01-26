import { Router } from 'express';

// creating a router
var router = Router();

// ES6 format
// exporting the router and
// other files will be able to import this router
export default router;

// CommonJS format
// modules.export = router;



// *****************************************
// 				GET Requests
// *****************************************



// after client's request, localhost:3000/movies, gets re=routed to movies.js file,
// the request is inside the movies.js file and http methods such as, get, post, delete, or put,
// would process the request by using the route '/' which currently is the root aka /movies/
router.get('/', function(req, res){
	res.status(200).send('GET: Return some movies');
});

// further to fetch a specific movie with ID, the route will be '/:id'
// e.g: router.get('/:id', function(req, res){})
// but to ensure the format of the ID, a regular expression is used with id,
// e.g: /:id([0-9]{3,}) => number with digits 0-9 and length >= 3
router.get('/:id([0-9]{3,})', function(req, res){
	res.status(200).send(`GET: ${req.params.id}`);
});

// when ID is sent in wrong format, error is returned as a response,
// Cannot GET /movies/12
// this happens because the request url did not matched with any of the handlers above.
// this would work if we define a new handler that would take an ID, without restricting the format
router.get('/:id', function(req, res){
	res.status(200).send(`GET: boo hoo i, ID: ${req.params.id}, dont need any restrictions, you sucker handlers at the top`);
	// note: string interpolation, ${req.params.id}, works when backticks are used, ``, and not single quotations, ''.
});
// ...and it worked!



// *****************************************
// 				POST Requests
// *****************************************



router.post('/', function(req, res){
	res.status(200).send('POST: Return some movies');
});

router.post('/:id([0-9]{3,})', function(req, res){
	res.status(200).send(`POST: ${req.params.id}`);
});

router.post('/:id', function(req, res){
	res.status(200).send(`POST: boo hoo i, ID: ${req.params.id}, dont need any restrictions, you sucker handlers at the top`);
	// note: string interpolation, ${req.params.id}, works when backticks are used, ``, and not single quotations, ''.
});

