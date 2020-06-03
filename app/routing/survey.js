//this script collects the users answers and compares them to our list of available 
//friends to find the best match.
$(".submit").on("click", function(event) {
    event.preventDefault();

    var userAnswers = {
        Q1: Number($("#Q1 option:selected").val()),
        Q2: Number($("#Q2 option:selected").val()),
        Q3: Number($("#Q3 option:selected").val()),
        Q4: Number($("#Q4 option:selected").val()),
        Q5: Number($("#Q5 option:selected").val()),
        Q6: Number($("#Q6 option:selected").val()),
        Q7: Number($("#Q7 option:selected").val()),
        Q8: Number($("#Q8 option:selected").val()),
        Q9: Number($("#Q9 option:selected").val()),
        Q10: Number($("#Q10 option:selected").val()),
    };

    console.log(userAnswers);

});