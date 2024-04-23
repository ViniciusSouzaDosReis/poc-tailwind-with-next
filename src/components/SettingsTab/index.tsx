'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingsTab() {
  const [currentTab, setCurrentTab] = useState('Tab1')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex items-center gap-4 border-b border-zinc-200">
        <TabItem
          title="My details"
          value="Tab1"
          isSelected={currentTab === 'Tab1'}
        />
        <TabItem
          title="Profile"
          value="Tab2"
          isSelected={currentTab === 'Tab2'}
        />
        <TabItem
          title="Password"
          value="Tab3"
          isSelected={currentTab === 'Tab3'}
        />
        <TabItem title="Team" value="Tab4" isSelected={currentTab === 'Tab4'} />
        <TabItem title="Plan" value="Tab5" isSelected={currentTab === 'Tab5'} />
        <TabItem
          title="Billing"
          value="Tab6"
          isSelected={currentTab === 'Tab6'}
        />
        <TabItem
          title="Email"
          value="Tab7"
          isSelected={currentTab === 'Tab7'}
        />
        <TabItem
          title="Notification"
          value="Tab8"
          isSelected={currentTab === 'Tab8'}
        />
        <TabItem
          title="Integrations"
          value="Tab9"
          isSelected={currentTab === 'Tab9'}
        />
        <TabItem
          title="API"
          value="Tab10"
          isSelected={currentTab === 'Tab10'}
        />
      </Tabs.List>
    </Tabs.Root>
  )
}
