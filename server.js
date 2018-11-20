// Install express server
import {express} from 'express';
import {path} from 'path';

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, '/dist')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
