<?php

if ($_SERVER["REQUEST_METHOD"] === "GET"){
  if ($_GET["currency"] === 'now'){
    $data  = file_get_contents("https://gipsy-partners.com/api/sys/analytics.json-pretty?id=1-c89b95bac18d8810ea68d56a32db1aca&item=comp&user=90&from=2023-11-01&to=2023-12-01&phase=3");
    $data_raw = json_decode($data, TRUE);
    print_r(json_encode($data_raw));
  }
}