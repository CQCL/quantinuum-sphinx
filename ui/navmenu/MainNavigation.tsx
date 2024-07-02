import { Navigation } from './NavigationMenu'
import React, { ComponentProps } from 'react'
import { Link, navConfig } from './config'
import { QuantinuumLogo } from './QuantinuumLogo'
import { MobileMenu } from './MobileMenu'
import { Input, Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  CommandDialog, } from '@cqcl/quantinuum-ui'
import { Search } from 'lucide-react'
import { ModeSelector } from './ModeSelector'
export const MainNavigation = (props: {
  activePath: string
  linkComponent?: Link
}) => {
  const urlSearch = new URLSearchParams(window.location.search).get('q') ?? ''
  const [search, setSearch] = React.useState(urlSearch)
  const Link = props.linkComponent
    ? props.linkComponent
    : (props: ComponentProps<'a'>) => <a {...props}></a>
  return (
    <div className="bg-background text-foreground border-border sticky top-0 z-[100] w-full border-b text-sm">
      <div className=" bg-background container flex h-14 items-center justify-between">
        <div className="mr-4 flex items-center">
        <div className='block md:hidden mr-3'>
            <MobileMenu></MobileMenu>
            </div>
          <div className="whitespace-nowrap flex items-center gap-2">
            <QuantinuumLogo></QuantinuumLogo>
            <div className="text-muted-foreground text-xs font-medium flex items-center gap-1.5">
              <div>|</div><div>{navConfig.navProductName}</div>
            </div>
          </div>
          <Link href="/" className="ml-4 mr-4 flex items-center space-x-2">
            <span className="hidden font-bold">Quantinuum</span>
          </Link>
          <Navigation activePath={props.activePath} linkComponent={Link} />
        </div>

        <div className="flex items-center">
        <form
        className='mr-4'
            onSubmit={(e) => {
              e.preventDefault()
              window.location = encodeURI(
                `/search.html?q=${search}&check_keywords=yes&area=default`
              ) as any
              
            }}
          >
            <div className="relative ">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search documentation..."
                type="search"
                defaultValue={search}
                onChange={(e) => setSearch(e.target.value)}
                className="max-w-[14rem] pl-8 "
             
              />
            </div>

            <button type="submit" className="hidden"></button>
          </form>
         
          <div className="flex items-center gap-2">
            {navConfig.navIconLinks.map(link => {
                return <Link href={link.href} target='_blank' key={link.title}>
               <img src={link.iconImageURL} className='w-6 h-6 hover:opacity-70 transition dark:invert'></img>
             </Link>
            
            })}
           
           
          </div>
          <div className="mx-2 ml-4">
            <ModeSelector />
          </div>
        </div>
      </div>
    </div>
  )
}
