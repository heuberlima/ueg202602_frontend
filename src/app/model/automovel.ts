import { Marca } from "./marca";

export class Automovel {
    codigo!: number;
    nome!: string;
    modelo!: string;
    quantidade!: number;
    dataFabricacao!: Date;
    precoVenda!: number;
    trioEletrico!: boolean;

    marca!: Marca;

}
