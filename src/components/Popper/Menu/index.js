import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useState } from 'react';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ children,hideOnClick = true, items = [],}) {
    const [history, setHistory] = useState([{ data: items }]);

    // console.log(history)
    // console.log(history.length);
    const current = history[history.length - 1]; // biến để phần tử chỉ render phần tử cuối của mảng history

    // console.log(current);

    const rendenItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item} // khi mà có sự kiện click thì mới thêm phần tử
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => {
                                // console.log(prev);
                                return [...prev, item.children];
                            });
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            hideOnClick={hideOnClick}
            interactive
            delay={[0, 300]}
            offset={[14, 15]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu_lists')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('popper_menu')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => prev.splice(prev.length - 1, 1));
                                }}
                            ></Header>
                        )}
                        <div className={cx('scroll_body')}>{rendenItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
