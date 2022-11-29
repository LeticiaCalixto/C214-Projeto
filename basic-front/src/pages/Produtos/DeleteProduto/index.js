import { useState } from 'react';
import { toast } from 'react-toastify';
import { MdInventory } from "react-icons/md";

import ClientUsers from '../../../services/user.js';

import Sidebar from '../../../components/SidebarEstoque';
import Title from '../../../components/Title';

import './style.css';

export default function Delete() {

    const [email, setEmail] = useState('');

    async function handleDelete(e) {
        e.preventDefault();

        const data = {
            email: email,
        }

        const update = await ClientUsers.deleteUser(data);
        console.log('update', update);
        if (update.status === 200) {
            toast.success('Usuário deletado com sucesso!');
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Deletar produto">
                    <MdInventory size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleDelete}>

                        <label>E-mail</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <button type="submit">Deletar</button>
                    </form>
                </div>

            </div>
        </div>
    )
}