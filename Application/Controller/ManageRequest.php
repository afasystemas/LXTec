<?php


$className = $_REQUEST['class'];
$method = $_REQUEST['method'];



//if($className == '')
//    $className = dashesToCamelCase($class, true) . 'RestApi';
//else
//    $className .= 'RestApi';
//
//$method    = dashesToCamelCase($method);

//if (class_exists($className) === false) {
    require_once(  $className . '.php');
//}

$ref       = new ReflectionClass($className);
$refMethod = $ref->getMethod('createFromRequest');
$instance  = $refMethod->invoke(null);

//if ($ref->hasMethod($method) === false) {
//    throw new InvalidArgumentException(sprintf(
//        'O método "%s" não existe na classe "%s"',
//        $method,
//        $className
//    ));
//}

//if ($ref->hasMethod('__security') === true) {
//    $refMethod = $ref->getMethod('__security');
//    $refMethod->invoke($instance);
//}
//
//if ($ref->hasMethod('__before') === true) {
//    $refMethod = $ref->getMethod('__before');
//    $refMethod->invoke($instance, $method);
//}
//
//try {
    $refMethod = $ref->getMethod($method);
    $refMethod->invoke($instance);
//
//    if ($ref->hasMethod('__after') === true) {
//        $refMethod = $ref->getMethod('__after');
//        $refMethod->invoke($instance, $method);
//    }

    $refMethod = $ref->getMethod('httpResponse');
    $refMethod->invoke($instance);