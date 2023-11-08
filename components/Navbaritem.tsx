import React from "react";
interface NavbarItemprops {
    label: string;
}

const NavbarItem: React.FC<NavbarItemprops> = ({
    label
}) => {
    return (
        <div className="text-white cursor-pointer hover:text-gray-300 transition">
           {label}
        </div>
    )
};

export default NavbarItem;