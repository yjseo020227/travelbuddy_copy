$(".place_image").on('click', function(){
    console.log("image is clicked");
    console.log("this.val is" + $(this));
    var $selected_place = $(this).attr('alt');


    $.ajax({
        url:'api/data/',
        data:{'user': $selected_place},
        dataType: 'json',
        success: function(data){
            place= data['place'];

            //get the container for all_property
            var $all_places_container = $('div.all_places');

            //empty all of the all_property_container
            $all_places_container.empty();

            /*
            for (const property of properties_list){
                //get all values necessary 
                const property_name = property['name'];
                var price = property['recent_price'];
                var price = add_commas(String(price));
                const photo_url = property['photos'];

                //create a new list element 
                var $property_unique_div = $('<div class = "unique_property"></div>');
                var $property_name_tag = $('<p>' + property_name + '</p>');
                var $property_price_tag = $('<p> <strong> Property Price: </strong>'+ String(price) + '</p>' );            
                var $property_image_tag = $('<img class = "property_image">')
                $property_image_tag.attr("src" , photo_url)
                
                //finally, append it to the container
                $property_unique_div.appendTo($all_property_container);
                $property_name_tag.appendTo($property_unique_div);
                $property_price_tag.appendTo($property_unique_div);
                $property_image_tag.appendTo($property_unique_div);
                
            }
            */
                

            //loop through the properties data, get each of their photo, most recent price data, and name
        },
        error: function(error_data){
            console.log(error_data)
            console.log('there is an error')
        }

    })
})