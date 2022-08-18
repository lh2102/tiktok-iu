import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/86601d3d7d9b327cdf6f4b8d8e5dfff2~c5_100x100.jpeg?x-expires=1660899600&x-signature=XmV1qG8Wf7BPxJF%2BCJqL7PNeN4U%3D"
                alt="aaa"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyễn Duy Huy</span>
                    <FontAwesomeIcon className={cx('icon_check')} icon={faCircleCheck}></FontAwesomeIcon>
                </p>
                <span className={cx('username')}>ndh2121@___2001</span>
            </div>
        </div>
    );
}

export default AccountItem;
