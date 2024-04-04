import { PecaType } from "./PecaType";
import { VeiculoType } from "./VeiculoType";

export interface VinculoType {
    id: number;
    peca: PecaType;
    veiculos: VeiculoType[];
}