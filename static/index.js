//Create date variable

var date = new Date()

let display_date = "Date:" + date.toLocaleDateString()

$(document).ready(function () {
    $("#display_date").html(display_date)
})

//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

//jQuery selector and click action

// $(document).ready() f

$(function () {
    $("#predict_button").click(function () {
        var inputData = {
            "text" : $("#text").val()
        }

        $.ajax({
            type : 'POST' , 
            url : '/predict-emotion',
            data : JSON.stringify(input_data),
            dataType : "json",
            contentType : 'application/json',
            success : function(result){
                predicted_emotion = result.data.predicted_emotion
                emo_url = result.data.predicted_emotion_img_url

                $("#prediction").html(predicted_emotion)
                $('#prediction').css("display", "block");

                $("#emo_img_url").attr('src', emo_url);
                $('#emo_img_url').css("display", "block");
            },

            error : function(result) {
                alert(result.responseJSON.message)
            }
        })
    });
});

