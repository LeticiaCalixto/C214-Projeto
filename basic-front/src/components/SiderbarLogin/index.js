import { Link } from 'react-router-dom';
import { FaUserTie } from "react-icons/fa";
import { MdInventory } from "react-icons/md";

import avatar from '../../assets/avatar.png';
import './style.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div>
                <img src={avatar} alt="Foto de perfil do usuário" />
            </div>
        </div>
    )
}