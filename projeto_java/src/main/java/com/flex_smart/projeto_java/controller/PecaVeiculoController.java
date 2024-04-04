package com.flex_smart.projeto_java.controller;

import org.springframework.web.bind.annotation.RestController;

import com.flex_smart.projeto_java.model.Peca;
import com.flex_smart.projeto_java.model.PecaVeiculo;
import com.flex_smart.projeto_java.model.PecaVeiculoDTO;
import com.flex_smart.projeto_java.model.Veiculo;
import com.flex_smart.projeto_java.repository.PecaRepository;
import com.flex_smart.projeto_java.repository.PecaVeiculoRepository;
import com.flex_smart.projeto_java.repository.VeiculoRepository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

@RestController()
@RequestMapping("/pecaVeiculo")
@CrossOrigin("*")
public class PecaVeiculoController {
    @Autowired
    private PecaRepository pecaRepository;

    @Autowired
    private VeiculoRepository veiculoRepository;

    @Autowired
    private PecaVeiculoRepository vinculoRepository;

    @GetMapping("")
    public ArrayList<PecaVeiculoDTO> buscarVinculos() {
        List<Object[]> results = vinculoRepository.findAllVinculo();
        ArrayList<PecaVeiculoDTO> dtos = new ArrayList<>();

        for (Object[] result : results) {
            PecaVeiculoDTO dto = new PecaVeiculoDTO(
                (String) result[0],  // descricaoPeca
                (String) result[1],  // codigoPeca
                (String) result[2],  // montadora
                (String) result[3],  // nomeVeiculo
                (String) result[4]   // modelo
            );
            dtos.add(dto);
        }

        return dtos;
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<String> cadastrarVinculo(@RequestBody PecaVeiculo body) {
        Peca peca = body.getPeca();

        if (peca == null || peca.getId() == null) {
            return ResponseEntity.badRequest().body("Peça inválida");
        }

        Peca pecaOptional = pecaRepository.findById(peca.getId()).orElse(null);
        if (pecaOptional == null) {
            return ResponseEntity.badRequest().body("Peça não encontrada");
        }

        List<Veiculo> veiculos = body.getVeiculos();
        if (veiculos == null || veiculos.isEmpty()) {
            return ResponseEntity.badRequest().body("Nenhum veículo fornecido");
        }

        for (Veiculo veiculo : veiculos) {
            Veiculo veiculoOptional = veiculoRepository.findById(veiculo.getId()).orElse(null);
            if (veiculoOptional != null) {
                PecaVeiculo vinculo = new PecaVeiculo();
                vinculo.setPeca(pecaOptional);
                vinculo.getVeiculos().add(veiculoOptional);
                vinculoRepository.save(vinculo);
            }
        }

        return ResponseEntity.ok().body("{\"message\": \"Vínculos cadastrados com sucesso\"}");
    }

}
