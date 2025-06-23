import { Link } from "react-router-dom";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { ABOUT, BLOG } from "../../router/Router";


export default function Navigation() {

    return (
        <>
            <nav>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link>Home</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link>Properties</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link to={BLOG}>Blog</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link to={ABOUT}>About US</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link>Contact us</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Sign in</NavigationMenuTrigger>
                            <NavigationMenuContent className="bg-[#F4EBD0]">
                                <ul className="grid w-[200px] gap-4 ">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link className="text-[#333333]">Sign up</Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link className="text-[#333333]">Sign in</Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>

                </NavigationMenu>
            </nav>
        </>
    );

}