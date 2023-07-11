import { Cell, Column, HeaderCell, Table } from "rsuite-table";
import "../TheatresTable/TheatresTable.css";
import { Button } from "react-bootstrap";
import { updateTheatresById } from "../../../api/theatre.api";
import { deleteTheatresById } from "../../../api/theatre.api";

const ActionCell = ({ rowData, dataKey, onClick, ...props }) => {
  return (
    <Cell {...props} style={{ padding: "6px" }}>
      <Button
        appearance="link"
        onClick={() => {
          onClick(rowData._id);
        }}
      >
        {rowData.status === "EDIT" ? "Save" : "Edit"}
      </Button>
    </Cell>
  );
};
const DeleteCell = ({ rowData, dataKey, onClick, ...props }) => {
  return (
    <Cell {...props} style={{ padding: "6px" }}>
      <Button
        appearance="link"
        variant="danger"
        onClick={() => {
            if (rowData.status === "EDIT") {
                return;
              }
              onClick(rowData._id);
            }}
      >
        {rowData.status === "Delete" ? "Save" : "Delete"}
      </Button>
    </Cell>
  );
};

const EditableCell = ({ rowData, dataKey, onChange, ...props }) => {
  const editing = rowData.status === "EDIT";
  return (
    <Cell {...props} className={editing ? "table-content-editing" : ""}>
      {editing ? (
        <input
          className="rs-input"
          defaultValue={rowData[dataKey]}
          onChange={(event) => {
            onChange && onChange(rowData._id, dataKey, event.target.value);
          }}
        />
      ) : (
        <span className="table-content-edit-span">{rowData[dataKey]}</span>
      )}
    </Cell>
  );
};

const TheatresTable = ({ theatresList, setTheatersList }) => {
    
  const handleEditState = async (id) => {
    console.log(id);
    const nextData = Object.assign([], theatresList);
    const activeItem = nextData.find((item) => item._id === id);
    activeItem.status = activeItem.status ? null : "EDIT";
    setTheatersList(nextData);

    if (activeItem.status === null) {
      await updateTheatresById(activeItem._id, activeItem);
      alert(`Theater update successfully with id ${activeItem._id}`);
    }
  };

  const handleDeleteState = async (id) => {
    console.log(id);
    const nextData = theatresList.filter((item) => item._id !== id);
    setTheatersList(nextData);
    await deleteTheatresById(id,);
    alert(`Theatre deleted successfully with id ${id}`);
  };

  const handleChange = (id, key, value) => {
    //make looking the inspect inside
    console.log("inbside change");
    const nextData = Object.assign([], theatresList);
    nextData.find((item) => item._id === id)[key] = value;
    setTheatersList(nextData);
  };

  return (
    <div className="p-4">
      <h3 className="m-4 text-center "> Theatres </h3>

      <Table
        className="text-dark"
        autoHeight={true}
        rowHeight={80}
        data={theatresList}
      >
        <Column flexGrow={1} sortable resizable>
          <HeaderCell>Name</HeaderCell>
          <EditableCell dataKey="name" onChange={handleChange} />
        </Column>

        <Column flexGrow={1} sortable resizable>
          <HeaderCell>Description</HeaderCell>
          <EditableCell dataKey="description" onChange={handleChange} />
        </Column>

        <Column flexGrow={1} sortable resizable>
          <HeaderCell>PinCode</HeaderCell>
          <EditableCell dataKey="pinCode" onChange={handleChange} />
        </Column>

        <Column flexGrow={1} sortable resizable>
          <HeaderCell>City</HeaderCell>
          <EditableCell dataKey="city" onChange={handleChange} />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>Edit</HeaderCell>
          <ActionCell dataKey="_id" onClick={handleEditState} />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>Delete</HeaderCell>
          <DeleteCell dataKey="_id" onClick={handleDeleteState} />
        </Column>
      </Table>
    </div>
  );
};

export default TheatresTable;
