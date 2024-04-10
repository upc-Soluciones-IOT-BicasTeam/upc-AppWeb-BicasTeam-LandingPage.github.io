let toggle = document.querySelector(".toggle");
function AnimatedToggle(){
toggle.classList.toggle("active")
}
$.getJSON('public/assets/scripts/lang.json',function(json){
    $(function(){
        $('.translate').click(function (){

            let lang=$(this).attr('id');
            if(lang=="es"){
                $('.lang').each(function(index,element){
                    let placeholderExist=$(this).attr('placeholder');
                    if(placeholderExist) {
                        $(this).attr('placeholder',json[lang][$(this).attr('key')])
                    }
                    else{
                    $(this).text(json[lang][$(this).attr('key')]);
                    }
                });
                $(this).attr('id','en');
                return;
            }

            let lang2=$(this).attr('id');
            if(lang2=="en"){
                $('.lang').each(function(index,element){
                    let placeholderExist=$(this).attr('placeholder');
                    if(placeholderExist) {
                        $(this).attr('placeholder',json[lang2][$(this).attr('key')])
                    }
                    else{
                        $(this).text(json[lang2][$(this).attr('key')]);
                    }
                });
                $(this).attr('id','es');
                return;
            }
            console.log("end");
        });
    });
});