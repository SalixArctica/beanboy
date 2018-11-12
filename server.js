const port = process.env.PORT || 5000;

const app = express();

app.use(morgan('dev'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.resolve(__dirname, 'src')));

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'src', 'index.html'));
});

app.listen(port, ()=> {
  console.log(`Server listening on port ${port}`);
});