from flask import render_template,Flask

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    return render_template('login.html')
                        
if __name__ == '__main__':
    app.run()
