import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Dropdown from './Dropdown'

export default function Navbar(props: any) {
    return (
        <nav className="bg-primary">
            <div className="mx-auto max-w-screen-2xl px-2 sm:px-4">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex items-center px-2 lg:px-0">
                        <div className="flex-shrink-0 w-14 h-14">
                            <Image src={"/Logo.png"} alt="Logo" width={350} height={350} className='rounded-full aspect-square' />
                        </div>
                        <div className="hidden lg:ml-6 lg:block">
                            <div className="flex space-x-4">
                                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-white hover:bg-accent hover:text-white" --> */}
                                <a href="#" className="rounded-md bg-accent px-3 py-2 text-sm font-medium text-white">Dashboard</a>
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-accent hover:text-white">Team</a>
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-accent hover:text-white">Projects</a>
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-accent hover:text-white">Calendar</a>
                            </div>
                        </div>
                    </div>

                    <div className="flex lg:hidden">
                        {/* <!-- Mobile menu button --> */}
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:ml-4 lg:block">
                        <div className="flex items-center gap-4">
                            <button className="cursor-pointer flex rounded-full hover:bg-accent text-sm text-white">
                                <div className="indicator relative">
                                    <ShoppingCartIcon className="h-8 w-8 rounded-full text-white p-1" />
                                    <span className="absolute -top-2 -right-1 bg-neutral text-primary rounded-full w-3 h-3 text-xs leading-3">1</span>
                                </div>
                            </button>
                            <Dropdown
                                summary={<UserIcon className="h-8 w-8 rounded-full text-white p-1" />}
                                items={[
                                    <a href="#" className="block px-4 py-2 text-sm" role="menuitem" id="user-menu-item-0">Perfil</a>,
                                    <a href="#" className="block px-4 py-2 text-sm" role="menuitem" id="user-menu-item-1">Configurações</a>,
                                    <a href="#" className="block px-4 py-2 text-sm" role="menuitem" id="user-menu-item-2">Sair</a>,
                                ]}
                                classSummary='rounded-full hover:bg-accent text-sm text-white'
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div className="lg:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-white hover:bg-accent hover:text-white" --> */}
                    <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">Dashboard</a>
                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-accent hover:text-white">Team</a>
                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-accent hover:text-white">Projects</a>
                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-accent hover:text-white">Calendar</a>
                </div>
                <div className="border-t border-accent pb-3 pt-4">
                    <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium text-white">Tom Cook</div>
                            <div className="text-sm font-medium text-gray-400">tom@example.com</div>
                        </div>
                        <button type="button" className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View notifications</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-accent hover:text-white">Your Profile</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-accent hover:text-white">Settings</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-accent hover:text-white">Sign out</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
