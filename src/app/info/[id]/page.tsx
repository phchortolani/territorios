import Image from "next/image";
import Link from "next/link";
interface params {
    params: {
        id: number
    }
}

export default function Info({ params }: params) {
    const { id } = params;
    return <div className="flex my-2 mb-24 justify-center flex-col  gap-3 mx-2  dark:text-white text-slate-900">

        <div className="flex flex-col m-auto">
            <div className="text-lg p-2 mb-3 bg-slate-600 rounded-lg text-white items-center">
                <Link href={'./'} className="flex justify-center gap-2">
                    <i className="uil uil-arrow-left"></i><span>Voltar</span>
                </Link>
            </div>
            <Image
                className="rounded-lg bg-cover shadow-lg bg-center h-72 min-w-full"
                src={`/laminas/${id}.png`}
                alt="Lamina"
                width={500}
                height={500} />
            <div className="mt-5 p-4 flex flex-col gap-3 rounded-lg shadow-lg text-white dark:bg-white dark:text-slate-900 bg-slate-500">
                <h1 className="font-bold text-xl ">Território {id}</h1>
                <hr />
                <div>
                    <span className="font-semibold">Ultima vez trabalhado</span>
                    <div>{new Date().toLocaleDateString()} - {'Quinta'}</div>
                </div>
                <div>
                    <span className="font-semibold">Quantidade de casas</span>
                    <div>50</div>
                </div>
                <div>
                    <span className="font-semibold">Ultima vez trabalhado por</span>
                    <div>Volnei</div>
                </div>
                <div>
                    <span className="font-semibold">Observação</span>
                    <div>Casa 104 só bater a tarde</div>
                </div>
                <hr />
                <div>
                    <span className="font-semibold"><i className="uil uil-exclamation-triangle dark:text-red-500"></i> Não bater nessas casas</span>
                    <div>Av Pery Ronchetti Nº 105 </div>
                    <div>R. Dino Gabriel Nº 405 </div>
                    <div>R. Dos Vianas Nº 201 </div>
                </div>
            </div>
        </div>
    </div>
}