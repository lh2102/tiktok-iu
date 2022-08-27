import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import * as searchServices from '~/apiServices/searchServices';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 500);

    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounce);

            setSearchResult(result);

            setLoading(false);
        };
        fetchApi();
    }, [debounce]);

    const handleHileResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <div>
            <Tippy
            // appendTo={() => document.body}
                interactive={true}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search_result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <div className={cx('search_title')}>Accounts</div>
                            {searchResult.map((result) => {
                                return <AccountItem key={result.id} data={result} />;
                            })}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHileResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Enter acounts and videos"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => {
                            setShowResult(true);
                        }}
                    />
                    {!!searchValue && loading === false && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </button>
                    )}
    
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>}
    
                    <button
                        className={cx('search-btn')}
                        onMouseDown={(e) => {
                            if(searchValue===""){
                                e.preventDefault();
                                inputRef.current.blur();
                            }
                            e.preventDefault();
                        }}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
