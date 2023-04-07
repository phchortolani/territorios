import Image from 'next/image';
import Link from 'next/link';


interface ICardLamina {
    id: number;
}

export default function CardLamina({ id }: ICardLamina) {

    return (
        <div className="w-full max-w-md bg-white border-spacing-1 border-gray-200 rounded-lg  shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className='relative'>
                <div className='absolute h-full w-full'>
                    <div className='flex flex-col justify-between h-full' >
                        <div className='flex justify-between'>
                            <div>
                                <div className=' backdrop:blur-lg opacity-95 bg-slate-600 rounded-tl-md  rounded-br-lg shadow-lg z-50 h-10 w-14 flex items-center justify-center'>
                                    <h5 className="text-lg font-semibold tracking-tight text-white">{id}</h5>
                                </div>
                            </div>
                            <div>
                                <div className='backdrop:blur-lg opacity-95 bg-slate-600 cursor-pointer rounded-tr-md hover:bg-gray-800 rounded-bl-lg shadow-lg z-50 h-10 w-14 flex items-center justify-center'>
                                    <Link href={`/info/${id}`}>
                                        <i className='uil text-white uil-info-circle' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-around items-center backdrop:blur-lg rounded-b-md h-14 shadow bg-gradient-to-b z-10 from-slate-600 to-slate-700 '>
                            <div className='flex items-center justify-center rounded-bl-md hover:bg-gray-800 w-full text-white cursor-pointer border-gray-700 bg-slate-700 shadow-lg z-50 h-full'>
                                <button type='button' >
                                    <i className='uil text-white uil-file-times-alt' /> <span>Não trabalhado</span>
                                </button>
                            </div>

                            <div className='flex items-center justify-center  rounded-br-md bg-green-500 w-full  text-white cursor-pointer border-gray-700 hover:bg-green-700 rounded-sm shadow-lg z-50 h-full '>
                                <button type='button' >
                                    <i className='uil text-white uil-check-circle' /> <span>Trabalhado</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                <Image
                    className="rounded-lg bg-cover bg-center h-72 min-w-full"
                    src={`/laminas/${id}.png`}
                    alt="Lamina"
                    width={500}
                    height={500}
                />
            </div>
            {/*     <div className="px-5 pb-5">
                <div>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{id}</h5>
                </div>

            </div> */}
        </div >
    );
}
