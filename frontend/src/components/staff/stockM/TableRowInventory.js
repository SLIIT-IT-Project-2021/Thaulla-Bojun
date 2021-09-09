import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class TableRowInventory extends Component {

    constructor(props) {
        super(props);
        this.deleteInventoryItem = this.deleteInventoryItem.bind(this);
    }

    deleteInventoryItem() {
        axios.delete('http://localhost:8070/inventories/delete/:id' + this.props.obj._id)
            .then((res) => {
                alert('Item successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
            
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.itemId}</td>
                <td>{this.props.obj.itemName}</td>
                <td>{this.props.obj.stock}</td>
                <td>{this.props.obj.stockIn}</td>
                <td>{this.props.obj.stockOut}</td>
                <td>{this.props.obj.unitPrice}</td>
                <td>{this.props.obj.date}</td>
                <td><img src ={"images/" + this.props.obj.photo} style={{width:"100px" , height:"100px"}} 
                className = "border border-danger rounded-circle"
                /></td>
                <td style={{width:"250px"}}>
                    <Link className="edit-link" to={`/editInven-stockM/${this.props.obj._id}/${this.props.obj.itemId}/${this.props.obj.itemName}/${this.props.obj.stock}/${this.props.obj.stockIn}/${this.props.obj.stockOut}/${this.props.obj.unitPrice}/${this.props.obj.date}/${this.props.obj.photo}`}>
                        <Button size="sm" variant="success"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</Button>
                    </Link >
                    
                        <Button size="sm" onClick={() => window.location.reload(true) , this.deleteInventoryItem} variant="danger"><i class="fa fa-window-close" aria-hidden="true" ></i> Delete</Button>
                        <a href="/editInven-stockM"><Button
                        type="submit"  size="sm"
                        className="btn btn-primary"
                        ><i class="fa fa-refresh" aria-hidden="true"></i> Refresh</Button></a>
                    
                </td>
            </tr>
        );
    }
}