import { Navigation } from './NavigationMenu'
import React, { ComponentProps } from 'react'
import { Link, navConfig } from './config'
import { QuantinuumLogo } from './QuantinuumLogo'
import { MobileMenu } from './MobileMenu'
import { QuantinuumIdent } from './QuantinuumIdent'
export const MainNavigation = (props: {
  activePath: string
  linkComponent?: Link
}) => {
  const Link = props.linkComponent
    ? props.linkComponent
    : (props: ComponentProps<'a'>) => <a {...props}></a>
  return (
    <div className="bg-background text-foreground border-border sticky top-0 z-[100] w-full border-b text-sm">
      <div className=" bg-background px-3 md:px-4 mx-auto max-w-[90rem] flex h-14 items-center">
        <div className="mr-4 flex items-center">
       
          <div className="whitespace-nowrap flex items-center gap-2">
            <div className='hidden sm:block'><QuantinuumLogo></QuantinuumLogo>
            </div>
            <div className='block sm:hidden'>
            <QuantinuumIdent/>
            </div>
            <div className="text-muted-foreground text-xs font-medium flex items-center gap-1.5">
              <div>|</div><div>{navConfig.navProductName}</div>
            </div>
          </div>
          <Link href="/" className="ml-4 mr-4 flex items-center space-x-2">
            <span className="hidden font-bold">Quantinuum</span>
          </Link>
          
        </div>

        <div className='ml-auto'>
          <Navigation activePath={props.activePath} linkComponent={Link} />
          </div>
<div className='mr-6 ml-2 text-muted-foreground hidden md:block'>|</div>
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            {navConfig.navIconLinks.map(link => {
                return <Link href={link.href} target='_blank' key={link.title}>
               <img src={link.iconImageURL} className='flex-shrink-0 min-w-6 max-w-6 min-h-6 max-h-6 hover:opacity-70 transition'></img>
             </Link>
            
            })}
           
           
          </div>
          {/* <div className="mx-2 ml-4">
            <ModeSelector />
          </div> */}
           <div className='block md:hidden ml-3'>
            <MobileMenu></MobileMenu>
            </div>
        </div>
      </div>
    </div>
  )
}
