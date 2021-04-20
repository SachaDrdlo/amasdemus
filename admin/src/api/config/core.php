<?php

// show error reporting
ini_set('display_errors', 1);
error_reporting(E_ALL);

// home page url
<<<<<<< HEAD
$home_url="https://sachadordolo.fr/amasdemus/admin/src/api";
=======
$home_url="https://sachadordolo\.fr/amasdemus/admin/src/api";
>>>>>>> c2e331773b309b262acc797924a00d43227f690c

// page given in URL parameter, default page is one
$page = isset($_GET['page']) ? trim(strip_tags($_GET['page'])) : 1;

// set number of records per page
$records_per_page = 5;

// calculate for the query LIMIT clause
$from_record_num = ($records_per_page * $page) - $records_per_page;