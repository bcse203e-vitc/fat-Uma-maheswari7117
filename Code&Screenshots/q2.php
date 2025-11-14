
<?php

function insideOut(array $arr) {
    if (count($arr) % 2 !== 0) 
return $arr;
    $middle = array_slice($arr, 1, count($arr) - 2);
    $firstLast = array_merge(array_reverse(array_slice($arr, 0, 1)), 
array_slice($arr, -1, 1));
    return array_merge($firstLast, $middle);
}

$arr1 = [1, 2, 2, 1];
echo "insideOut(" . json_encode($arr1) . ") => " . 
json_encode(insideOut($arr1)) . "\n";

$arr2 = ["Everyone", "says", "Kelly", "is", "REALLY", "awesome"];
echo "insideOut(" . json_encode($arr2) . ") => " . 
json_encode(insideOut($arr2)) . "\n";

?>
