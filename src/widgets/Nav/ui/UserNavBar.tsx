import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { CircleUserRound } from 'lucide-react'
import React from 'react'

interface UserNavBarProps {
    className?: string
}

export default function UserNavBar({className}: UserNavBarProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={className}>
        <CircleUserRound className="w-8 h-8 text-slate-100" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>item item item</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="font-semibold cursor-pointer">
          Log in/Sign in
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
