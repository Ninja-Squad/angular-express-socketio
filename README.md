This sample app needs node.js to be installed (0.10.x is great).

Say hello :

    git checkout init
    node app.js

Express webapp

    git checkout express
    npm install
    node app.js

Open [in your browser](http://localhost:9003/vote.html)

Socketio app

	git checkout websocket
	npm install
	node app.js

Open multiple tabs [in your browser](http://localhost:9003/vote.html)

You can try this app on [heroku](http://angular-express-socketio.herokuapp.com/vote.html)

If you try to deploy it on your own on heroku, don't forget to enable websockets support

    heroku labs:enable websockets
