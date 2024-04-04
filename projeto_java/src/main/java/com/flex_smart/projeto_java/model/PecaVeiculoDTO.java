package com.flex_smart.projeto_java.model;

public class PecaVeiculoDTO {
    private String descricaoPeca;
    private String codigoPeca;
    private String montadora;
    private String nomeVeiculo;
    private String modelo;

    public PecaVeiculoDTO(String descricaoPeca, String codigoPeca, String montadora, String nomeVeiculo, String modelo) {
        this.descricaoPeca = descricaoPeca;
        this.codigoPeca = codigoPeca;
        this.montadora = montadora;
        this.nomeVeiculo = nomeVeiculo;
        this.modelo = modelo;
    }

    public String getDescricaoPeca() {
        return descricaoPeca;
    }

    public void setDescricaoPeca(String descricaoPeca) {
        this.descricaoPeca = descricaoPeca;
    }

    public String getCodigoPeca() {
        return codigoPeca;
    }

    public void setCodigoPeca(String codigoPeca) {
        this.codigoPeca = codigoPeca;
    }

    public String getMontadora() {
        return montadora;
    }

    public void setMontadora(String montadora) {
        this.montadora = montadora;
    }

    public String getNomeVeiculo() {
        return nomeVeiculo;
    }

    public void setNomeVeiculo(String nomeVeiculo) {
        this.nomeVeiculo = nomeVeiculo;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    
}
