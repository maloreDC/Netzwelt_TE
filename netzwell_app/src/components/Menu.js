import React, { useState } from 'react';

function Menu({ items }) {
    const [displayChildren, setDisplayChildren] = useState({});

    return (
        <ul>
            {items.map((item) => {
                return (
                    <li key={item.name}>
                        {item.name}{' '}
                        {item.children && (
                            item.children.length === 0 ? null :
                                <button
                                    onClick={() => {
                                        setDisplayChildren({
                                            ...displayChildren,
                                            [item.name]: !displayChildren[item.name],
                                        });
                                    }}
                                >
                                    {displayChildren[item.name] ? '-' : '+'}
                                </button>
                        )}
                        {displayChildren[item.name] && item.children && <Menu items={item.children} />}
                    </li>
                );
            })}
        </ul>
    );
}

export default Menu;