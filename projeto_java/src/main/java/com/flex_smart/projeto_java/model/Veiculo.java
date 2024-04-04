package com.flex_smart.projeto_java.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "veiculo")
public class Veiculo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    String nome_veiculo;
    String modelo;
    Date anoInicial;
    Date anoFinal;
    
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getNome_veiculo() {
        return nome_veiculo;
    }
    public void setNome_veiculo(String nome_veiculo) {
        this.nome_veiculo = nome_veiculo;
    }
    public String getModelo() {
        return modelo;
    }
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }
    public Date getAnoInicial() {
        return anoInicial;
    }
    public void setAnoInicial(Date anoInicial) {
        this.anoInicial = anoInicial;
    }
    public Date getAnoFinal() {
        return anoFinal;
    }
    public void setAnoFinal(Date anoFinal) {
        this.anoFinal = anoFinal;
    }
    
}
