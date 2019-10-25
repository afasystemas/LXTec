<?php


use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

/**
* @Entity @Table(name="obra")
*/
class Obra
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
     * @Column(type="float",scale=2)
     */
    protected $valor;

    /**
     * @Column(type="string")
     */
    protected $descricao;
	
	
	
	/**
	 * @ManyToMany(targetEntity="item",cascade={"all"})
	 * @JoinTable(name="obra_itens",
	 *      joinColumns={@JoinColumn(name="obra_id", referencedColumnName="id")},
	 *      inverseJoinColumns={@JoinColumn(name="item_id", referencedColumnName="id")}
	 *      )
	 **/
    private $itens;

    function __construct()
    {
        $this->itens = new ArrayCollection();
    }


    public function getId()
    {
        return $this->id;
    }
    
    public function setId($id)
    {
        return $this->id = $id;
    }
    

    public function getNome()
    {
        return $this->nome;
    }

    public function setNome($name)
    {
        $this->nome = $name;
    }

    public function getValor()
    {
        return $this->valor;
    }

    public function setValor($valor)
    {
        $this->valor = $valor;
    }

    public function getDescricao()
    {
        return $this->descricao;
    }

    public function setDescricao($descricao)
    {
        $this->descricao = $descricao;
    }

    public function getItens()
    {
        return $this->itens;
    }

    public function setItens(ArrayCollection $ites)
    {
        $this->itens = $ites;
    }

    public function setCreated(\DateTime $created)
    {
        $this->created = $created;
    }

    public function getCreated()
    {
        return $this->created;
    }
}