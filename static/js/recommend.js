
var_previous_places = []
$(".place_image").on('click', function(){
    console.log("image is clicked");
    console.log("this.val is" + $(this));
    var $selected_place = $(this).attr('alt');
    console.log("selected place is" + $selected_place);


    $.ajax({
        url:'api/data/',
        data:{'place': $selected_place},
        dataType: 'json',
        success: function(data){
            place= data['place'];
            console.log(place)

            //get the container for all_property
            var $all_places_container = $('div.all_places');

            //empty all of the all_property_container
            $all_places_container.empty();

            
            
            //get all values necessary 
            const place_name = place['name'];
            const photo_url = place['image'];
            const location = place['location']
            const mean_traffic = place['mean_traffic']

            //create a new list element 
            var $place_unique_div = $('<div class = "unique_place"></div>');

            var $place_name_tag = $('<p>' + '관광지장소: ' + place_name + '</p>');
            var $place_location_tag = $('<p> <strong> 지역이름: </strong>'+ location + '</p>' ); 
            var $place_mean_traffic = $('<p> <strong> 지난 30일 관광지 혼잡도(방문인원/수용가능인원): </strong>'+ " "+String(mean_traffic) + '</p>' );            
            var $place_image_tag = $('<img class = "property_image">')
            $place_image_tag.attr("src" , photo_url)
                
            //finally, append it to the container
            $place_unique_div.appendTo($all_places_container)
            $place_image_tag.appendTo($place_unique_div);
            $place_name_tag.appendTo($place_unique_div);
            $place_location_tag.appendTo($place_unique_div);
            $place_mean_traffic.appendTo($place_unique_div);
            
                
            
            
                

            //loop through the properties data, get each of their photo, most recent price data, and name
        },
        error: function(error_data){
            console.log(error_data)
            console.log('there is an error')
        }

    })
})