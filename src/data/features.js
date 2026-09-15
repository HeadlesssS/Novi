import { ArrowUpRight, CalendarDays, Check, MessageCircle, Upload } from 'lucide-react'

export const features = [
  { number: '01', title: 'Boards that move at your speed', description: 'Plan sprints and track tasks without hunting through spreadsheets.', accent: 'sage', icon: Check, visual: 'board' },
  { number: '02', title: 'Threads, not another inbox', description: 'Keep project conversations attached to the work itself.', accent: 'clay', icon: MessageCircle, visual: 'thread' },
  { number: '03', title: 'One timeline for the whole team', description: 'Every deadline and milestone in one shared view.', accent: 'butter', icon: CalendarDays, visual: 'timeline' },
  { number: '04', title: 'Works the way you already do', description: 'Import from Trello, Asana, or a spreadsheet in minutes.', accent: 'blue', icon: Upload, visual: 'import' },
]

export const footerLinks = {
  Product: ['Features', 'Changelog', 'Roadmap'],
  Company: ['About Novi', 'Careers', 'Contact'],
  Resources: ['Help center', 'Guides', 'Community'],
  Legal: ['Privacy', 'Terms'],
}

export const ArrowIcon = ArrowUpRight