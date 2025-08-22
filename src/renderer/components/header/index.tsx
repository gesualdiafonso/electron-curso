import * as Collapsible from '@radix-ui/react-collapsible';
import clsx from 'clsx';
import { CaretRight } from 'phosphor-react'


interface HeaderProps{
  isSiderbarOpen: boolean;
}

export default function Header( {isSidebarOpen}: HeaderProps){
  // const isMacOS = process.platform === 'darwin';
  const isMacOS = navigator.userAgent.includes('Mac')
  const isSiderbarOpen = true;

  return(
    <div
        id="header"
        className={clsx(
          'flex items-center gap-4 leading-tight relative border-b border-slate-600 transition-all duration-300 py-[1.125rem] px-6 region-drag',
          {
            'pl-24': !isSiderbarOpen && isMacOS,
            'w-screen': !isSiderbarOpen,
            'w-[calc(100vw.220px)]' : isSiderbarOpen
          }
        )}
    >
      <Collapsible.Trigger
          className={clsx(
            'h-7 w-7 text-gray-800 bg-gray-200 p-1 rounded-full relative z-[99] top-9 left-0',
            {
              hidden: !isSiderbarOpen,
              block: !isSiderbarOpen
            }
          )}
        >
          <CaretRight className="w-5 h-5" />
        </Collapsible.Trigger>

        <>
          <h1 className="text-white font-bold">Dev Clientes</h1>
        </>
      {/* <Collapsible.Root open={isSiderbarOpen}>
      </Collapsible.Root> */}
    </div>
  )
}