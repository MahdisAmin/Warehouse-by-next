import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Table({ products, openEditModal, openDeleteModal }) {
  return (
    <table>
      <thead>
        <tr>
          <th>نام کالا</th>
          <th>موجودی</th>
          <th>قیمت</th>
          <th>شناسه کالا</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.price} $</td>
            <td>{product.id.split("-")}</td>
            <td></td>
            <td>
              <button onClick={() => openEditModal(product)}>
                <FaRegEdit style={{ color: "green", cursor: "pointer" }} />
              </button>
              <button onClick={() => openDeleteModal(product.id)}>
                <MdDelete style={{ color: "red", cursor: "pointer" }} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
