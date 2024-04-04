package com.flex_smart.projeto_java.controller;

import org.springframework.web.bind.annotation.RestController;

import com.flex_smart.projeto_java.model.Veiculo;
import com.flex_smart.projeto_java.repository.VeiculoRepository;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController()
@RequestMapping("/veiculo")
@CrossOrigin(value = "*")
public class VeiculoController {
    @Autowired
    private VeiculoRepository veiculoRepository;

    @GetMapping("")
    private ArrayList<Veiculo> buscarVeiculos(){
        return veiculoRepository.findAll();
    }

    @GetMapping("/{id}")
    private Veiculo buscarVeiculoPorId(@PathVariable("id") Integer id){
        return veiculoRepository.findVeiculoId(id);
    }

    @PostMapping("/cadastroVeiculo")
    private Veiculo cadastrarVeiculo(@RequestBody Veiculo body){
        return veiculoRepository.save(body);
    }
}
