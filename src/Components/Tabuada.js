import React, { useState } from 'react';
import './Tabuada.module.css'

function Tabuada() {
    const [num, setNum] = useState('');
    const [tabuada, setTabuada] = useState([]);

    const generateTabuada = () => {
        if (num.length === 0 || isNaN(num)) {
            alert('Por favor, digite um número válido.');
        } else {
            const n = Number(num);
            const newTabuada = [];
            for (let c = 1; c <= 10; c++) {
                newTabuada.push(`${n} x ${c} = ${n * c}`);
            }
            setTabuada(newTabuada);
        }
    };

    return (
        <div className="container">
            <header>
                <h1>Tabuada</h1>
            </header>
            <section>
                <div>
                    <p>Numero:
                        <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
                        <button onClick={generateTabuada}>Gerar Tabuada</button>
                    </p>
                </div>
                <div>
                    <select size="10">
                        {tabuada.length === 0 ? <option>Digite um número</option> : tabuada.map((item, index) => <option key={index}>{item}</option>)}
                    </select>
                </div>
            </section>
            <footer>
                &copy; lucaspassos
            </footer>
        </div>
    );
}

export default Tabuada;
