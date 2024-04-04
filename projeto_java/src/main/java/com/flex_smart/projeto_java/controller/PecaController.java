package com.flex_smart.projeto_java.controller;

import org.springframework.web.bind.annotation.RestController;

import com.flex_smart.projeto_java.model.Peca;
import com.flex_smart.projeto_java.repository.PecaRepository;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController()
@RequestMapping("/peca")
@CrossOrigin(value = "*")
public class PecaController {
    @Autowired
    private PecaRepository pecaRepository;

    @GetMapping("")
    public ArrayList<Peca> buscarPecas() {
        return pecaRepository.findPecaAll();
    }

    @GetMapping("/{codigo}")
    public Peca buscarPecaPorCodigo(@PathVariable("codigo") String codigo) {
        return pecaRepository.findByCodigo(codigo);
    }
    
    @PostMapping("/cadastroPeca")
    public Peca crearPeca(@RequestBody Peca body) {
        return pecaRepository.save(body);
    }
    
}
