from flask import Flask, render_template, url_for, request, jsonify
from text_sentiment_prediction import predict

app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')
 
@app.route('/predict-emotion', methods=["POST"])
def predict_emotion():
    
    # Get Input Text from POST Request
    input_text = request.json.get("text")
    
    if not input_text:
        response = {
            "status" : "error",
            "message" : "Please enter something to predict emoji"
        }         

        return jsonify(response)
    
    else:
        predicted_emotion , emoji_url = predict(input_text)

        response = {
            "predicted_emotion" : predicted_emotion ,
            "predicted_emotion_img_url" : emoji_url
        }         

        return jsonify(response)


        
       
app.run(debug=True)



    