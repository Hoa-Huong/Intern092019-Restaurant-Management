I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), {"accept":"Accepted","access_denied":"Access denied!","activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"has_many":"Cannot delete record because dependent %{record} exist","has_one":"Cannot delete record because a dependent %{record} exists"}}}},"add":"Add","addr1":"9F","addr2":"434 Tran Khat Chan","addr3":"Hanoi","address":"Address","allright":"2019. All Rights Reserved","app_title":"Restaurant Manager","available":"Available","book":"Book","booking":"-Booking-","by":"by","cancel":"Cancel","cannot_sort":"Can't sort by selected type","category":"Category","check_addr":"Check out our opening hours and location address below.","contact":"Contact Us","contain":"Contain","count":"Count","create_at_asc":"Oldest","create_at_desc":"Newest","create_category_fail":"Fail to create category","create_category_suc":"Category created successfully!","create_order_detail_fail":"Add product failed!","create_order_detail_suc":"Add product successed!","create_order_fail":"Create order failed!","create_product_fail":"Create product failed! Something wrong!","create_product_suc":"Create product successed!","create_reservation":"Create reservation","create_table":"Create table","create_table_banner":"Create table","create_table_fail":"Create table failed!","create_table_suc":"successfully create table","currency":"VND","data":"load data here","date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"formats":{"default":"%Y-%m-%d","long":"%B %d, %Y","short":"%b %d"},"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"order":["year","month","day"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"half_a_minute":"half a minute","less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"x_days":{"one":"1 day","other":"%{count} days"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 month","other":"%{count} months"},"x_seconds":{"one":"1 second","other":"%{count} seconds"}},"prompts":{"day":"Day","hour":"Hour","minute":"Minute","month":"Month","second":"Seconds","year":"Year"}},"default":"Default","del_order_pro_fail":"Delete product fails! something wrong!","del_order_pro_suc":"Delete product success!","delete":"Delete","delete_confirm":"Delete?","details":"Details","disable":"Disable","disable_table_fail":"Can't disable this table! Something wrong!","disable_table_suc":"Disabled table!","edit":"Edit","edit_order_title":"Edit order","edit_table_title":"Edit table","error":"error","errors":{"connection_refused":"Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n","format":"%{attribute} %{message}","messages":{"accepted":"must be accepted","aspect_ratio_is_not":"doesn't contain aspect ratio of %{aspect_ratio}","aspect_ratio_not_landscape":"doesn't contain a landscape image","aspect_ratio_not_portrait":"doesn't contain a portrait image","aspect_ratio_not_square":"doesn't a square image","aspect_ratio_unknown":"has an unknown aspect ratio","blank":"can't be blank","confirmation":"doesn't match %{attribute}","content_type_invalid":"has an invalid content type","dimension_height_equal_to":"height must be equal to %{length} pixel","dimension_height_greater_than_or_equal_to":"height must be greater than or equal to %{length} pixel","dimension_height_inclusion":"height is not included between %{min} and %{max} pixel","dimension_height_less_than_or_equal_to":"height must be less than or equal to %{length} pixel","dimension_max_inclusion":"must be less than or equal to %{width} x %{height} pixel","dimension_min_inclusion":"must be greater than or equal to %{width} x %{height} pixel","dimension_width_equal_to":"width must be equal to %{length} pixel","dimension_width_greater_than_or_equal_to":"width must be greater than or equal to %{length} pixel","dimension_width_inclusion":"width is not included between %{min} and %{max} pixel","dimension_width_less_than_or_equal_to":"width must be less than or equal to %{length} pixel","empty":"can't be empty","equal_to":"must be equal to %{count}","even":"must be even","exclusion":"is reserved","file_size_out_of_range":"size %{file_size} is not between required range","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","image_metadata_missing":"is not a valid image","inclusion":"is not included in the list","invalid":"is invalid","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","limit_out_of_range":"total number is out of range","model_invalid":"Validation failed: %{errors}","not_a_number":"is not a number","not_an_integer":"must be an integer","odd":"must be odd","other_than":"must be other than %{count}","present":"must be blank","required":"must exist","taken":"has already been taken","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"}},"unacceptable_request":"A supported version is expected in the Accept header.\n","unavailable_session":"Session %{id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"},"helpers":{"page_entries_info":{"entry":{"one":"entry","other":"entries","zero":"entries"},"more_pages":{"display_entries":"Displaying %{entry_name} \u003cb\u003e%{first}\u0026nbsp;-\u0026nbsp;%{last}\u003c/b\u003e of \u003cb\u003e%{total}\u003c/b\u003e in total"},"one_page":{"display_entries":{"one":"Displaying \u003cb\u003e1\u003c/b\u003e %{entry_name}","other":"Displaying \u003cb\u003eall %{count}\u003c/b\u003e %{entry_name}","zero":"No %{entry_name} found"}}},"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","submit":"Save %{model}","update":"Update %{model}"}},"home":"Home","image":"Image","intro":"-introducing-","intro_burger":"FATTY BURGER","made_with":"Made with","manage_banner":"-Manage-","max_size":"Max size","name":"Name","name_asc":"Name A-\u003eZ","name_desc":"Name Z-\u003eA","new_category_title":"New category","new_product_title":"New product","new_reservation_title":"New reservation","new_table":"New table","new_table_title":"New Table","note":"Note","number":{"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"$"}},"format":{"delimiter":",","precision":3,"separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Billion","million":"Million","quadrillion":"Quadrillion","thousand":"Thousand","trillion":"Trillion","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"eb":"EB","gb":"GB","kb":"KB","mb":"MB","pb":"PB","tb":"TB"}}},"nth":{"ordinalized":{},"ordinals":{}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"number_table":"Table number","occupied":"Occupied","order":"Order","order_create_fail":"Create order failed!","order_create_suc":"Create order successed!","order_detail_not_found":"Can't find order detail","order_list":"Order lists","order_not_found":"Can't find order!","order_update_fail":"Update order failed!","order_update_suc":"Update order successed!","paying":"Pay","person_count":"Person count","person_number":"Number of person","phone":"Phone number","pick_product":"Pick your product","pick_table_placeholder":"Pick your table!","price":"Price","rate":"Rate","reservation":"Reservation","restore":"Restore","search":"Search","serving":"SERVING MORE THAN JUST BURGERS SINCE 1998","short_description":"Description","show_category_banner":"Showing categories","show_order_banner":"Listing Orders","show_order_details_banner":"Order Detail","show_product_title":"Show product","show_table_banner":"Listing Tables","status":"Status","stock":"Stock","submit":"Submit","sun_quote":"Make awesome things that matter.","sunner":"Sunner","support":{"array":{"last_word_connector":", and ","two_words_connector":" and ","words_connector":", "}},"table_info":"Table infomation","table_list":"Table lists","table_not_found":"Can't find table","table_number":"Table number","table_size":"Size","thanks":"Thanks for choosing us","time":{"am":"am","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%B %d, %Y %H:%M","short":"%d %b %H:%M"},"pm":"pm"},"total_price":"Total price","update_category_fail":"Fail to update category","update_category_suc":"Category updated successfully!","update_table_fail":"Update table failed!","update_table_suc":"Update table success","update_total_create_order_detail_fail":"Update total amount failed! Something wrong!","valid_size_img":"should be less than 5MB","valid_type_img":"must be a valid image format","views":{"pagination":{"first":"\u0026laquo; First","last":"Last \u0026raquo;","next":"Next \u0026rsaquo;","previous":"\u0026lsaquo; Prev","truncate":"\u0026hellip;"}}});
