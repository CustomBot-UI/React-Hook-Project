import MenuList from './menu-list';
import { useState } from 'react';
import './style.css'


export default function TreeView({ menus = [] }) {
    return <div className="tree-view-container">
        <MenuList list={menus} />
    </div>
}

