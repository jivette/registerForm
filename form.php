<?php

try{

$response['posts'] = $_POST;

$fp = fopen('results.json', 'w');
fwrite($fp, json_encode($response));
fclose($fp);

echo json_encode(array(
        'result' => 'ok',
    ));

} catch (Exception $e) {

echo json_encode(array(
        'result' => 'error',
    ));

}


