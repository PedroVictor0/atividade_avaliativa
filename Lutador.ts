class Lutador {

    private HP: number;
    private MP: number;
    private ataque: number;
    private defesa: number;
    private equipamentoMao: string;
    private equipamentocabeca: string;
    private equipamentoCorpo: string; 
    HPmax: number;

    constructor (hp: number, mp: number, ataque: number, defesa: number, em: string, ec: string, corpo: string, hpmax: number) {
      
        this.HP = hp;
        this.MP = mp;
        this.ataque = ataque;
        this.defesa = defesa;
        this.equipamentoMao = em;
        this.equipamentocabeca = ec;
        this.equipamentoCorpo = corpo;
        this.HPmax = hpmax

    }

    public getequipamentoMao(){
        return this.equipamentoMao;
    }
     public getequipamentoCabeca(){
        return this.equipamentocabeca;
    } 
    public getequipamentoCorpo(){
        return this.equipamentoCorpo;
    }

    public getHP(){
        return this.HP
    }

    public getMP(){
        return this.MP;
    }

    public getataque(){
        this.ataque;
    }

    public getdefesa(){
        this.defesa;
    }

    exibirInfoLutador(){
        console.log(`As informações do seu lutador estão logo abaixo:
        HP: ${this.HP}
        MP: ${this.MP}
        Ataque: ${this.ataque}
        Defesa: ${this.defesa} `)
    }

    ataqueLutador(){
        return this.ataque
    }

    ataqueEspeciaç(){
        this.ataque += this.ataque + 0.50;
        this.MP -= this.MP * 0.20
        if(this.HP > this.MP){
            console.log("MP Insuficiente")
            return 0
        }
    }

    receberDano(danoSofrido: number){
        this.HP -= this.HPmax - danoSofrido
        return this.HP;
        
    }
}
