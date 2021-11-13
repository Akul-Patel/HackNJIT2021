from flask import Flask , jsonify

app = Flask(__name__)

@app.route("/data")
def hello_world():
    dictA = {1:"R"}
    return jsonify(dictA)