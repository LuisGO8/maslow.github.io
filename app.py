from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    # Usamos host='0.0.0.0' para que sea accesible desde tu red local
    app.run(debug=True, host='0.0.0.0', port=5000)