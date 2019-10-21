<?php
/**
 * Created by PhpStorm.
 * User: andrefa
 * Date: 16/10/19
 * Time: 20:24
 */


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
     * @Column(type="decimal")
     */
    protected $valor;

    /**
     * @Column(type="string")
     */
    protected $descricao;

    public function getId()
    {
        return $this->id;
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

    public function setCreated(\DateTime $created)
    {
        $this->created = $created;
    }

    public function getCreated()
    {
        return $this->created;
    }



}