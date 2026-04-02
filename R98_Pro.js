export function Name() { return "Royal Kludge R98 Pro (ISO-DE)"; }
export function VendorId() { return 0x258a; } 
export function ProductId() { return 0x0215; }
export function Publisher() { return "Hdw007 / Gemini"; }
export function Size() { return [20, 6]; } // Approximate size for a 98-key layout
export function Type() { return "hid"; }
export function ConflictingProcesses() {
    return ["DeviceDriver.exe"];
}
export function ControllableParameters() {
    return [
        {"property": "shutdownColor", "group": "lighting", "label": "Shutdown Color", "min": "0", "max": "360", "type": "color", "default": "000000"},
        {"property": "LightingMode", "group": "lighting", "label": "Lighting Mode", "type": "combobox", "values": ["Canvas", "Forced"], "default": "Canvas"},
        {"property": "forcedColor", "group": "lighting", "label": "Forced Color", "min": "0", "max": "360", "type": "color", "default": "009bde"},
    ];
}
export function ImageUrl() {
    return "https://drive.rkgaming.com/src/assets/images/keyboard_rk-r98pro_uk_null.png";
}

var vLedNames = [
    // Column 0 (Index 0-5)
    "Esc", "^", "Tab", "CapsLock", "Left Shift", "Left Ctrl",
    // Column 1 (Index 6-11)
    "F1", "1", "Q", "A", "<>", "Left Win",
    // Column 2 (Index 12-17)
    "F2", "2", "W", "S", "Y", "Left Alt",
    // Column 3 (Index 18-23)
    "F3", "3", "E", "D", "X", "None",
    // Column 4 (Index 24-29)
    "F4", "4", "R", "F", "C", "None",
    // Column 5 (Index 30-35)
    "F5", "5", "T", "G", "V", "Space",
    // Column 6 (Index 36-41)
    "F6", "6", "Z", "H", "B", "None",
    // Column 7 (Index 42-47)
    "F7", "7", "U", "J", "N", "None",
    // Column 8 (Index 48-53)
    "F8", "8", "I", "K", "M", "None",
    // Column 9 (Index 54-59)
    "F9", "9", "O", "L", ",", "AltGr",
    // Column 10 (Index 60-65)
    "F10", "0", "P", "Ö", ".", "Fn",
    // Column 11 (Index 66-71)
    "F11", "ß", "Ü", "Ä", "-", "None",
    // Column 12 (Index 72-77)
    "F12", "´", "+", "#", "None", "None",
    // Column 13 (Index 78-83)
    "Delete", "Backspace", "None", "Enter", "Right Shift", "Left Arrow",
    // Column 14 (Index 84-89)
    "Print Screen", "Num Lock", "Num 7", "Num 4", "Up Arrow", "Down Arrow",
    // Column 15 (Index 90-95)
    "Page Up", "Num /", "Num 8", "Num 5", "Num 1", "Right Arrow",
    // Column 16 (Index 96-101)
    "None", "Num *", "Num 9", "Num 6", "Num 2", "Num 0",
    // Column 17 (Index 102-107)
    "Page Down", "None", "None", "None", "Num 3", "Num .",
    // Column 18 (Index 108-112)
    "Volume Knob", "Num -", "Num +", "None", "Num Enter"
];

var vLedPositions = [
    // Column 0
    [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
    // Column 1
    [1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5],
    // Column 2
    [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5],
    // Column 3
    [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [-1, -1],
    // Column 4
    [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [-1, -1],
    // Column 5 (Space pulled to X=6)
    [5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [6, 5],
    // Column 6
    [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [-1, -1],
    // Column 7
    [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [-1, -1],
    // Column 8
    [8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [-1, -1],
    // Column 9 (AltGr pulled to X=10)
    [9, 0], [9, 1], [9, 2], [9, 3], [9, 4], [10, 5],
    // Column 10 (Fn pulled to X=11)
    [10, 0], [10, 1], [10, 2], [10, 3], [10, 4], [11, 5],
    // Column 11
    [11, 0], [11, 1], [11, 2], [11, 3], [11, 4], [-1, -1],
    // Column 12
    [12, 0], [12, 1], [12, 2], [12, 3], [-1, -1], [-1, -1],
    // Column 13 (Enter=13,2 | RShift=13,4 | LeftArrow=14,5)
    [13, 0], [13, 1], [-1, -1], [13, 2], [13, 4], [14, 5],
    // Column 14 (UpArrow=15,4 | DownArrow=15,5)
    [14, 0], [15, 1], [15, 2], [15, 3], [15, 4], [15, 5],
    // Column 15 (RightArrow=16,5)
    [15, 0], [16, 1], [16, 2], [16, 3], [16, 4], [16, 5],
    // Column 16
    [-1, -1], [17, 1], [17, 2], [17, 3], [17, 4], [17, 5],
    // Column 17 (PageDown=16,0 | Num.=18,5)
    [16, 0], [-1, -1], [-1, -1], [-1, -1], [18, 4], [18, 5],
    // Column 18 (Knob=19,0 | Num-=19,1 | Num+=19,2 | NumEnter=19,4)
    [19, 0], [19, 1], [19, 2], [-1, -1], [19, 4]
];

export function LedNames() { return vLedNames; }
export function LedPositions() { return vLedPositions; }

export function Render() {
    sendColors();
}

export function Shutdown() {
    sendColors(true);
}

// Helper function to convert HEX to RGB
function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let colors = [];
    colors[0] = parseInt(result[1], 16);
    colors[1] = parseInt(result[2], 16);
    colors[2] = parseInt(result[3], 16);
    return colors;
}

function sendColors(shutdown = false) {
    let packet = [];
    
    // Header from the USB dump
    packet[0] = 0x09;
    packet[1] = 0x08;
    packet[2] = 0x00;
    packet[3] = 0x00;
    packet[4] = 0x01;
    packet[5] = 0x00;
    packet[6] = 0x7A;
    packet[7] = 0x01;

    // Fill LEDs with colors
    for(let iIdx = 0; iIdx < vLedPositions.length; iIdx++) {
        let iPxX = vLedPositions[iIdx][0];
        let iPxY = vLedPositions[iIdx][1];
        var color;

        // If the coordinate is -1 (empty space), just send black
        if (iPxX < 0 || iPxY < 0) {
            color = [0, 0, 0];
        } else if(shutdown) {
            color = hexToRgb(shutdownColor);
        } else if (LightingMode === "Forced") {
            color = hexToRgb(forcedColor);
        } else {
            color = device.color(iPxX, iPxY);
        }

        
        let iLedIdx = (iIdx * 3) + 8; 
        
        // Color format: G-R-B
        packet[iLedIdx] = color[1];     // Green
        packet[iLedIdx + 1] = color[0]; // Red
        packet[iLedIdx + 2] = color[2]; // Blue
    }

    // Send packet to the device as a Feature/Output Report
    device.send_report(packet, 520);
}

export function Validate(endpoint) {
    // Interface: 1, Usage: 0x0001, Page: 0xff02, Collection: 0x0008
    return endpoint.interface === 1 && endpoint.usage === 0x0001 && endpoint.usage_page === 0xff02 && endpoint.collection === 0x0008;
}
