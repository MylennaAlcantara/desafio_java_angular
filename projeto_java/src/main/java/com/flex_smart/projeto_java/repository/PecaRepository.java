package com.flex_smart.projeto_java.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.flex_smart.projeto_java.model.Peca;

public interface PecaRepository extends JpaRepository<Peca, Integer>{
    @Query(value = "SELECT * FROM peca", nativeQuery = true)
    public ArrayList<Peca> findPecaAll ();

    @Query(value = "SELECT * FROM peca WHERE codigo = :codigo LIMIT 1", nativeQuery = true)
    public Peca findByCodigo(@Param("codigo") String Codigo);

}
