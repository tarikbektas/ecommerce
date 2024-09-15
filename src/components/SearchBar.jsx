import { useState } from "react";
import { motion } from "framer-motion";
 
 export default function SearchBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSearch = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", position: 'relative' }}>
            <motion.input
            
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: isOpen ? 180 : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    padding:'2px',
                    border :'1px solid green',
                    borderRadius:'5px',
                    position: 'absolute',
                    right: '1.5rem',
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    padding: isOpen ? "5px" : "0",
                    marginRight: "10px", // buton ile input arasına boşluk eklemek için
                    visibility: isOpen ? "visible" : "hidden", // Kapalıyken görünmez yapıyoruz
                }}
                placeholder="Ara..."
            />
            <i onClick={toggleSearch} style={{ fontSize: '27px', color: '#ffff' }} class="fa-solid fa-magnifying-glass"></i>     </div>
    );
}
