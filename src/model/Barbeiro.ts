import { error } from "console";

export class Barbeiro {
    constructor(
        private id: string,
        private name: string,
        private diasTrabalho: string[],
        private horaInicio: string,
        private horafim:string
    )   {
        if (!nome) throw new Error("nome obrigatório");
}