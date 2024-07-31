({
    name: "SPI-RFID", // Category Name
    description: "ESP32 RFID reader Mifare 13.56MHz SPI interface",
    author: "Jira-edu",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#3498DB", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        "rfid_is_detected",
        "rfid_read_uid"
    ],
    chip: [
        "ESP32"
    ]
});
