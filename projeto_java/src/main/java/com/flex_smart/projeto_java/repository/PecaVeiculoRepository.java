package com.flex_smart.projeto_java.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.flex_smart.projeto_java.model.PecaVeiculo;

public interface PecaVeiculoRepository extends JpaRepository<PecaVeiculo, Integer> {
    @Query(value = "SELECT \r\n" + //
            "    p.descricao AS descricao_peca,\r\n" + //
            "    p.codigo AS codigo_peca,\r\n" + //
            "    p.montadora,\r\n" + //
            "    v.nome_veiculo,\r\n" + //
            "    v.modelo\r\n" + //
            "FROM \r\n" + //
            "    peca p\r\n" + //
            "INNER JOIN \r\n" + //
            "    peca_veiculo pv ON p.id = pv.peca_id\r\n" + //
            "INNER JOIN \r\n" + //
            "    peca_veiculo_veiculos pvv ON pv.id = pvv.peca_veiculo_id\r\n" + //
            "INNER JOIN \r\n" + //
            "    veiculo v ON pvv.veiculos_id = v.id;\r\n" + //
            "", nativeQuery = true)
    public List<Object[]> findAllVinculo();
}
