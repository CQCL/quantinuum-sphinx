import { MobileMenu } from './MobileMenu'
import { Navigation } from './NavigationMenu'
import { QuantinuumIdent } from './QuantinuumIdent'
import { QuantinuumLogo } from './QuantinuumLogo'
import { Link, navConfig } from './config'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@cqcl/quantinuum-ui'
import { ChevronDown } from 'lucide-react'
import React, { ComponentProps } from 'react'

export const products = [
  { title: 'H-Series', href: 'https://docs.quantinuum.com/h-series' },
  { title: 'TKET', href: 'https://docs.quantinuum.com/tket' },
  { title: 'Lambeq', href: 'https://docs.quantinuum.com/lambeq' },
  { title: 'Nexus', href: 'https://docs.quantinuum.com/nexus' },
  { title: 'Inquanto', href: 'https://docs.quantinuum.com/inquanto' },
]
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
        <div className="mr-4 flex items-center flex-grow">
          <div className="block md:hidden mr-3">
            <MobileMenu></MobileMenu>
          </div>
          <div className="whitespace-nowrap flex items-center">
            <Link
              href="/"
              className="flex items-center hover:opacity-60 transition"
            >
              <div className="hidden sm:block">
                <QuantinuumLogo></QuantinuumLogo>
              </div>
              <div className="block sm:hidden">
                <QuantinuumIdent />
              </div>
              <p className="ml-2 text-foreground mt-[0.075rem] tracking-tight  uppercase text-[0.6rem] font-semibold flex items-center">
                Docs
              </p>
            </Link>
            <div className="ml-5 mr-2.5 text-muted-foreground">|</div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="mr-2">
                {navConfig.navProductName}{' '}
                <ChevronDown className="w-4 h-4"></ChevronDown>{' '}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {products.map((product) => {
                return (
                  <DropdownMenuItem key={product.title} asChild>
                    <a href={product.href}>{product.title}</a>
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-3">
          <Navigation activePath={props.activePath} linkComponent={Link} />
          <div className="mr-3 text-muted-foreground">|</div>
          <div className="flex items-center gap-2">
            {...navConfig.navIconLinks.map((link) => {
              return (
                <Link href={link.href} target="_blank" key={link.title}>
                  <img
                    src={link.iconImageURL}
                    className="flex-shrink-0 min-w-6 max-w-6 min-h-6 max-h-6 hover:opacity-70 transition"
                  ></img>
                </Link>
              )
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
