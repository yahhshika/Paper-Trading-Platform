import { tradebook } from "../../../data/data";
import * as XLSX from "xlsx";
import { Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

function Tradebook() {

  // ---------------------------
  // DOWNLOAD EXCEL FUNCTION
  // ---------------------------
  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(tradebook);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Tradebook");

    XLSX.writeFile(workbook, "Tradebook_Report.xlsx");
  };

  return (
    <>

      {/* Tradebook Table */}
      <div className="table-responsive-sm hide-x" style={{ marginBottom: "3%" }}>
        <table className="table">
          <thead>
            <tr>
              <th><h6 className="font-400">Trade Id</h6></th>
              <th><h6 className="font-400">Order Id</h6></th>
              <th><h6 className="font-400">Symbol</h6></th>
              <th><h6 className="font-400">Side</h6></th>
              <th><h6 className="font-400">Qty</h6></th>
              <th><h6 className="font-400">Price</h6></th>
              <th><h6 className="font-400">Trade Value</h6></th>
              <th><h6 className="font-400">Trade Type</h6></th>
              <th><h6 className="font-400">Executed At</h6></th>
              <th><h6 className="font-400">Status</h6></th>
            </tr>
          </thead>

          <tbody>
            {tradebook.map((trade, index) => (
              <tr key={index}>
                <td><span className="font-100">{trade.tradeId}</span></td>
                <td><span className="font-100">{trade.orderId}</span></td>
                <td><span className="font-100">{trade.symbol}</span></td>
                <td><span className="font-100">{trade.side}</span></td>
                <td><span className="font-100">{trade.quantity}</span></td>
                <td><span className="font-100">{trade.price}</span></td>
                <td><span className="font-100">{trade.tradeValue}</span></td>
                <td><span className="font-100">{trade.tradeType}</span></td>
                <td><span className="font-100">{trade.executedAt}</span></td>
                <td><span className="font-100">{trade.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Download Button */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "15px" }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<FileDownloadIcon />}
          onClick={downloadExcel}
          sx={{ borderRadius: "10px", textTransform: "none" }}
        >
          Download Trade Report
        </Button>
      </div>

      </div>
    </>
  );
}

export default Tradebook;
