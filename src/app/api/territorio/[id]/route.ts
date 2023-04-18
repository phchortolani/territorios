import { PrismaClient } from "@prisma/client";
import { readdirSync, existsSync } from 'fs';
const nameFunction = "Territorio/id"

interface iparams {
    id: string
}

export async function GET(request: Request, context: { params: iparams }) {
    const prisma = new PrismaClient();
    const { id } = context.params;
    let numberOfFiles = 0;
    let files: string[]

    if (existsSync(`${process.cwd()}/public/maps/${id}`)) {
        files = readdirSync(`${process.cwd()}/public/maps/${id}`);
        numberOfFiles = files.length;
    }

    if (!Number.isNaN(Number(id))) {
        try {
            const territorios = await prisma.territorio.findUnique({ where: { territorio: Number(id) } })
            return new Response(JSON.stringify({ ...territorios, numberOfFiles }))
        } catch (err) {
            console.log(nameFunction, 'GET', err)
            return new Response("Falha ao obter os territórios. " + err);
        }
    } else {
        return new Response("Apenas numeros são permitidos no request.");
    }

}

