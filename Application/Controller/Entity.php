<?php
/**
 * Created by PhpStorm.
 * User: andrefa
 * Date: 17/10/19
 * Time: 20:42
 */

use Doctrine\Common\Persistence\ObjectManagerAware;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\Persistence\Mapping\ClassMetadata;
use Doctrine\ORM\Mapping as ORM;

class Entity implements ObjectManagerAware {

    public function injectObjectManager(ObjectManager $objectManager, ClassMetadata $classMetadata)
    {
     $this->em = $objectManager;
    }

}