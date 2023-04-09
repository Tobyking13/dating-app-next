import styles from '../styles/footer.module.css';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <div>
            <p className={`center-align ${styles.footer}`}>
            {`© ${year} Humpsta`}
            </p>
        </div>
    );
}