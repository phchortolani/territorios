import Image from 'next/image';


interface ICardLamina {
    id: number;
}

export default function CardLamina({ id }: ICardLamina) {

    return (
        <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <Image
                    className="pb-3 rounded-t-lg bg-cover bg-center h-72 min-w-full"
                    src={`/laminas/${id}.png`}
                    alt="Lamina"
                    width={500}
                    height={500}
                />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Territorio</h5>
                </a>

                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{id}</span>
                    <a href="#" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Trabalhado</a>
                </div>
            </div>
        </div>
    );
}
