package com.flex_smart.projeto_java.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.flex_smart.projeto_java.model.Veiculo;

public interface VeiculoRepository extends JpaRepository<Veiculo, Integer> {
    @Query(value = "SELECT * FROM veiculo", nativeQuery = true)
    public ArrayList<Veiculo> findAll();

    @Query(value = "SELECT * FROM veiculo WHERE id = :id LIMIT 1", nativeQuery = true)
    public Veiculo findVeiculoId(@Param("id") Integer id);

    public Veiculo save(Veiculo veiculo);
}
