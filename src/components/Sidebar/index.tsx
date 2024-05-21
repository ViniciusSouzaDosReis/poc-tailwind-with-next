import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { UserProfile } from './UserProfile'
import { Input } from '../Input'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-solid border-zinc-200 px-4 py-8">
      <Logo />
      <Input placeholder="Search" icon={Search} />

      <nav className="space-y-0.5">
        <NavItem icon={Home} title="Home" />
        <NavItem icon={BarChart} title="Dashboard" />
        <NavItem icon={SquareStack} title="Project" />
        <NavItem icon={CheckSquare} title="Tasks" />
        <NavItem icon={Flag} title="Reporting" />
        <NavItem icon={Users} title="Users" />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="mt-auto space-y-0.5">
          <NavItem icon={LifeBuoy} title="Support" />
          <NavItem icon={Cog} title="Settings" />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200" />

        <UserProfile />
      </div>
    </aside>
  )
}
