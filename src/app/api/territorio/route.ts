import { Territorio } from "@/models/Territorio";
import { PrismaClient } from "@prisma/client";

const nameFunction = "Territorio"

export async function GET() {
    const prisma = new PrismaClient();
    try {
        const territorios = await prisma.territorio.findMany()
        return new Response(JSON.stringify(territorios))
    } catch (err) {
        console.log(nameFunction, 'GET', err)
        return new Response("Falha ao obter os territórios. " + err);
    }

}


export async function POST(request: Request) {
    try {
        const prisma = new PrismaClient();
        const { status, folhas, casas, territorio, observacao = "" }: Territorio = await request.json();
        const re = [{ endereco: "rua dos vianas", numero: 108, territorioId: 1 }, { endereco: "rua dos guarani", numero: 110, territorioId: 1 }]

        if (territorio && status) {
            const territorios = await prisma.territorio.create({
                data: {
                    status, folhas, casas, territorio, observacao
                },
            });

            const rejei = await prisma.rejeicao.createMany({
                data: re
            })

            return new Response(JSON.stringify(territorios));
        }

    } catch (err) {
        console.log(nameFunction, 'POST', err)
        return new Response("Falha ao salvar o território, verifique se todos os campos obrigatórios foram passados.");
    }


}