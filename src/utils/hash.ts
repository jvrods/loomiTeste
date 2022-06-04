import bcrypt from "bcrypt"

export const hashSenha = async (senha: string) => {

    const hash = await bcrypt.hash(senha, 10)

    return hash;
}


