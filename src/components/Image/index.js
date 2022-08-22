import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);


// console.log(images.noImage);
const Image = forwardRef(({ src,className, alt,fallBack=images.noImage, ...props }, ref) => {
    const classes = cx(styles.wrapper, className);
    const [_fallBack, setFallBack] = useState('');

    const handlError = () => {
        setFallBack(fallBack);
    };
    return <img className={cx(classes)} ref={ref} src={_fallBack || src} {...props} alt={alt} onError={handlError} />;
});

export default Image;
