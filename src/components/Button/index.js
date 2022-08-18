import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disable = false,
    rounded = false,
    children,
    className,
    leftIcon,
    onClick,
    ...passProps
}) {
    let Component = 'button';

    const props = {
        onClick: onClick,
        ...passProps,
    };

    if (disable) {
        delete props.onClick;
    }

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    const classes = cx('wrapper', {
        primary: primary,
        outline: outline,
        small: small,
        large: large,
        text: text,
        disable: disable,
        rounded: rounded,
        [className]: className,
    });
    return (
        <Component {...props} className={classes}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span>{children}</span>
        </Component>
    );
}

export default Button;
