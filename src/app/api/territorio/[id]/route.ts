import { PrismaClient } from "@prisma/client";

const nameFunction = "Territorio/id"

interface iparams {
    id: string
}

export async function GET(request: Request, context: { params: iparams }) {
    const prisma = new PrismaClient();
    const { id } = context.params;

    if (!Number.isNaN(Number(id))) {
        try {
            const territorios = await prisma.territorio.findUnique({ where: { territorio: Number(id) } })
            return new Response(JSON.stringify(territorios))
        } catch (err) {
            console.log(nameFunction, 'GET', err)
            return new Response("Falha ao obter os territórios. " + err);
        }
    } else {
        return new Response("Apenas numeros são permitidos no request.");
    }

}

