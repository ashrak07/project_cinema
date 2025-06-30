const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");
const Orders = require("../Models/orderModel");

const generateTicket = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("request +++++ :", id);

    const order = await Orders.findById({ _id: id })
      .populate("projection")
      .populate("movie");
    console.log("order ==>", order);

    if (!order) {
      return res.status(404).json({ message: "Commande non trouvée" });
    }

    // HTML stylisé
    const htmlContent = `
      <html>
        <head>
          <style>
            body { font-family: Arial; padding: 40px; }
            .ticket {
              border: 2px dashed #444;
              padding: 30px;
              width: 500px;
              margin: 0 auto;
              text-align: center;
            }
            h1 { color: #ff8f00; }
            .info { margin: 10px 0; }
          </style>
        </head>
        <body>
          <div class="ticket">
            <h1>🎫 Ticket de réservation</h1>
            <p class="info"><strong>Nom:</strong> ${order.clientName}</p>
            <p class="info"><strong>Email:</strong> ${order.clientEmail}</p>
            <p class="info"><strong>Projection:</strong> ${
              order.projection.movie
            }</p>
            <p class="info"><strong>Places:</strong> ${order.seats.join(
              ", "
            )}</p>
            <p class="info"><strong>Commande ID:</strong> ${order._id}</p>
          </div>
        </body>
      </html>
    `;

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({ format: "A6", printBackground: true });
    await browser.close();

    // Sauvegarder dans le dossier /TicketGenerated
    const ticketPath = path.join(
      __dirname,
      "../TicketGenerated",
      `ticket-${order._id}.pdf`
    );
    fs.writeFileSync(ticketPath, pdfBuffer);

    res.status(200).json({
      message: "Ticket généré avec succès",
      file: `/TicketGenerated/ticket-${order._id}.pdf`,
    });
  } catch (error) {
    console.error("Erreur génération ticket :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

module.exports = {
  generateTicket,
};
