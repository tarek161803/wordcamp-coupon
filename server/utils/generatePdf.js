const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const generatePdf = (data) => {
  // Create a new PDF document with A4 size
  const doc = new PDFDocument({ size: "A4" });
  // Specify the folder path where you want to place the PDF file
  const folderPath = "./static";
  // Create the folder if it doesn't exist
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  // Pipe the PDF output to a file inside the folder
  const outputPath = path.join(folderPath, "output.pdf");
  doc.pipe(fs.createWriteStream(outputPath));

  // Set up table layout
  const tableWidth = 550;
  const cellPadding = 10;
  const columnWidth = (tableWidth - cellPadding * 6) / 5;
  const rowHeight = 60;

  // Define function to draw table rows
  function drawTableRow(rowData, xPos, yPos) {
    doc.font("Helvetica").fontSize(16);
    // Calculate text width and center position
    const textWidth = doc.widthOfString(rowData.coupon.toString());
    const centerX = xPos + (columnWidth - textWidth) / 2;
    doc.text(rowData.coupon.toString(), centerX, yPos);
  }

  // Loop through the data and add rows to the table
  let yPos = 50; // Start position for the first row
  let xPos = cellPadding; // Start position for the first column

  data.forEach((rowData, index) => {
    // Add new page if necessary
    if (yPos + rowHeight > doc.page.height - 50) {
      doc.addPage();
      yPos = 50; // Reset yPos for the new page
    }

    // Draw cell
    drawTableRow(rowData, xPos, yPos);

    // Move to the next column
    xPos += columnWidth + cellPadding;

    // If reached the end of the row, move to the next row
    if ((index + 1) % 5 === 0) {
      yPos += rowHeight;
      xPos = cellPadding;
    }
  });

  doc.end();
};

module.exports = { generatePdf };
