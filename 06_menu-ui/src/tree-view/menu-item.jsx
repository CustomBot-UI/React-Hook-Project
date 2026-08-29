import { useState } from 'react';
import MenuList from './menu-list';

export default function MenuItem({ item }) {

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({ item });

    return <li>

        <div style  = {{display :"flex", gap : "20px"}}>
            <p>{item.label}</p>
            {
                item && item.children && item.children.length ? <span>+</span> : null
            }

        </div>


        {
            item && item.children && item.children.length > 0 ?
                <MenuList list={item.children} />
                : null
        }
    </li>
};