export class Conta {
    private _numero: string;
    private _saldo: number;

    public constructor(numero: string, saldo: number){
        this._numero = numero;
        this._saldo = saldo;
    }

    public sacar(valor: number): void {
        this._saldo -= valor;
    }

    public get saldo() : number {
        return this._saldo;
    }

    public depositar(valor: number): void{
        this._saldo += valor;
    }
}