import { Navigation } from './NavigationMenu'
import React, { ComponentProps } from 'react'
import { Link, navConfig } from './config'
import { QuantinuumLogo } from './QuantinuumLogo'
import { MobileMenu } from './MobileMenu'
import { QuantinuumIdent } from './QuantinuumIdent'
import { Button, 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger, } from '@cqcl/quantinuum-ui'
import { ChevronDown } from 'lucide-react'

export const MainNavigation = (props: {
  activePath: string
  linkComponent?: Link
}) => {
  const Link = props.linkComponent
    ? props.linkComponent
    : (props: ComponentProps<'a'>) => <a {...props}></a>
  return (
    <div className="bg-background text-foreground border-border sticky top-0 z-[100] w-full border-b text-sm">
      <div className=" bg-background px-3 md:px-4 mx-auto max-w-[90rem] flex h-14 items-center justify-between">
        <div className="mr-4 flex items-center">
        <div className='block md:hidden mr-3'>
            <MobileMenu></MobileMenu>
            </div>
          <div className="whitespace-nowrap flex items-center gap-2">
            <Link href="/" className='hover:opacity-60 transition'>
       
            <div className='hidden sm:block'><QuantinuumLogo></QuantinuumLogo>
            </div>
            <div className='block sm:hidden'>
             
            <QuantinuumIdent />
          
            </div>
  
            </Link>
            
            <p className="text-foreground mt-[0.075rem] tracking-tight  uppercase text-[0.6rem] font-semibold flex items-center">
             Docs         
            </p>
            <div className='ml-3 text-muted-foreground'>|</div>
          </div>
          <Link href="/" className="ml-0 mr-4 flex items-center space-x-2">
            <span className="hidden font-bold">Quantinuum</span>
          </Link>
          <DropdownMenu >
  <DropdownMenuTrigger asChild>
  <Button variant='ghost' size="sm" >
  {navConfig.navProductName} <ChevronDown className='w-4 h-4'></ChevronDown> </Button>

  </DropdownMenuTrigger>
  <DropdownMenuContent>
    {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator /> */}
    <DropdownMenuItem>TKET</DropdownMenuItem>
    <DropdownMenuItem>Inquanto</DropdownMenuItem>
    <DropdownMenuItem>H-Series</DropdownMenuItem>
    <DropdownMenuItem>Lambeq</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
          <Navigation activePath={props.activePath} linkComponent={Link} />
        </div>
       
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
        </div>
      </div>
    </div>
  )
}
