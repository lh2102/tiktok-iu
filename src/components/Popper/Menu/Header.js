import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Header({ title, onBack }) {
    return <div className={cx('wrapper')}>
        <div className={cx('header')}>
            <button className={cx('back_btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </button>
            <h5 className={cx('header_title')}>{title}</h5>
        </div>

    </div>;
}

export default Header;
