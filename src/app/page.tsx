import CardLamina from '@/components/navbar/card/card-lamina'
import NavBar from '@/components/navbar/navbar'
import { Nunito } from 'next/font/google'


const nunito = Nunito({ subsets: ['latin'] })

export default function Home() {
  const territorios = new Array(45).fill(0)

  return (
    <main className='justify-center mx-2 items-center flex'>
      <div className='flex my-2 mb-24 justify-center  flex-col lg:flex-row lg:flex-wrap gap-3'>
        {
          territorios.map((e, i) => {
            return <CardLamina key={i} id={i + 1} />
          })
        }
      </div>
      {/* <NavBar /> */}
    </main>
  )
}
