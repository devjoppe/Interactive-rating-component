let userChoice = 0;

$("input:radio[name='valuefieldset']").click(function(){
    userChoice = $(this).val();
});

$('#submitrating').click(function(){
    // Content change
    $('#description p').text('We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!');
    $('#description p').addClass("center-text");
    $('#title h1').text('Thank you!');
    $('#title').addClass("center-text");

    $('#topimages img').removeClass("star-icon");
    $('#images').attr('src', 'images/illustration-thank-you.svg');
    $('#topimages').addClass("center-text");

    $('section').remove('#rating')

    $('#ratingnumberid').removeClass("hide");
    $('#score p').text('You selected ' + userChoice + ' out of 5');
});