<?php

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
/**
 * @Entity @Table(name="item")
 */
class Item
{

    /**
     * @Id @Column(type="integer") @GeneratedValue
     */
    protected  $id;

    /**
     * @Column(type="string")
     */
    protected $nome;

    /**
     * @Column(type="integer")
     */
    protected $quantidade;

    /**
     * @Column(type="decimal")
     */
    protected $valorUnitario;


//    /**
//     * Many Users have many Users.
//     * @ManyToMany(targetEntity="Item", inversedBy="id")
//     * @JoinTable(name="Subitens",
//     *      joinColumns={@JoinColumn(name="item_id", referencedColumnName="id")},
//     *      inverseJoinColumns={@JoinColumn(name="subitem", referencedColumnName="id")}
//     *      )
//     */
//    private $subitem;


    public function getId()
    {
        return $this->id;
    }

    public function setNome($nome)
    {
        $this->nome = $nome;
    }

    public function getNome()
    {
        return $this->nome;
    }

    public function setQuantidade($quantidade)
    {
        $this->quantidade = $quantidade;
    }

    public function getQuantidade()
    {
        return $this->quantidade;
    }

    public function setValorUnitario($valorUnitario)
    {
        $this->valorUnitario = $valorUnitario;
    }

    public function getValorUnitario()
    {
        return $this->valorUnitario;
    }

    public function setSubitem(ArrayCollection $subitem)
    {
        $this->subitem = $subitem;
    }

    public function getSubitem()
    {
        return $this->subitem;
    }

}