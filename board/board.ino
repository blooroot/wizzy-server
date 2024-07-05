#include <HTTPClient.h>
#include <WiFi.h>


static const char* ssid = "SAENZ- 2.4GHZ";
static const char* pswd = "22091309";

static const char* route = "http://[2800:200:e800:3b67::1]:8090/hola";


void setup() {
    Serial.begin(115200);

    Serial.printf("Trying to establish connection @ [ssid=%s pswd=%s]\r\n", ssid, pswd);
    WiFi.begin(ssid, pswd);

    while (WiFi.status() != WL_CONNECTED) {
        Serial.print(".");
        delay(500);
    }

    Serial.println();
}

void loop() {
    Serial.printf("Ongoing WiFi connection::[ssid:%s]\r\n", WiFi.SSID().c_str());
    Serial.println("===");

    HTTPClient http;
    http.begin(route);

    int status = http.GET();
    if (status != 200) {
        Serial.printf("status: error[%d]\r\n\n", status);
    } else {
        Serial.printf("status: ok[%d]\r\n\n", status);
        return;
    }
}
