import { ButtonProps } from "./Button.props";
import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({children, appearance}: ButtonProps): JSX.Element => {
    return (
        <button className={styles.button} >
            {children}
            
        </button>
    );
};