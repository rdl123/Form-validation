function formInit() {
    const form = document.querySelector('form')
    $("input#other-title").hide();
     $('label[for="color"]').hide();
     $("select#color").hide();
    $(".credit-card").hide();
    $(".paypal").hide();
    $(".bitcoin").hide();
    form.reset()
   
}

/**
 * @param  {} evt
 */
function updateAcivitiesRegistration(evt){
     var result=0;
    var s=$("input:checkbox")
     
         if( s[1].checked==true)
         {
            $('.ccc').css("text-decoration", "line-through");
            s[3].disabled=true;
            
         }
         if( s[1].checked==false)
         {
            $('.ccc').css("text-decoration", "none");
            s[3].disabled=false;
         }
         if( s[3].checked==true){
            $('.aaa').css("text-decoration", "line-through");
            s[1].disabled=true;
         }
         if( s[3].checked==false){
            $('.aaa').css("text-decoration", "none");
            s[1].disabled=false;
         }
         if( s[2].checked==true)
         {
            $('.ddd').css("text-decoration", "line-through");
            s[4].disabled=true;
         }
         if( s[2].checked==false){
            $('.ddd').css("text-decoration", "none");
            s[4].disabled=false;
         }
         if( s[4].checked==true)
         {
            $('.bbb').css("text-decoration", "line-through");
            s[2].disabled=true;
         }
         if( s[4].checked==false){
            $('.bbb').css("text-decoration", "none");
            s[2].disabled=false;
         }
            
        for(var i=0;i<s.length;i++)
        {
            if (s[i].checked==true)
            {
                $('.cost').show(); 
                prix=s[i].dataset.cost;
                result=result+parseInt(prix.substring(1,4))
                $('.cost').html("Total Cost:"+result+"$");    
            }
            if (s[0].checked==false && s[1].checked==false && s[2].checked==false && 
                s[3].checked==false && s[4].checked==false && s[5].checked==false && s[6].checked==false)
            {
                $('.cost').hide();
            }
                
        }
    
}

function updateJobRole() {
    var job_other=$('#title').val();
    if(job_other=="other")
    {$('#other-title').slideDown();
//$(this).hide();
    }
    else{
        $('#other-title').slideUp();
    }

    
}
    

/**
 * Called when the user selects a design theme
 * @param  {} evt
 */
function updateTShirtColor(evt) {
    
    var des=$('#design').val();
    if(des=="JS Puns")
    { 
        $("label[for='color']").show()
        $('select#color').show();
    // $( "" ).prop( "disabled", true );
    //var tab=["cornflowerblue","darkslategrey","gold"];
    for(var i=0;i<$("#color option").length;i++)
        if($($("#color option")[i]).val()=="tomato" || $($("#color option")[i]).val()=="steelblue" || $($("#color option")[i]).val()=="dimgrey") 
        {$($("#color option")[i]).prop( "disabled", true );}
        else{
            $($("#color option")[i]).prop( "disabled", false );
        }
    }
    else{
        $("label[for='color']").show()
        $('select#color').show();
        for(var i=0;i<$("#color option").length;i++)
        if($($("#color option")[i]).val()=="cornflowerblue" || $($("#color option")[i]).val()=="darkslategrey" || $($("#color option")[i]).val()=="gold") 
        {$($("#color option")[i]).prop( "disabled", true );}
        else{
            $($("#color option")[i]).prop( "disabled", false );
        }
    }
  
}

/**
 * Called when the user selects the payment method
 */
function updatePaymentInfo() {
    
    var man_py=$('#payment').val();
    if(man_py=="PayPal")
    {$('#paypal').slideDown();
    $('#bitcoin').slideUp();
    $('.credit-card').hide();
    }
    else if(man_py=="Bitcoin")
    {$('#bitcoin').slideDown();
    $('#paypal').slideUp();
    $('.credit-card').hide();
    }

    else
    {$('.credit-card').show();
    $('#paypal').slideUp();
    $('#bitcoin').slideUp();
}
    
}

/**
 * validate a specific rule and show error if any
 * @param  {} rule
 */
function validate(rule){
    var name=$('#name').val();
    var  des=$("#design").val();
    var mail=$("#mail").val();
    var job=$("#title").val();
    var zip=parseInt($("#zip").val());
    var design=$("#design").val();
    var payment=$("#payment").val();
    var color=$("#colors-js-puns select").val();
    var crednum=parseInt($("#cc-num").val());
   
    var cvv=parseInt($("#cvv").val())
    var s=$("input:checked")
    var expyear=$("#exp-year").val();
    var expmonth=$("#exp-month").val();
    

    var regExp4=/^d{5}$/;
    validzip=regExp4.test(zip)
    var regExp3=/^d{3}$/,
    validcvv=regExp3.test(cvv)
    var regExp2 =/^d{16}$/;
    validcrednumber=regExp2.test(crednum)
    var regEx1 = /^[^@]+@[^@]+$/,
    validEmail = regEx1.test(mail);
    if (name.length < 2 && rule.selector=='#name')
      {
        $('#name').before('<div class="error">This field must contains at least 2 characters</div>');
      }
    if (rule.selector=='#mail' && validEmail==false)
    {
        $("#mail").before('<div class="error">Please enter a valid email</div>');

    }
    if (rule.selector=='#title' && job=="")
    {
        $("#title").before('<div class="error">Please select a job title</div');
    }
    if (rule.selector=="#design" && design=="")
    {
        $("#design").before('<div class="error">Please select a design theme</div');
    }
    if (rule.selector=="#colors-js-puns select" && color=="" && des=="JS Puns")
    {
        $("select#color").before('<div class="error">Please select a color</div');  
    }
    if (rule.selector==".activities" && s.length==0)
    {
        $(".zzz").before('<div class="error">Please check at least one activity</div');
    }
    if (rule.selector=="#payment" && payment=="")
    {
        $("#payment").before('<div class="error">Please select a payment method</div');
    }
    if (rule.selector=="#cvv" && validcvv==false)
    {
        $("#cvv").before('<div class="error">Please enter a valid CVV</div');
    }
    if (rule.selector=="#exp-month" && expmonth=="")
    {
        $("#exp-month").before('<div class="error">Please select an expiration month</div');
    }
    if (rule.selector=="#exp-year" && expyear=="" )
    {
        $("#exp-year").before('<div class="error">Please select an expiration year</div');
    }
    if (rule.selector=="#cc-num" && validcrednumber==false)
    {
        $("#cc-num").before('<div class="error">Please enter a valid credit card Num</div');
    }
    if (rule.selector=="#zip" && validzip==false)
    {
        $("#zip").before('<div class="error">Please enter a valid zip code</div');
    }
    

    
}

// no comment

document.addEventListener('DOMContentLoaded', formInit)

$('#title').on('change', updateJobRole)

$('.activities').on('change', '[type=checkbox]', updateAcivitiesRegistration)

$('#design').on('change', updateTShirtColor)

$('#payment').on('change', updatePaymentInfo)

$('form').on('submit', (evt) => {
    evt.preventDefault()
    // remove all previous errors before computing the overall validation
    $('form .error').remove()
    validationRules.forEach(validate)
})

// all validation rules array.  
const validationRules = [
    {
        type: 'regExp',
        selector: '#name', 
        regExp: /^[AZ][AZ',\.\-]+$/i,
        errorMessage: 'This field must contains at least 2 characters'
    },
    {
        type: 'regExp',
        selector: '#mail', 
        regExp: /^[^@]+@[^@]+$/,
        errorMessage: 'Please enter a valid email'
    },
    {
        type: 'regExp',
        selector: '#cc-num', 
        regExp: /^d{13,16}$/,
        errorMessage: 'Please enter a valid credit card Num'
    },
    {
        type: 'regExp',
        selector: '#zip', 
        regExp: /^d{5}$/,
        errorMessage: 'Please enter a valid zip code'
    },
    {
        type: 'regExp',
        selector: '#cvv', 
        regExp: /^d{3}$/,
        errorMessage: 'Please enter a valid CVV'
    },
    {
        type: 'multiCheck',
        tag: 'input:checked',
        selector: '.activities', 
        minValues: 1,
        errorMessage: 'Please check at least one activity'
    },
    {
        type: 'empty',
        selector: '#title', 
        errorMessage: 'Please select a job title'
    },
    {
        type: 'empty',
        selector: '#design', 
        errorMessage: 'Please select a design theme'
    },
    {
        type: 'empty',
        selector: '#colors-js-puns select', 
        errorMessage: 'Please select a color'
    },
    {
        type: 'empty',
        selector: '#exp-month', 
        errorMessage: 'Please select a month'
    },
    {
        type: 'empty',
        selector: '#exp-year', 
        errorMessage: 'Please select an expiration year'
    },
    {
        type: 'empty',
        selector: '#payment', 
        errorMessage: 'Please select a payment method'
    },
    
]

