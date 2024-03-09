typeof Countries=="object"&&(Countries.updateProvinceLabel=function(e,t){if(typeof e=="string"&&Countries[e]&&Countries[e].provinces){if(typeof t!="object"&&(t=document.getElementById("address_province_label"),t===null))return;t.innerHTML=Countries[e].label;var r=jQuery(t).parent();r.find("select"),r.find(".custom-style-select-box-inner").html(Countries[e].provinces[0])}}),typeof Shopify.Cart=="undefined"&&(Shopify.Cart={}),Shopify.Cart.ShippingCalculator=function(){var _config={submitButton:"Calculate shipping",submitButtonDisabled:"Calculating...",templateId:"shipping-calculator-response-template",wrapperId:"wrapper-response",customerIsLoggedIn:!1,moneyFormat:"${{amount}}"},_render=function(e){var t=jQuery("#"+_config.templateId),r=jQuery("#"+_config.wrapperId);if(t.length&&r.length){var templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},n=Handlebars.compile(jQuery.trim(t.text())),a=n(e);if(jQuery(a).appendTo(r),typeof Currency!="undefined"&&typeof Currency.convertAll=="function"){var i="";jQuery("[name=currencies]").size()?i=jQuery("[name=currencies]").val():jQuery("#currencies span.selected").size()&&(i=jQuery("#currencies span.selected").attr("data-currency")),i!==""&&Currency.convertAll(shopCurrency,i,"#wrapper-response span.money, #estimated-shipping span.money")}}},_enableButtons=function(){jQuery(".get-rates").removeAttr("disabled").removeClass("disabled").val(_config.submitButton)},_disableButtons=function(){jQuery(".get-rates").val(_config.submitButtonDisabled).attr("disabled","disabled").addClass("disabled")},_getCartShippingRatesForDestination=function(e){var t={type:"POST",url:"/cart/prepare_shipping_rates",data:jQuery.param({shipping_address:e}),success:_pollForCartShippingRatesForDestination(e),error:_onError};jQuery.ajax(t)},_pollForCartShippingRatesForDestination=function(e){var t=function(){jQuery.ajax("/cart/async_shipping_rates",{dataType:"json",success:function(r,n,a){a.status===200?_onCartShippingRatesUpdate(r.shipping_rates,e):setTimeout(t,500)},error:_onError})};return t},_fullMessagesFromErrors=function(e){var t=[];return jQuery.each(e,function(e2,r){jQuery.each(r,function(r2,n){t.push(e2+" "+n)})}),t},_onError=function(XMLHttpRequest,textStatus){jQuery("#estimated-shipping").hide(),jQuery("#estimated-shipping em").empty(),_enableButtons();var feedback="",data=eval("("+XMLHttpRequest.responseText+")");feedback=data.message?data.message+"("+data.status+"): "+data.description:"Error : "+_fullMessagesFromErrors(data).join("; ")+".",feedback==="Error : country is not supported."&&(feedback="We do not ship to this destination."),_render({rates:[],errorFeedback:feedback,success:!1}),jQuery("#"+_config.wrapperId).show()},_onCartShippingRatesUpdate=function(e,t){_enableButtons();var r="";if(t.zip&&(r+=t.zip+", "),t.province&&(r+=t.province+", "),r+=t.country,e.length){e[0].price=="0.00"?jQuery("#estimated-shipping em").html("FREE"):jQuery("#estimated-shipping em").html(_formatRate(e[0].price));for(var n=0;n<e.length;n++)e[n].price=_formatRate(e[n].price)}_render({rates:e,address:r,success:!0}),jQuery("#"+_config.wrapperId+", #estimated-shipping").fadeIn()},_formatRate=function(e){function t(e2,t2){return typeof e2=="undefined"?t2:e2}function r(e2,r2,n2,a2){if(r2=t(r2,2),n2=t(n2,","),a2=t(a2,"."),isNaN(e2)||e2==null)return 0;e2=(e2/100).toFixed(r2);var i2=e2.split("."),o=i2[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+n2),s=i2[1]?a2+i2[1]:"";return o+s}if(typeof Shopify.formatMoney=="function")return Shopify.formatMoney(e,_config.moneyFormat);typeof e=="string"&&(e=e.replace(".",""));var n="",a=/\{\{\s*(\w+)\s*\}\}/,i=_config.moneyFormat;switch(i.match(a)[1]){case"amount":n=r(e,2);break;case"amount_no_decimals":n=r(e,0);break;case"amount_with_comma_separator":n=r(e,2,".",",");break;case"amount_no_decimals_with_comma_separator":n=r(e,0,".",",")}return i.replace(a,n)};return _init=function(){new Shopify.CountryProvinceSelector("address_country","address_province",{hideElement:"address_province_container"});var e=jQuery("#address_country"),t=jQuery("#address_province_label").get(0);typeof Countries!="undefined"&&(Countries.updateProvinceLabel(e.val(),t),e.change(function(){Countries.updateProvinceLabel(e.val(),t)})),jQuery(".get-rates").click(function(){_disableButtons(),jQuery("#"+_config.wrapperId).empty().hide();var e2={};e2.zip=jQuery("#address_zip").val()||"",e2.country=jQuery("#address_country").val()||"",e2.province=jQuery("#address_province").val()||"",_getCartShippingRatesForDestination(e2)}),_config.customerIsLoggedIn&&jQuery(".get-rates:eq(0)").trigger("click")},{show:function(e){e=e||{},jQuery.extend(_config,e),jQuery(function(){_init()})},getConfig:function(){return _config},formatRate:function(e){return _formatRate(e)}}}(),Shopify.Cart.ShippingCalculator.show({submitButton:theme.strings.shippingCalcSubmitButton,submitButtonDisabled:theme.strings.shippingCalcSubmitButtonDisabled,customerIsLoggedIn:theme.strings.shippingCalcCustomerIsLoggedIn,moneyFormat:theme.strings.shippingCalcMoneyFormat}),$(".qtyplus1").on("click",function(e){e.preventDefault();var currentVal=parseInt($(this).parent().find('input[name="updates[]"]').val());isNaN(currentVal)?$(this).parent().find('input[name="updates[]"]').val(1):$(this).parent().find('input[name="updates[]"]').val(currentVal+1),$("input[name='update']").trigger("click")}),$(".qtyminus1").on("click",function(e){e.preventDefault();var currentVal=parseInt($(this).parent().find('input[name="updates[]"]').val());!isNaN(currentVal)&&currentVal>0?$(this).parent().find('input[name="updates[]"]').val(currentVal-1):$(this).parent().find('input[name="updates[]"]').val(1),$("input[name='update']").trigger("click")});function shippingCall(){var x=document.getElementById("shipping-calculator-block");x.style.display==="none"?x.style.display="block":x.style.display="none"}$(".cart_heading").on("click",function(){jQuery(this).hasClass("clicked")?$(this).removeClass("clicked"):$(this).addClass("clicked")});
//# sourceMappingURL=/cdn/shop/t/4/assets/dT_shipping-cart.js.map?v=86530881418980104451646032579
