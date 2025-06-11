import { Conta } from "../../src/model/Conta";
import { NumeroConta } from "../../src/model/NumeroConta";

describe("Conta", () => {

    test("sacar com sucesso", async () => {
        const conta: Conta = criarConta();
        conta.sacar(200.0);
        expect(conta.saldo).toBe(4800.00);
    });

    test("depositar com sucesso", async () => {
        const conta: Conta = criarConta();
        conta.depositar(200.0);
        expect(conta.saldo).toBe(5200.00);
    });

    test("sacar com valor zerado", async () => {
        const conta: Conta = criarConta();
        expect(() => { conta.sacar(0); }).toThrow("valor não pode ser igual ou menor que zero");
    });

    test("depositar com valor zerado", async () => {
        const conta: Conta = criarConta();
        expect(() => { conta.depositar(0); }).toThrow("valor não pode ser igual ou menor que zero");
    });

    test("sacar com valor negativo", async () => {
        const conta: Conta = criarConta();
        expect(() => { conta.sacar(-5.0); }).toThrow("valor não pode ser igual ou menor que zero");
    });

    test("depositar com valor negativo", async () => {
        const conta: Conta = criarConta();
        expect(() => { conta.depositar(-5.0); }).toThrow("valor não pode ser igual ou menor que zero");
    });

    test("sacar valor acima do saldo", async () => {
        const conta: Conta = criarContaSaldo199();
        expect(() => { conta.sacar(200.0); }).toThrow("saldo indisponível para operação");
    });

    test("conta com seis dígitos", async () => {
        const numeroConta: NumeroConta = new NumeroConta("123456");
        expect(numeroConta.numero).toBe("123456");
        expect(numeroConta.numero.length).toBe(6);
    });

    test("conta com cinco dígitos", async () => {
        expect(() => { new NumeroConta("23456"); }).toThrow("número de conta inválida");
    });

    test("conta com sete dígitos", async () => {
        expect(() => { new NumeroConta("1234567"); }).toThrow("número de conta inválida");
    });

    test("conta com valor que não sejam digitos", async () => {
        expect(() => { new NumeroConta("abc123"); }).toThrow("número de conta inválida");
    });
});

function criarConta(): Conta {
    return new Conta("123456", 5000.0);
};

function criarContaSaldo199(): Conta {
    return new Conta("123456", 199.0);
};