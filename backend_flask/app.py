import os
from flask import Flask, jsonify
from backend_flask.config import config
from backend_flask.models import db
from backend_flask.blueprints import todos
from backend_flask.utils import generate_response

app = Flask(__name__)

env_config = os.getenv('FLASK_CONFIG', 'dev')

app.config.from_object(config[env_config])
db.init_app(app)

with app.app_context():
    db.create_all()


@app.errorhandler(404)
def not_found(e):
    return generate_response(404, 'Resource not found.')


@app.errorhandler(400)
def bad_request(e):
    return generate_response(400, 'Bad request.')


app.register_blueprint(todos)

<<<<<<< HEAD
if __name__ == '__main__':
    app.run(host='0.0.0.0')
||||||| merged common ancestors
if __name__ == "__main__" :
    db.create_all()
    app.run(debug=True) 
=======
if __name__ == "__main__" :
    db.create_all()
    app.run(debug=True) 

    i = 12
    
>>>>>>> 902d206914b30eb002027aca28300dd3c6dd8c5b
