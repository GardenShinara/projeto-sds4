function DataTable() {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Jaqueline Mayers</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Laura Dlucca</td>
                        <td>45</td>
                        <td>35</td>
                        <td>25017.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Laura Portman</td>
                        <td>28</td>
                        <td>60</td>
                        <td>28010.50</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Claudia Miller</td>
                        <td>46</td>
                        <td>21</td>
                        <td>21021.50</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Garden Jardim</td>
                        <td>46</td>
                        <td>21</td>
                        <td>21021.50</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;