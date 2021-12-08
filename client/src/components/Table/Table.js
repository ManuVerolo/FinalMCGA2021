import React from 'react';
import { forwardRef } from 'react';
//TABLE
import MaterialTable from 'material-table';
//ACTION DELETE
import { deleteProduct } from '../../actions/products';
//ICONS
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
//DISPATCH
import { useDispatch } from 'react-redux';
//MODAL
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

//Styles
import useStyles from './styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    DeleteIcon: forwardRef((props, ref) => <DeleteIcon {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    EditIcon: forwardRef((props, ref) => <EditIcon {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

const Table = ({columns, data, title, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [deleteId, setDeleteId] = React.useState(null);
    const handleClose = () => setOpen(false);
    const handleDelete = (id) => {
        setOpen(true);
        setDeleteId(id);
    }
    return (
      <div>
        <MaterialTable 
        icons={tableIcons}
        columns={columns}
        data={data}
        title={title}
        actions={[
          {
            icon: EditIcon,
            tooltip: 'Editar',
            onClick: (event, rowData) => setCurrentId(rowData._id)
          },
          {
            icon: DeleteIcon,
            tooltip: 'Eliminar',
            onClick: (event, rowData) => /*dispatch(deleteProduct(rowData._id))*/handleDelete(rowData)
          },
        ]}      
      />
       <Modal
        open={open}
        deleteId={deleteId}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Eliminar Producto
          </Typography>
          <Typography id="modal-modal-description" >
            Estas seguro que deseas eliminar el producto?
          </Typography>
          <Button  variant="contained" color="primary" onClick={() => { dispatch(deleteProduct(deleteId._id)); handleClose();}}>
            Eliminar
          </Button>
          <Button  variant="contained" color="secondary" onClick={handleClose}>
            Cancelar
          </Button>
        </Box>
      </Modal>
      </div>
    );
}

export default Table
