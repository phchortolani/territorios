export async function GET(request: Request) {
    const list = [
        "MARCOS MARQUES",
        "JOAO LIMA",
        "ARNALDO",
        "GERONIMO",
        "NATANAEL",
        "BRUNO",
        "SEBASTIAO",
        "FERNANDO",
        "ALEX",
        "VOLNEI",
        "ROGERIO"
    ].sort((a: string, b: string) => {
        return a > b ? 1 : -1;
    })
    return new Response(JSON.stringify(list))
}