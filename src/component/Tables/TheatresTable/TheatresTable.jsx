import { Cell, Column, HeaderCell, Table} from "rsuite-table";
import '../TheatresTable/TheatresTable.css';

const TheatresTable = ({theatresList})=>{


    return   <div className="p-4">
         <h3 className="m-4 text-center ">  Theatres </h3>

         <Table className="text-dark" autoHeight={true} rowHeight={80} data={theatresList}>

                <Column flexGrow={1}  sortable fixed resizable>
                <HeaderCell>ID</HeaderCell>
                <Cell dataKey="_id" />
                </Column>


                <Column flexGrow={1}  sortable resizable>
                <HeaderCell>Name</HeaderCell>
                <Cell dataKey="name" />
                </Column>

                <Column flexGrow={1}   sortable resizable>
                <HeaderCell>Description</HeaderCell>
                    <Cell dataKey="description" />
                </Column>

                <Column flexGrow={1}   sortable resizable>
                <HeaderCell>PinCode</HeaderCell>
                    <Cell dataKey="pinCode" />
                </Column>

                <Column  flexGrow={1}  sortable resizable>
                <HeaderCell>City</HeaderCell>
                    <Cell dataKey="city" />
                </Column>


  </Table>
     </div>

}

export default TheatresTable;