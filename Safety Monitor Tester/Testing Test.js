//*** CHECK THIS ProgID ***
var X = new ActiveXObject("Testing.SafetyMonitor");
WScript.Echo("This is " + X.Name + ")");
// You may want to uncomment this...
// X.Connected = true;
X.SetupDialog();
