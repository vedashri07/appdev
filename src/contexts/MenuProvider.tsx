import React, { useState } from 'react';

interface iMenuProvider {
    children: React.ReactNode,
}

const MenuContext = React.createContext({
    menuSelected: false,
    selectedMenuItem: 'Services',
    setMenuItem: (itemName: string) => { },
    setMenuSelected: () => { }
})


const MenuProvider = (props: iMenuProvider) => {
    const { children } = props
    const [selectedMenuItem, setSelectedMenuItem] = useState('Services');
    const [menuSelected, isMenuSelected] = useState(false)


    function setMenuItem(itemName: string) {
        setSelectedMenuItem(itemName)
    }

    function setMenuSelected() {
        isMenuSelected((prev) => !prev)
    }

    return (
        <div>
            <MenuContext.Provider value={{ setMenuItem, setMenuSelected, selectedMenuItem, menuSelected }} >
                {children}
            </MenuContext.Provider>
        </div>

    );
}
const MenuConsumer = MenuContext.Consumer;
export { MenuProvider, MenuContext, MenuConsumer };
