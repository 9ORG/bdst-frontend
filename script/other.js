$('#non-school').change(function(){ 
        if($('#non-school').is(':checked')){
            $('#admission-year').attr("disabled","disabled");
            $('#education').attr("disabled","disabled");
            $('#department').attr("disabled","disabled");
            $('#school-id').attr("disabled","disabled");
        }else{
            $('#admission-year').removeAttr("disabled");
            $('#education').removeAttr("disabled");
            $('#department').removeAttr("disabled");
            $('#school-id').removeAttr("disabled");
        }
    });
$('#nick-name').focusout(function(){
        if(!($(this).val()=='')){
            $('#nick-name').removeClass("info-check-right");
            $('#nick-name').addClass("info-check-green");
        }else{
            $('#nick-name').removeClass("info-check-green");
            $('#nick-name').addClass("info-check-right");
        }
   });
$('#birthday').focusout(function(){
        var regTime =  /^[0-9]{4}-[0-1]?[0-9]{1}-[0-3]?[0-9]{1}$/;
        if(regTime.test($(this).val())){
            $('#birthday').removeClass("info-check-right");
            $('#birthday').addClass("info-check-green");
        }else{
            $('#birthday').removeClass("info-check-green");
            $('#birthday').addClass("info-check-right");
        }
   });