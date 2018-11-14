module.exports = function(app){
function facebookAJAX() {
    var json = {individual_placement_performances:[{"placement_id":"47a8-ba48-c836-2c8b","placement_description":"Facebook Image Ad - 25% Off One Item","placement_type_name":"Facebook Image","cost":"$21.42","impressions":418,"clicks":3,"click_through_rate_as_percentage":"0.72%","cost_per_click":"$7.14","post_engagements":93,"cost_per_post_engagements":"$0.23","reach":365}]};

    $.ajax({
    cache:false,
    type: 'POST',
    url: '/echo/json/',
    data: {
        json:JSON.stringify(json)
    },
    success: function(data) {  
        setTimeout(function() {
        //run code here
      //$('#facebook').append(data);
      console.log("Facebook data sent to the DOM");
                    }, 5000);
    },
    error:function(error){
    },
    dataType: 'json'
});
}

function googleAJAX() {
    var json = {individual_placement_performances:[{"placement_id":"645d-6a1c-688b-7066","placement_description":"Google Display - Boost - Evergreen","placement_type_name":"Google Display","cost":"$59.10","impressions":10529,"clicks":48,"click_through_rate_as_percentage":"0.46%","cost_per_click":"$1.23","reach":4623},{"placement_id":"6b69-42fd-41d1-51b2","placement_description":"Google Display - Boost - Take 25% Off","placement_type_name":"Google Display","cost":"$52.10","impressions":8411,"clicks":38,"click_through_rate_as_percentage":"0.45%","cost_per_click":"$1.37","reach":3670}]};

    $.ajax({
    cache:false,
    type: 'POST',
    url: '/echo/json/',
    data: {
        json:JSON.stringify(json)
    },
    success: function(data) {
    setTimeout(function() {
    //run code here
    //$('#google').append(data);
    console.log("Google data sent to the DOM");
                }, 100);
    },
    error:function(error){
    },
    dataType: 'json'
});
}

function businessInfoAJAX() {
    var json = {business_name:"Interview Test Business", business_image_src:"https://www.retailerwebservices.com/adrocket/images/logo.png?ccid=x1c78931"};

    $.ajax({
    cache:false,
    type: 'POST',
    url: '/echo/json/',
    data: {
        json:JSON.stringify(json)
    },
    success: function(data) { 
    setTimeout(function() {
    //run code here
    // let name = $('h2').text(data.business_name);
    // let logo = $('img').attr('href', 	data.business_image_src);
    // let bizInfo = $('div').addClass('bizInfo');
    // bizInfo.push(logo,name);
    // $('#biz').append(bizInfo);
    console.log("Biz data sent to the DOM");
    console.log(data);
                }, 200);        
    },
    error:function(error){
    },
    dataType: 'json'
});
}

//Main Program
businessInfoAJAX();
googleAJAX();
facebookAJAX();
};