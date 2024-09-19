import { Table } from "@mantine/core";

function Table_warranty({data}) {
    return(
        <>
           <Table
          highlightOnHover
          verticalSpacing="md"
          horizontalSpacing="lg"
          striped
          style={{
            borderCollapse: "separate",
            borderSpacing: "0 10px",
            fontSize: "16px",
          }}
        >
          <thead
            style={{
              backgroundColor: "#7b2cbf",
              color: "white",
              textAlign: "left",
              fontSize: "18px",
              height: "50px",
            }}
          >
            <tr>
              <th style={{ padding: "12px", borderRadius: "12px 0 0 12px" }}>
                #
              </th>
              <th>Tên</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Đơn vị tính</th>
              <th>Mô tả</th>
              <th
                style={{ textAlign: "center", borderRadius: "0 12px 12px 0" }}
              >
                Hành động
              </th>
            </tr>
          </thead>
          <tbody
            style={{
              backgroundColor: "white",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
            }}
          >
            {data}
          </tbody>
        </Table>
        </>
    )
}


export default Table_warranty;