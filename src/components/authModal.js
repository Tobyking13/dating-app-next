export default function AuthModal({ setShowModal }) {
    const handleClick = () => {
        setShowModal(false);
    }

    return ( 
        <div>
            <div onClick={handleClick}>⨂</div>
        </div>
    )
}